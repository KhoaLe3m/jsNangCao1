import toastr from "toastr";
import { get } from "../../api/products";
import { addToCart } from "../../utils/carts";
import $ from "../../utils/selector";
import "toastr/build/toastr.min.css";

const ProductDetail = {
    async render(id) {
        const { data } = await get(id);
        // return `Detail`;
        return `
            <div class="max-w-5xl mx-auto block">
                <a href="/#/">Home</a>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 " style="background-image: url()">
                    <img style="height:400px" src="${data.img}" />
                    </div>
                    <div class="col-span-2 text-2xl font-mono text-bold ">
                    <h1>${data.name}</h1>
                    <h3 class="text-red-500">${data.price.toLocaleString("vi", { style: "currency", currency: "VND" })}</h3>
                    </div>
                    <div class="row-span-2 col-span-2 font-mono">
                    <p>${data.desc}</p>
                    <p>
                        <label>Nhập số lượng</label>
                        <br>
                        <input class="p-2 border-2 border-solid border-rose-600 rounded-md" type="number" id="inputValue">
                        <br>
                        <button id="btnAddToCart" class="inline-block px-4 py-3 bg-indigo-500 text-white mt-3 rounded-md">
                            Add to cart
                        </button>
                    </p>
                    </div>
                </div>
                <div class="relative">
                <h1 class="text-3xl ">Bình luận</h1>
                <textarea class="w-full border-2 rounded-md border-black"></textarea>
                <br>
                <button class="p-3 bg-blue-300 rounded-md top-0">Enter</button>
                </div>
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