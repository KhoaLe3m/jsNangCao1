import toastr from "toastr";
import { signin } from "../api/users";
import $ from "../utils/selector";
import "toastr/build/toastr.min.css";

const SignIn = {
    render() {
        return /* html */` 
            <div class="max-w-5xl mx-auto">
            <form id="formSignIn">
                <div class="mt-4">
                <label class="block text-sm">
                Email
                </label>
                <input type="email" id="emailUser"
                class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Email Address" />
                </div>
                <div>
                <label class="block mt-4 text-sm">
                Password
                </label>
                <input id="passwordUser"
                class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Password" type="password" />
                </div>
                <button
                    class="block w-50% px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                    href="#">
                    Sign In
                </button>                
            <form>     
            </div>
            `;
    },
    afterRender() {
        $("#formSignIn").addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signin({
                    email: $("#emailUser").value,
                    password: $("#passwordUser").value,
                });
                localStorage.setItem("user", JSON.stringify(data.user));
                toastr.success("Bạn đã đăng nhập thành công!,chuyển trang");
                setTimeout(() => {
                    if (data.user.id === 2) {
                        document.location.href = "/admin/news";
                    } else {
                        document.location.href = "/#";
                    }
                }, 3000);
            } catch (error) {
                toastr.error(error.response.data);
                $("#formSignIn").reset();
            }
        });
    },
};
export default SignIn;