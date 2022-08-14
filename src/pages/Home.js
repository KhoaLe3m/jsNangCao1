const HomePage = {
    async render() {
        const response = await fetch("https://62f88f983eab3503d1d7f03c.mockapi.io/post");
        const data = await response.json();
        return /* html */`
            <div class="max-w-5xl mx-auto">
                <div class="banner">
                    <img src="https://picsum.photos/2048/300">
                </div>
                <div class="news">
                    <h2 class="text-2xl font-semibold my-4">Tin tức học tập</h2>
                    <div class="grid grid-cols-3 gap-8">
                        ${data.map((post) => `
                        <div class="border p-4">
                            <a href="/news/${post.id}">
                                <img src="${post.img}">
                            </a>
                            <h3 my-4><a href="/news/${post.id}" class="font-semibold text-lg text-orange-400">${post.title}</a></h3>
                            <p>${post.desc}</p>
                        </div>
                        `).join("")}
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
};
export default HomePage;