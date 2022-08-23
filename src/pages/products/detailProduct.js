import { get } from "../../api/products";
import addToCart from "../../utils/carts";
import $ from "../../utils/selector";

const ProductDetail = {
    async render(id) {
        console.log(id);
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
        console.log(id);
        $("#btnAddToCart").addEventListener("click", async () => {
            const { data } = await get(id);
            console.log(data);
            addToCart({ ...data, quantity: $("#inputValue").value ? $("#inputValue").value : 1 });
        });
    },
};
export default ProductDetail;