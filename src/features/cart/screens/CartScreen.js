
import { COLORS } from "../../../shared/theme/colors";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useCartStore from "../../../shared/store/useCartStore";
import AppButton from "../../../shared/components/AppButton";

export default function CartScreen() {
  const state = useCartStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>

      {state.cartItems.length === 0 ? (
        <Text style={styles.empty}>Cart is empty</Text>
      ) : (
        state.cartItems.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>₹{item.price}</Text>

            <AppButton
              title="Remove"
              onPress={() => state.removeFromCart(item.id)}
            />
          </View>
        ))
      )}

      <Text style={styles.total}>
        Total: ₹{state.getTotalPrice()}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },
  card: {
    backgroundColor: COLORS.card,
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  price: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
  total: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
  },
  empty: {
    textAlign: "center",
    marginTop: 20,
    color: COLORS.muted,
  },
});