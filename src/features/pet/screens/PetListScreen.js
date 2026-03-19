import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import { ROUTES } from "../../../app/navigation/routes";
import { View, FlatList, StyleSheet, Text } from "react-native";
import PetCard from "../components/PetCard";
import useCartStore from "../../../shared/store/useCartStore";

export default function PetListScreen({ route, navigation }) {
  const [pets, setPets] = useState([]);

  const addToCart = useCartStore((state) => state.addToCart);
  const cartItems = useCartStore((state) => state.cartItems);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  useEffect(() => {
    if (route.params?.newPet) {
      setPets((prev) => [route.params.newPet, ...prev]);
    }
  }, [route.params]);

  console.log("LIST CART:", cartItems);

  return (
    <View style={styles.container}>
      <Button
        title="Go to Cart"
        onPress={() => navigation.navigate(ROUTES.CART)}
      />
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PetCard pet={item} onAddToCart={addToCart} />
        )}
        ListEmptyComponent={<Text>No pets yet</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});