import axios from "axios";

const AdminPost = {
    async render() {
        const { data } = await axios.get("https://62f88f983eab3503d1d7f03c.mockapi.io/post");
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
                                <button class="btn">Remove</button>
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
        const btn = document.querySelectorAll(".btn");
        console.log(btn);
    },
};
export default AdminPost;