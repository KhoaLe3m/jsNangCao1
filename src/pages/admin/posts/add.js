import axios from "axios";
import toastr from "toastr";
import $ from "jquery-validation";
import { add } from "../../../api/posts";
import "toastr/build/toastr.min.css";

const addNews = {
    render() {
        return /* html */`
            <form id="formAddPost" class="max-w-5xl mx-auto flex flex-row">
                <div class="basis-1/5"></div>
                <div class="basis-3/5 border">
                <div class="mx-3 my-2">
                    <label for="exampleFormControlInput1" class="form-label inline-block pt-3 mb-2 text-gray-700">Title</label>
                    <input type="text" id="title-post" placeholder="Enter Title" name="title-post"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
                        </div>
                        <div>
                        <div class="mx-3 my-2">
                        <label for="img-post" class="form-label inline-block pt-3 mb-2 text-gray-700">Image</label>
                        <input name="img-post" type="file" id="img-post" placeholder="Choose File"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
                        <img src="" id="img-preview" />
                        </div>
                <div>
                <div class="mx-3 my-2 ">
                    <label for="exampleFormControlInput1" class="form-label inline-block pt-3 mb-2 text-gray-700">Image</label>
                    <br>
                    <textarea name="desc-post" placeholder="Enter Description here!" id="desc-post" class="form-control block w-full border text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"></textarea>
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
        const formAddPost = $("#formAddPost");
        const CLOUDINARY_PRESET_KEY = "suzfqxpd";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dzl3gqizk/image/upload";
        const imgPreview = document.querySelector("#img-preview");
        const imgPost = document.querySelector("#img-post");
        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });
        let fileImg = "";
        formAddPost.validate({
            rules: {
                "title-post": {
                    required: true,
                    minlength: 5,
                },
                "img-post": {
                    required: true,
                },
                "desc-post": {
                    required: true,
                },
            },
            messages: {
                "title-post": {
                    required: "B???t bu???c ph???i nh???p tr?????ng n??y",
                    minlength: "Nh???p ??t nh???t 5 k?? t???",
                },
                "img-post": {
                    required: "B???t bu???c ph???i ch???n file",
                },
                "desc-post": {
                    required: "B???t bu???c ph???i nh???p tr?????ng n??y",
                },
            },
            submitHandler: () => {
                async function addPost() {
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
                    // call api th??m b??i vi???t
                    try {
                        await add({
                            title: document.querySelector("#title-post").value,
                            img: fileImg || "",
                            desc: document.querySelector("#desc-post").value,
                        });
                        toastr.success("Th??m th??nh c??ng");
                        setTimeout(() => {
                            document.location.href = "/admin/news";
                        }, 2000);
                    } catch (error) {
                        toastr.error(error.response.data);
                    }
                }
                addPost();
            },
        });
        // formAddPost.addEventListener("submit", async (e) => {
        //     e.preventDefault();

        // });
    },
};
export default addNews;