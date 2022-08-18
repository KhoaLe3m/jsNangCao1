import axios from "axios";
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
                    <h1>Quan ly tin tuc</h1>
                    <table>
                        <tbody>
                        ${data.map((post, index) => `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${post.title}</td>
                            <td>
                                <button data-id="${post.id}" class="btn">Remove</button>
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