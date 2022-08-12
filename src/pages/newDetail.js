import data from "../data";

const NewsDetail = {
    render(id) {
        const id1 = Number(id);
        const post = data.find((element) => element.id === id1);
        // return `Detail`;
        return `<div class="max-w-5xl mx-auto">
            <h1>${post.title}</h1>
            <img src="${post.img}" />
            <p>${post.desc}</p>
        </div>
        `;
    },
};
export default NewsDetail;