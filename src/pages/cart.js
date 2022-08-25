import { decreaseQuantity, increaseQuantity, removeProduct } from "../utils/carts";
import reRender from "../utils/reRender";
import $ from "../utils/selector";

const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
            return `
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th>Giá sản phẩm</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${cart.map((item) => `
                            <tr>
                                <td>${item.name}</td>
                                <td>${item.price.toLocaleString("vi", { style: "currency", currency: "VND" })}</td>
                                <td>
                                    <button data-id="${item.id}" class="btn btn-increase" >+</button>
                                    <button data-id="${item.id}" class="btn btn-decrease" >-</button>
                                </td>
                                <td><button data-id="${item.id}" class="btn btn-remove">remove</button></td>
                            </tr>
                        `)}
                    </tbody>
                </table>
            </div>
        `;
        }
        return "No Item";
    },
    afterRender() {
        const btns = $(".btn");
        console.log(btns);
        btns.forEach((btn) => {
            btn.addEventListener("click", () => {
                const { id } = btn.dataset;
                if (btn.classList.contains("btn-increase")) {
                    increaseQuantity(id);
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                    });
                } else if (btn.classList.contains("btn-remove")) {
                    removeProduct(id, () => {
                        reRender(CartPage, "#app");
                    });
                }
            });
        });
    },
};
export default CartPage;