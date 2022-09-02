import toastr from "toastr";
import { getAll, remove } from "../../../api/posts";
import reRender from "../../../utils/reRender";
import "toastr/build/toastr.min.css";

const AdminPost = {
    async render() {
        const { data } = await getAll();
        return /* html */`
            <div class="max-w-5xl mx-auto">
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
                                <a class="p-1 rounded-md bg-red-300 border" href="/admin/news/${post.id}/edit">Edit</a>
                                <button data-id="${post.id}" class="btn border p-1 bg-blue-400 rounded-md">Remove</button>
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
                const confirm = window.confirm("Bạn có muốn xóa dòng này không?");
                if (confirm) {
                    try {
                        remove(id).then(() => {
                            reRender(AdminPost, "#app");
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
export default AdminPost;