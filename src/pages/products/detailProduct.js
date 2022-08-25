import toastr from "toastr";
import { get } from "../../api/products";
import { addToCart } from "../../utils/carts";
import $ from "../../utils/selector";
import "toastr/build/toastr.min.css";

const ProductDetail = {
    async render(id) {
        const { data } = await get(id);
        // return `Detail`;
        return `<div class="max-w-5xl mx-auto">
            <h1>${data.name}</h1>
            <img src="${data.img}" />
            <p>${data.desc}</p>
            <h3>${data.price.toLocaleString("vi", { style: "currency", currency: "VND" })}</h3>
            <p>
                <input type="number" id="inputValue">
                <button id="btnAddToCart" class="inline-block px-4 py-3 bg-indigo-500 text-white">
                    Add to cart
                </button>  
            </p>
        </div>
        `;
    },
    afterRender(id) {
        $("#btnAddToCart").addEventListener("click", async () => {
            try {
                const { data } = await get(id);
                toastr.success("Thêm sản phẩm vào giỏ hàng thành công");
                addToCart({ ...data, quantity: $("#inputValue").value ? Number($("#inputValue").value) : 1 });
                $("#inputValue").reset();
            } catch (error) {
                toastr.error(error.response.data);
                $("#inputValue").reset();
            }
        });
    },
};
export default ProductDetail;