import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AppButton from "../../../shared/components/AppButton";
import { COLORS } from "../../../shared/theme/colors";

export default function PetCard({ pet, onAddToCart }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: pet.image }} style={styles.image} />

      <Text style={styles.name}>{pet.name}</Text>
      <Text>Breed: {pet.breed}</Text>
      <Text>Age: {pet.age}</Text>
      <Text style={styles.price}>₹{pet.price}</Text>

      <AppButton
        title="Add to Cart"
        onPress={() => {
          console.log("CLICKED");
          onAddToCart(pet);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 12,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text,
  },
  price: {
    marginVertical: 5,
    fontWeight: "bold",
    fontSize: 16,
    color: COLORS.primary,
  },
});