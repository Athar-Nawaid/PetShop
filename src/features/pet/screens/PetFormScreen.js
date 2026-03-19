import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import AppInput from "../../../shared/components/AppInput";
import AppButton from "../../../shared/components/AppButton";
import ImagePickerInput from "../components/ImagePickerInput";
import usePetForm from "../hooks/usePetForm";
import { submitPet } from "../services/petApi";
import Loader from "../../../shared/components/Loader";


export default function PetFormScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, errors } = usePetForm();

  const onSubmit = async (data) => {
    if (!image) {
      Alert.alert("Error", "Please select an image");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        id: Date.now().toString(),
        ...data,
        image,
      };

      submitPet(payload).catch(() => {});

      navigation.navigate("PetList", {
        newPet: payload,
      });

    } catch (error) {
      Alert.alert("Error", error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Pet</Text>

      <ImagePickerInput onImagePicked={setImage} />

      <AppInput
        label="Pet Name"
        name="name"
        control={control}
        error={errors.name?.message}
      />

      <AppInput
        label="Breed"
        name="breed"
        control={control}
        error={errors.breed?.message}
      />

      <AppInput
        label="Age"
        name="age"
        control={control}
        keyboardType="numeric"
        error={errors.age?.message}
      />

      <AppInput
        label="Price"
        name="price"
        control={control}
        keyboardType="numeric"
        error={errors.price?.message}
      />

      {loading && <Loader />}
      <AppButton title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
});