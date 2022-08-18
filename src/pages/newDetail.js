import { get } from "../api/posts";

const NewsDetail = {
    async render(id) {
        const id1 = `${id}`;
        const { data } = await get(id1);
        // return `Detail`;
        return `<div class="max-w-5xl mx-auto">
            <h1>${data.title}</h1>
            <img src="${data.img}" />
            <p>${data.desc}</p>
        </div>
        `;
    },
};
export default NewsDetail;