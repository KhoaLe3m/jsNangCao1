import { getOrderByIdOrder } from "../../../api/orders";
import { getIdOrder } from "../../../api/ordersid";
import { get } from "../../../api/recipients";

const pageDetailOrder = {
    async render(id) {
        // call api lấy đơn hàng bằng id của chi tiết đơn hàng
        const order = (await getOrderByIdOrder(id)).data;
        const { item } = order[0];
        // call api lấy id người nhận qua bằng id của chi tiết đơn hàng
        const { idRecipient } = (await getIdOrder(id)).data;
        const recipient = (await get(idRecipient)).data;
        return /* html */`
            <div class="grid grid-cols-3 gap-4">
                <div>
                    <h1 class="text-2xl text-blue-500 text-center">Thông tin người nhận</h1>
                    <h1 class="text-xl">Tên người nhận:<span class="text-2xl" >${recipient.name}</span></h1>
                    <h1 class="text-xl">Số điện thoại:<span class="text-2xl" >${recipient.phone}</span></h1>
                    <h1 class="text-xl">Địa chỉ:<span class="text-2xl">${recipient.address}</span></h1>
                </div>
                <div class="col-span-2">
                    <h1 class="text-2xl text-blue-500 text-center">Chi tiết đơn hàng</h1>

                    <table class="table-auto">
                        <thead>
                            <tr>
                                <th class="border border-slate-300 pr-3 pl-3">STT</th>
                                <th class="border border-slate-300 pr-3 pl-3">Tên sản phẩm</th>
                                <th class="border border-slate-300 pr-3 pl-3">Giá</th>
                                <th class="border border-slate-300 pr-3 pl-3">Số lượng</th>
                                <th class="border border-slate-300 pr-3 pl-3">Ảnh</th>
                                <th class="border border-slate-300 pr-3 pl-3">Mô tả</th>
                            <tr>
                        </thead>
                        <tbody>
                            ${item.map((val, index) => `
                                <tr>
                                    <td class="border border-slate-300 pr-3 pl-3">${index + 1}</td>
                                    <td class="border border-slate-300 pr-3 pl-3">${val.name}</td>
                                    <td class="border border-slate-300 pr-3 pl-3">${val.price.toLocaleString("vi", { style: "currency", currency: "VND" })}</td>
                                    <td class="border border-slate-300 pr-3 pl-3">${val.quantity}</td>
                                    <td class="border border-slate-300 pr-3 pl-3"><img src="${val.img}" height="50px"></td>
                                    <td class="border border-slate-300 pr-3 pl-3">${val.desc}</td>
                                </tr>
                                
                            `).join("")}
                            <tr cellpadding="0px" cellspacing="0px">
                                    <td colspan='6' style='text-align:right'><h1 class="text-2xl">Tổng tiền = ${order[0].sum.toLocaleString("vi", { style: "currency", currency: "VND" })}</h1></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },
};
export default pageDetailOrder;