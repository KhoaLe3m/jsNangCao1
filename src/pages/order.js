import $ from "jquery-validation";
import toastr from "toastr";
import { addOrder } from "../api/orders";
import { addOrderId } from "../api/ordersid";
import { add } from "../api/recipients";
import "toastr/build/toastr.min.css";

const pageOrder = {
    render() {
        let sum = 0;
        let cart = [];
        if (localStorage.getItem("user")) {
            if (localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"));
                // eslint-disable-next-line no-restricted-syntax
                for (const item of cart) {
                    sum += item.price * item.quantity;
                }
                return /* html */`
                <div class="grid grid-cols-4 gap-4">
                    <div class="col-span-2">
                        <h1 class="text-center text-3xl text-blue-500">Thông tin người nhận</h1>
                        <form id="formAddRecipient">
                            <br>
                            <label class="ml-3">Họ và tên:</label>
                            <input type="text" id="name" name="name" class="border-2 rounded-md">
                            <br><br>
                            <label class="ml-3 ">Số điện thoại:</label>
                            <input type="number" id="phone" name="phone" class="border-2 rounded-md">
                            <br><br>
                            <label class="ml-3">Địa chỉ:</label>
                            <br>
                            <textarea  type="text" id="address" name="address" class=" ml-3 border-2 rounded-md w-full mx-auto"></textarea>
                            <br><br>
                            <button class=" text-center border-2 p-1 rounded-md bg-green-500 hover:text-white">Xác nhận đặt hàng</button>
                        </form>
                    </div>
                    <div class="col-span-2">
                        <div class="border-2 text-xl">
                        <h1 class="text-center text-3xl text-blue-500">Thông tin đơn hàng</h1>
                            ${cart.map((item) => `
                                <p class="ml-2 text-center">Tên món hàng: <span class="text-2xl">${item.name}</span></p>
                                <p class="ml-2 text-center">Số lượng: <span class="text-2xl">${item.quantity}</span></p>
                                <p class="ml-2 text-center">Tiền của món hàng:<span class="text-2xl"> ${(item.price * item.quantity).toLocaleString("vi", { style: "currency", currency: "VND" })}</span></p>
                            `).join("")}
                            <p style='text-align:right'>Tổng tiền: <span class="text-2xl text-red-500">${sum.toLocaleString("vi", { style: "currency", currency: "VND" })}</span></p>
                        </div>
                    </div>
                </div>
            `;
            }
        } else {
            alert("Bạn cần phải đăng nhập!");
            window.location.href = "/signin";
        }
    },
    afterRender() {
        let sum = 0;
        let cart = [];
        const formAddRecipient = $("#formAddRecipient");
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
            for (const item of cart) {
                sum += item.price * item.quantity;
            }
            formAddRecipient.validate({
                rules: {
                    name: {
                        required: true,
                    },
                    phone: {
                        required: true,
                    },
                    address: {
                        required: true,
                    },
                },
                messages: {
                    name: {
                        required: "Trường này không được để trống",
                    },
                    phone: {
                        required: "Trường này không được để trống",
                    },
                    address: {
                        required: "Trường này không được để trống",
                    },
                },
                submitHandler() {
                    const idRecipient = JSON.parse(localStorage.getItem("user")).id;
                    const idOrder = Math.floor(Math.random() * 1000);
                    async function addOrders() {
                        try {
                            add({
                                name: document.querySelector("#name").value,
                                phone: document.querySelector("#phone").value,
                                address: document.querySelector("#address").value,
                                id: idRecipient,
                            });
                            addOrderId({
                                idRecipient,
                                id: idOrder,
                                creatAt: new Date().toLocaleString("en-US"),
                                status: "Chưa xác nhận",
                            });
                            addOrder({
                                item: cart,
                                idOrder,
                                sum,
                            });
                            toastr.success("xác nhận đặt hàng thành công!");
                            setTimeout(() => {
                                localStorage.removeItem("cart");
                                document.location.href = "/cart";
                            }, 4000);
                        } catch (error) {
                            toastr.error(error.response.data);
                        }
                    }
                    addOrders();
                },
            });
        }
    },
};
export default pageOrder;