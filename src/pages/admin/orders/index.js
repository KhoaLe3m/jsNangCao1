import { edit, get, getAll } from "../../../api/ordersid";
import reRender from "../../../utils/reRender";

const pageAdminOrder = {
    async render() {
        const { data } = await getAll();
        return /* html */`
            <div class="grid grid-cols-3 gap-4">
                <div>1</div>
                <div class="col-span-2">
                    <table class=" border-2 table-auto  mx-auto" >
                        <thead>
                            <tr>
                                <th class="border border-slate-300 pr-3 pl-3"  >STT</th>
                                <th class="border border-slate-300 pr-3 pl-3" >Id người nhận</th>
                                <th class="border border-slate-300 pr-3 pl-3" >Thời gian đặt hàng</th>
                                <th class="border border-slate-300 pr-3 pl-3" >Trạng thái</th>
                                <th class="border border-slate-300 pr-3 pl-3" >Chi tiết đơn hàng</th>
                                <th class="border border-slate-300 pr-3 pl-3" >Duyệt đơn</th>
                                <th class="border border-slate-300 pr-3 pl-3" >Hủy đơn</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.map((item, index) => `
                <tr>
                    <td class="border border-slate-300 pr-3 pl-3 ">${index + 1}</td>
                    <td class="border border-slate-300 pr-3 pl-3 ">${item.idRecipient}</td>
                    <td class="border border-slate-300 pr-3 pl-3 ">${item.creatAt}</td>
                    <td class="border border-slate-300 pr-3 pl-3 p-1 bg-gray-500 hover:text-white">${item.status}</td>
                    <td class="border border-slate-300 pr-3 pl-3 p-1  "><a href="/admin/orders/${item.id}" class="p-1 bg-gray-300 rounded-md hover:text-white">Chi tiết</a></td>
                    <td class="border border-slate-300 pr-3 pl-3 p-1  "><button data-id="${item.id}" class=" bg-green-500 btn btn-duyet p-1 rounded-md hover:text-white">Duyệt</button></td>
                    <td class="border border-slate-300 pr-3 pl-3 p-1  "><button data-id="${item.id}" class=" bg-red-500 btn btn-huy p-1 rounded-md hover:text-white">Hủy</button></td>
                </tr>
        `).join("")}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            btn.addEventListener("click", async () => {
                const { id } = btn.dataset;
                const { data } = await get(id);
                if (btn.classList.contains("btn-duyet")) {
                    await edit({
                        id,
                        idRecipient: data.idRecipient,
                        creatAt: data.creatAt,
                        status: "Đã duyệt",
                    });
                    reRender(pageAdminOrder, "#app");
                }
            });
        });
    },
};
export default pageAdminOrder;