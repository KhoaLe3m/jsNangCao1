import axios from "axios";
import toastr from "toastr";
import { edit, get } from "../../../api/posts";
import $ from "../../../utils/selector";
import "toastr/build/toastr.min.css";

const editNews = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
            <form id="formEditPost" class="max-w-5xl mx-auto flex flex-row">
                <div class="basis-1/5"></div>
                <div class="basis-3/5 border">
                
                <div class="mx-3 my-2">
                    <label for="exampleFormControlInput1" class="form-label inline-block pt-3 mb-2 text-gray-700">Title</label>
                    <input type="text" id="title-post" placeholder="Enter Title" value="${data.title}" 
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
                    </div>
                <div>
                <div class="mx-3 my-2">
                    <label for="img-post" class="form-label inline-block pt-3 mb-2 text-gray-700">Image</label>
                    <input type="file" id="img-post" placeholder="Choose File"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
                    </div>
                    <img src="${data.img}" id="img-preview" />
                <div>
                <div class="mx-3 my-2 ">
                    <label for="exampleFormControlInput1" class="form-label inline-block pt-3 mb-2 text-gray-700">Description</label>
                    <br>
                    <textarea placeholder="Enter Description here!" id="desc-post" class="form-control block w-full border text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                        ${data.desc}
                    </textarea>
                    </div>
                <div>
                <div class="mx-3 my-2">
                    <button class="bg-blue-400 hover:bg-blue-dark text-black font-bold py-2 px-4 rounded" >Edit</button>
                <form>
                <div class="basis-1/5"></div>            
            </form>            
        `;
    },
    afterRender(id) {
        const CLOUDINARY_PRESET_KEY = "suzfqxpd";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dzl3gqizk/image/upload";
        const imgPost = document.querySelector("#img-post");
        const imgPreview = document.querySelector("#img-preview");
        let fileImg = "";
        // Thay ?????i ???nh preview
        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });
        // ?????y link ???nh l??n cloud ki???m tra c?? ???nh m???i kh n???u kh??ng th?? l???y l???i link src c???a ???nh c??
        $("#formEditPost").addEventListener("submit", async (e) => {
            e.preventDefault();

            const file = document.querySelector("#img-post").files[0];
            if (file) {
                const formData = new FormData();
                // L???y gi?? tr??? c???a file r???i g??n v??o obj FormData
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET_KEY);
                // call api cloudinary ????? ?????y ???nh l??n
                const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });
                fileImg = data.url;
            }

            // call api S???a b??i vi???t
            try {
                await edit({
                    id,
                    title: document.querySelector("#title-post").value,
                    img: fileImg || imgPreview.src,
                    desc: document.querySelector("#desc-post").value,
                });
                toastr.success("S???a th??nh c??ng!");
                setTimeout(() => {
                    document.location.href = "/admin/news";
                }, 2000);
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },
};
export default editNews;