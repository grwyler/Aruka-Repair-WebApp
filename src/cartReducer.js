export default function cartReducer(cart, action) {
  switch (action.type) {
    case "empty":
      return [];
    case "add": {
      const { id, sku } = action;
      const itemInCart = cart.find((item) => item.sku === sku);
      if (itemInCart) {
        return cart.map((item) =>
          item.sku === sku ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...cart, { id, sku, quantity: 1 }];
      }
    }
    case "updateQuantity":
      const { quantity, sku } = action;
      return quantity === 0
        ? cart.filter((item) => item.sku !== sku)
        : cart.map((item) => (item.sku === sku ? { ...item, quantity } : item));
    default:
      throw new Error("Unhandled action " + action.type);
  }
}
