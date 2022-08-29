import { getAll, remove } from "../../../api/posts";
import reRender from "../../../utils/reRender";

const AdminPost = {
    async render() {
        const { data } = await getAll();
        return /* html */`
            <div class="max-w-5xl mx-auto">
                <div class="banner">
                    <img src="https://picsum.photos/2048/300">
                </div>
                <div class="news">
                    <h1 class="text-2xl text-center text-blue-800">Quản lý tin tức</h1>
                    <table class="border table-auto text-lg w-full text-left">
                        <thead class="bg-gray-300">
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        ${data.map((post, index) => `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${post.title}</td>
                            <td>
                                <button data-id="${post.id}" class="btn border p-1 bg-red-400 rounded-md">Remove</button>
                            </td>
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
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Ban co muon xoa dong nay khog?");
                if (confirm) {
                    remove(id).then(() => {
                        reRender(AdminPost, "#app");
                    });
                }
            });
        });
    },
};
export default AdminPost;