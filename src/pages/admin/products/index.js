import toastr from "toastr";
import { getAll, remove } from "../../../api/products";
import reRender from "../../../utils/reRender";

const AdminProducts = {
    async render() {
        const { data } = await getAll();
        return /* html */`
            <div class="max-w-5xl mx-auto">
                <h1 class="text-center text-2xl text-blue-300">Quản lý sản phẩm</h1>
                <a href="/admin/products/add" class="inline-block w-30 p-2 border border-slate-300 rounded-md text-xl bg-green-500"><i class="fa-solid fa-plus"></i> Thêm sản phẩm</a>
                <table class="table-auto border-collapse border border-slate-400 item-center">
                    <thead class="border">
                        <tr class="bg-gray-500">
                            <th class="border border-slate-300 pr-3 pl-3">STT</th>
                            <th class="border border-slate-300 pr-3 pl-3">Tên</th>
                            <th class="border border-slate-300 pr-3 pl-3">Giá</th>
                            <th class="border border-slate-300 pr-3 pl-3">Ảnh</th>
                            <th class="border border-slate-300 pr-3 pl-3">Mô tả</th>
                            <th class="border border-slate-300 pr-3 pl-3">Sửa</th>
                            <th class="border border-slate-300 pr-3 pl-3">Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${data.map((product, index) => `
                        <tr>
                            <td class="border border-slate-300 pr-3 pl-3">${index + 1}</td>
                            <td class="border border-slate-300 pr-3 pl-3">${product.name}</td>
                            <td class="border border-slate-300 pr-3 pl-3">${product.price.toLocaleString("vi", { style: "currency", currency: "VND" })}</td>
                            <td class="border border-slate-300 pr-3 pl-3"><img src="${product.img}" height="150px" width="150px" /></td>
                            <td class="border border-slate-300 pr-3 pl-3">${product.desc}</td>
                            <td class="border border-slate-300 pr-3 pl-3"><a href="/admin/products/${product.id}/edit" class="text-yellow-300"><i class="fa-solid fa-pen-to-square inline-block btn"></i>Sửa<a></td>
                            <td class="border border-slate-300 pr-3 pl-3"><button data-id="${product.id}" class="text-red-500 btn"><i class="fa-solid fa-trash-can-xmark "></i>Xóa<button></td>
                        </tr>
                    `).join("")}
                    </tbody>
                </table>
            <div>
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có muốn xóa dòng này không?");
                if (confirm) {
                    try {
                        remove(id).then(() => {
                            reRender(AdminProducts, "#app");
                        });
                        toastr.success("Xóa thành công!");
                    } catch (error) {
                        toastr.error(error.response.data);
                    }
                }
            });
        });
    },
};
export default AdminProducts;