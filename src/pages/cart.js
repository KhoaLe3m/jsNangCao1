import { decreaseQuantity, increaseQuantity, removeProduct } from "../utils/carts";
import reRender from "../utils/reRender";
import $ from "../utils/selector";

const CartPage = {
    render() {
        let sum = 0;
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
            // eslint-disable-next-line no-restricted-syntax
            for (const item of cart) {
                sum += item.price * item.quantity;
            }
            return `
            <div class="max-w-5xl mx-auto">
                <table class=" w-full">
                    <thead class="bg-gray-200 ">
                        <tr>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left">Tên sản phẩm</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left">Giá sản phẩm</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left">Số Lượng</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left">Xóa sản phẩm</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left">Tổng tiền</th>  
                        </tr>
                    </thead>
                    <tbody>
                        ${cart.map((item) => `
                            <tr class="bg-white">
                                <td class="p-3 text-sm text-gray-700">${item.name}</td>
                                <td class="p-3 text-sm text-gray-700">${item.price.toLocaleString("vi", { style: "currency", currency: "VND" })}</td>
                                <td class="p-3 text-sm text-gray-700">
                                    <button data-id="${item.id}" class="btn btn-increase p-1 rounded-sm bg-gray-300  hover:bg-gray-500" >+</button>
                                    ${item.quantity}
                                    <button data-id="${item.id}" class="btn btn-decrease p-1 rounded-sm bg-gray-300  hover:bg-gray-500" >-</button>
                                </td>
                                <td class="p-3 text-sm text-gray-700"><button data-id="${item.id}" class="btn btn-remove p-1 rounded-sm bg-gray-300 hover:bg-gray-500">remove</button></td>
                                <td class="p-3 text-sm text-gray-700">${(item.price * item.quantity).toLocaleString("vi", { style: "currency", currency: "VND" })}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                    <tr cellpadding="0px" cellspacing="0px">
                        <td colspan='5' style='text-align:right'><h1>Tổng tiền = ${sum.toLocaleString("vi", { style: "currency", currency: "VND" })}</h1></td>
                    </tr>
                </table>
                
            </div>
        `;
        }
        return "<div class='max-w-5xl mx-auto'>No Item<div>";
    },
    afterRender() {
        const btns = $(".btn");
        btns.forEach((btn) => {
            btn.addEventListener("click", () => {
                const { id } = btn.dataset;
                if (btn.classList.contains("btn-increase")) {
                    increaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                    });
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