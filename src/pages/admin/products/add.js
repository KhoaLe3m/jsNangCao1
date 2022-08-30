import axios from "axios";
import toastr from "toastr";
import $ from "jquery-validation";
import { add } from "../../../api/products";
import "toastr/build/toastr.min.css";

const addProduct = {
    render() {
        return /* html */`
            <form id="formAddProduct" class="max-w-5xl mx-auto flex flex-row">
                <div class="basis-1/5"></div>
                <div class="basis-3/5 border">
                <div class="mx-3 my-2">
                    <label for="123213" class="form-label inline-block pt-3 mb-2 text-gray-700">Tên sản phẩm</label>
                    <input type="text" id="name-product" placeholder="Nhập tên sản phẩm"  name="name-product" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
                </div>
                <div class="mx-3 my-2">
                    <label for="123123" class="form-label inline-block pt-3 mb-2 text-gray-700">Giá sản phẩm</label>
                    <input type="number" id="price-product" placeholder="Nhập giá sản phẩm" name="price-product" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
                </div>
                <div>
                    <div class="mx-3 my-2">
                        <label for="img-post" class="form-label inline-block pt-3 mb-2 text-gray-700">Image</label>
                        <input name="img-product" type="file" id="img-product" placeholder="Choose File"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
                        <img src="" id="img-preview" />
                    </div>
                <div>
                <div class="mx-3 my-2 ">
                    <label for="exampleFormControlInput1" class="form-label inline-block pt-3 mb-2 text-gray-700">Mô tả sản phẩm</label>
                    <br>
                    <textarea name="desc-product" placeholder="Nhập mô tả sản phẩm!" id="desc-product" class="form-control block w-full border text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"></textarea>
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
        const formAddProduct = $("#formAddProduct");
        const CLOUDINARY_PRESET_KEY = "suzfqxpd";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dzl3gqizk/image/upload";
        const imgPreview = document.querySelector("#img-preview");
        const imgPost = document.querySelector("#img-product");
        let fileImg = "";
        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });
        formAddProduct.validate({
            rules: {
                "name-product": {
                    required: true,
                },
                "price-product": {
                    required: true,
                },
                "img-product": {
                    required: true,
                },
                "desc-product": {
                    required: true,
                },
            },
            messages: {
                "name-product": {
                    required: "Không được để trống trường này",
                },
                "price-product": {
                    required: "Không được để trống trường này",
                },
                "img-product": {
                    required: "Không được để trống file này",
                },
                "desc-product": {
                    required: "Không được để trống trường này",
                },
            },
            submitHandler() {
                async function addProducts() {
                    const file = document.querySelector("#img-product").files[0];
                    if (file) {
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
                        fileImg = data.url;
                    }
                    // call api thêm bài viết
                    try {
                        await add({
                            name: document.querySelector("#name-product").value,
                            price: document.querySelector("#price-product").value,
                            img: fileImg || "",
                            desc: document.querySelector("#desc-product").value,
                        });
                        toastr.success("Thêm thành công");
                        setTimeout(() => {
                            document.location.href = "/admin/products";
                        }, 2000);
                    } catch (error) {
                        toastr.error(error.response.data);
                    }
                }
                addProducts();
            },
        });
    },
};
export default addProduct;