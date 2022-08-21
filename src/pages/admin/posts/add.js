import axios from "axios";
import { add } from "../../../api/posts";
import $ from "../../../utils/selector";

const addNews = {
    render() {
        return /* html */`
            <form id="formAddPost" class="max-w-5xl mx-auto flex flex-row">
                <div class="basis-1/5"></div>
                <div class="basis-3/5 border">
                
                <div class="mx-3 my-2">
                    <label for="exampleFormControlInput1" class="form-label inline-block pt-3 mb-2 text-gray-700">Title</label>
                    <input type="text" id="title-post" placeholder="Enter Title"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
                    </div>
                <div>
                <div class="mx-3 my-2">
                    <label for="img-post" class="form-label inline-block pt-3 mb-2 text-gray-700">Image</label>
                    <input type="file" id="img-post" placeholder="Choose File"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
                    </div>
                <div>
                <div class="mx-3 my-2 ">
                    <label for="exampleFormControlInput1" class="form-label inline-block pt-3 mb-2 text-gray-700">Image</label>
                    <br>
                    <textarea placeholder="Enter Description here!" id="desc-post" class="form-control block w-full border text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"></textarea>
                    </div>
                <div>
                <div class="mx-3 my-2">
                    <button class="bg-blue-400 hover:bg-blue-dark text-black font-bold py-2 px-4 rounded" >Add</button>
                <form>
                <div class="basis-1/5"></div>            
            </form>            
        `;
    },
    afterRender() {
        const CLOUDINARY_PRESET_KEY = "suzfqxpd";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dzl3gqizk/image/upload";
        $("#formAddPost").addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = document.querySelector("#img-post").files[0];
            const formData = new FormData();
            // Lấy giá trị của file rồi gán vào obj FormData
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET_KEY);
            // call api cloudinary để đẩy ảnh lên
            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            // call api thêm bài viết
            add({
                title: document.querySelector("#title-post").value,
                img: data.url,
                desc: document.querySelector("#desc-post").value,
            });
        });
    },
};
export default addNews;