import { getAll } from "../../api/products";

const ProductPage = {
    async render() {
        const { data } = await getAll();
        return /* html */`
            <div class="max-w-5xl mx-auto">
                <div class="banner">
                    <img src="https://picsum.photos/2048/300">
                </div>
                <div class="news">
                    <h2 class="text-2xl font-semibold my-4">Tin tức học tập</h2>
                    <div class="grid grid-cols-3 gap-8">
                        ${data.map((product) => `
                        <div class="border p-4">
                            <a href="/products/${product.id}">
                                <img src="${product.img}">
                            </a>
                            <h3 my-4><a href="/products/${product.id}" class="font-semibold text-lg text-orange-400">${product.name}</a></h3>
                            <h3>${product.price.toLocaleString("vi", { style: "currency", currency: "VND" })}</h3>
                        </div>
                        `).join("")}
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
};
export default ProductPage;