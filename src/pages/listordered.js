import toastr from "toastr";
import { getIdOrder, edit, getIdOrderByIdUser } from "../api/ordersid";
import "toastr/build/toastr.min.css";
import reRender from "../utils/reRender";

const pageListOrdered = {
    async render() {
        if (localStorage.getItem("user")) {
            const idUser = JSON.parse(localStorage.getItem("user")).id;
            const { data } = await getIdOrderByIdUser(idUser);
            return /* html */`
                <div class="grid grid-cols-3 gap-4">
                    <div>1</div>
                    <div class="cols-span-2">
                        <h1 class="text-2xl text-center text-blue-500">Danh sách đơn hàng đã đặt</h1>
                        <table class="table-auto">
                            <thead>
                                <tr>
                                    <th class="border border-slate-300 pr-3 pl-3">STT</th>
                                    <th class="border border-slate-300 pr-3 pl-3">Thời gian đặt đơn</th>
                                    <th class="border border-slate-300 pr-3 pl-3">Chi tiết đơn hàng</th>
                                    <th class="border border-slate-300 pr-3 pl-3">Trạng thái</th>
                                    <th class="border border-slate-300 pr-3 pl-3">Hủy đơn</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${data.map((order, index) => `
                                    <tr>
                                        <td class="border border-slate-300 pr-3 pl-3">${index + 1}</td>
                                        <td class="border border-slate-300 pr-3 pl-3">${order.creatAt}</td>
                                        <td class="border border-slate-300 pr-3 pl-3"><button class="bg-gray-700 p-1 rounded text-white hover:opacity-80"><a href="/detailorder?idorder=${order.id}">Chi tiết</a><button></td>
                                        <td class="border border-slate-300 pr-3 pl-3">${order.status}</td>
                                        <td class="border border-slate-300 pr-3 pl-3"><button data-id="${order.id}" class="btn btn-huy bg-red-700 p-1 rounded hover:opacity-80">Hủy<button></td>
                                    </tr>
                                    
                                `).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }
        return ``;
    },
    afterRender() {
        if (localStorage.getItem("user")) {
            const btns = document.querySelectorAll(".btn");
            btns.forEach((btn) => {
                btn.addEventListener("click", async () => {
                    const { id } = btn.dataset;
                    const { data } = await getIdOrder(id);
                    if (data.status === "Chưa xác nhận") {
                        try {
                            await edit({
                                id: data.id,
                                idRecipient: data.idRecipient,
                                creatAt: data.creatAt,
                                status: "Đã hủy",
                            });
                            toastr.success("Hủy đơn hàng thành công!");
                            reRender(pageListOrdered, "#app");
                        } catch (error) {
                            toastr.error(error.response.data);
                        }
                    } else {
                        toastr.warning("Không thể hủy đơn hàng đã duyệt");
                    }
                });
            });
        }
    },
};
export default pageListOrdered;