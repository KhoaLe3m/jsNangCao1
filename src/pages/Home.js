const HomePage = {
    print() {
        return /* html */`
            <div class="max-w-5xl mx-auto">
                <div class="banner">
                    <img src="https://picsum.photos/2048/300">
                </div>
                <div class="news">
                    <h2 class="text-2xl font-semibold my-4">Tin tức học tập</h2>
                    <div class="grid grid-cols-3 gap-8">
                        <div class="border p-4">
                            <a href="">
                                <img src="https://picsum.photos/300/300">
                            </a>
                            <h3 my-4><a href="" class="font-semibold text-lg text-orange-400">Tiêu đề bài viết 1</a></h3>
                            <p>Nội dung bài viết 1</p>
                        </div>
                        <div class="border p-4">
                            <a href="">
                                <img src="https://picsum.photos/300/300">
                            </a>
                            <h3 my-4><a href="" class="font-semibold text-lg text-orange-400">Tiêu đề bài viết 1</a></h3>
                            <p>Nội dung bài viết 1</p>
                        </div>
                        <div class="border p-4">
                        <a href="">
                            <img src="https://picsum.photos/300/300">
                        </a>
                        <h3 my-4><a href="" class="font-semibold text-lg text-orange-400">Tiêu đề bài viết 1</a></h3>
                        <p>Nội dung bài viết 1</p>
                    </div>
                    </div>
                </div>
            </div>
        `;
    },
};
export default HomePage;