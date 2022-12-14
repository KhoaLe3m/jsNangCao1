let cart = [];
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

export const addToCart = (newProduct) => {
    const existProduct = cart.find((item) => item.id === newProduct.id);
    if (!existProduct) {
        cart.push(newProduct);
    } else {
        existProduct.quantity += newProduct.quantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
};
export const increaseQuantity = (id, callback) => {
    cart.find((item) => item.id === id).quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    callback();
};
export const decreaseQuantity = (id, callback) => {
    const currentCart = cart.find((item) => item.id === id);
    currentCart.quantity -= 1;
    if (currentCart.quantity < 1) {
        const result = window.confirm("Bạn có muốn xóa dòng này không?");
        if (result) {
            cart = cart.filter((item) => item.id !== id);
        } else {
            currentCart.quantity += 1;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    if (cart.length === 0) {
        localStorage.removeItem("cart");
    }
    callback();
};
export const removeProduct = (id, callback) => {
    const result = window.confirm("Bạn có muốn xóa dòng này không?");
    if (result) {
        cart = cart.filter((item) => item.id !== id);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    if (cart.length === 0) {
        localStorage.removeItem("cart");
    }
    callback();
};