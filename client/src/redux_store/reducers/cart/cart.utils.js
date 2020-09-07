export const addProductToCart = (products, newProduct) => {
  const isNewProductExist = products.find(product => product._id === newProduct._id);
  if (isNewProductExist) {
    return [...products];
  }
  return [...products, { ...newProduct, inventory: newProduct.inventory, quantity: 1 }];

}


export const getCartTotal = (products) => products.reduce((total, product) => total + product.price * product.quantity, 0);
