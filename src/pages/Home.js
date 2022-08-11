import Footer from "../components/footer";
import Header from "../components/header";

const HomePage = {
    print() {
        return /* html */`
            ${Header.print()}
            <div class="banner">
                <img src="">
            </div>
            <div class="news">
                <h2>Tin tức học tập</h2>
                <div class="grid grid-cols-3 gap-8">
                    <div class="border p-4">
                        <a href="">
                            <img src="https://picsum.photos/300/300">
                        </a>
                        <h3><a href="">Tiêu đề bài viết 1</a></h3>
                        <p>Nội dung bài viết 1</p>
                    </div>
                    <div class="border p-4">
                        <a href="">
                            <img src="https://picsum.photos/300/300">
                        </a>
                        <h3><a href="">Tiêu đề bài viết 1</a></h3>
                        <p>Nội dung bài viết 1</p>
                    </div>
                    <div class="border p-4">
                        <a href="">
                            <img src="https://picsum.photos/300/300">
                        </a>
                        <h3><a href="">Tiêu đề bài viết 1</a></h3>
                        <p>Nội dung bài viết 1</p>
                    </div>
                </div>
            </div>
            ${Footer.print()}
        `;
    },
};
export default HomePage;