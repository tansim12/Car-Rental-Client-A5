import { TCartData } from "../types/addToCart.type";

export const handleAddToCart = (data: Partial<TCartData>) => {
  // Retrieve the current cart data from local storage
  const getAddToCartData = localStorage.getItem("addToCart");

  // Initialize the cart with existing data or an empty array if none exists
  const cartItems: TCartData[] = getAddToCartData
    ? JSON.parse(getAddToCartData)
    : [];

  // Check if the item is already in the cart
  const existingProductIndex = cartItems.findIndex(
    (item) => item._id === data._id
  );

  if (existingProductIndex >= 0) {
    const availableQuantity = data?.quantity || 0;
    // If the item is already in the cart, update the quantity  
    if (cartItems[existingProductIndex].buyQuantity >= availableQuantity) {
      return{
        status:false,
        message : `This product quantity out of Stock ${data?.quantity}`
      }
    }
    cartItems[existingProductIndex].buyQuantity += data.buyQuantity || 1;
  } else {
    if (cartItems?.length > 2) {
      return {
        status:false,
        message: "Already 3 Product Added Cart",
      };
    }

    // If the item is not in the cart, add it
    cartItems.push({
      _id: data?._id as string,
      name: data?.name as string,
      price: data?.price as number,
      buyQuantity: data?.buyQuantity || 1,
      image: data?.image as string,
      quantity:data?.quantity as number
    });
  }

  // Save the updated cart back to local storage
  localStorage.setItem("addToCart", JSON.stringify(cartItems));
  return {
    status:true,
    message: "Product Added To Cart",
  };
};


export const handleRemoveFromCart = (_id: string) => {
  // Retrieve the current cart data from local storage
  const getAddToCartData = localStorage.getItem("addToCart");

  // Initialize the cart with existing data or an empty array if none exists
  let cartItems: TCartData[] = getAddToCartData
    ? JSON.parse(getAddToCartData)
    : [];

  // Filter out the item with the matching _id
  cartItems = cartItems.filter((item) => item._id !== _id);
  // Save the updated cart back to local storage
  localStorage.setItem("addToCart", JSON.stringify(cartItems));

};
