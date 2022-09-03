import { getOrderByIdOrder } from "../../../api/orders";

const pageDetailOrder = {
    async render(id) {
        const { data } = await getOrderByIdOrder(id);
        const { item } = data[0];
        return /* html */`
        <h1 class="text-2xl text-blue-500 text-center">Chi tiết đơn hàng</h1>
            <div class="grid grid-cols-3 gap-4">
                <div>1</div>
                <div class="col-span-2">
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
                                    <td colspan='6' style='text-align:right'><h1 class="text-2xl">Tổng tiền = ${data[0].sum.toLocaleString("vi", { style: "currency", currency: "VND" })}</h1></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },
};
export default pageDetailOrder;