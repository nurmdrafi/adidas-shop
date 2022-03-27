const addToLocalStorage = (id) => {
  let shoppingCart = {}; // inital value

  // get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    shoppingCart[id] = quantity + 1;
  } else {
    shoppingCart[id] = 1;
  }

  // finally update local storage
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

// get stored Cart
const getStoredCart = () => {
  let shoppingCart = {};

  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

// remove single item from Cart
const removeItemFromCart = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");

  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

// delete all Cart from local storage
const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export {
  addToLocalStorage,
  getStoredCart,
  removeItemFromCart,
  deleteShoppingCart,
};
