export const addProductToCart = (products, newProduct) => {
  const isNewProductExist = products.find(product => product._id === newProduct._id);
  if (!isNewProductExist) {
    return [...products, { ...newProduct, inventory: newProduct.inventory, quantity: 1 }];
  } else {
    return [...products];
  }
}


export const getCartTotal = (products) => products.reduce((total, product) => total + product.price * product.quantity, 0);
export const getCartProductsLength = (products) => products.reduce((total, product) => total + product.quantity, 0);