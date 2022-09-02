import reRender from "../utils/reRender";

const HeaderDashBoard = {
    render() {
        return /* html */`
            <!-- nav Dashboard -->
                <div class="z-100 relative top-0 left-0 right-0 overflow-hidden">
                    <div class="grid grid-cols-3 gap-4 bg-gray-300 fixed w-full" >
                        <div class="flex items-center relative">
                        <div class="ml-10"><a href="/admin/news" class=" py-2 px-4 text-4xl text-black hover:opacity-80 inline-block">DashBoard</a></div>
                        

                        </div>
                        <div class="flex items-center relative">
                            <div><a class=" py-4 px-3 text-black hover:opacity-80 inline-block" href="/admin/news">News</a></div>
                            <div><a class=" py-4 px-3 text-black hover:opacity-80 inline-block" href="/admin/products">Product</a></div>
                            <div><a class=" py-4 px-3 text-black hover:opacity-80 inline-block" href="/admin/news/add">Category</a></div>
                            <div><a class=" py-4 px-3 text-black hover:opacity-80 inline-block" href="/admin/orders">Orders</a></div>
                            <div class=""><a class=" py-4 px-3 text-black hover:opacity-80 inline-block" href="/#/">Về Trang Web</a></div>
                        </div>
                        <div class="grid grid-cols-3 gap-4" id="main-dashboard">
                            <div class="col-span-2"></div>
                            ${localStorage.getItem("user") ? `<div class="flex text-center items-center relative">
                            <button class=" "><i class="fa-solid fa-user"></i> Admin<button>
                            <button id="logout" class="ml-3"><a href="/#/"><i  class="fa-solid fa-arrow-right-from-bracket"></i> Logout</a><button>
                        </div>
                    </div>` : `<div class="flex text-center items-center relative">
                    <button class=" "><i class="fa-solid fa-user"></i> SignIn<button>
                    <button class="ml-3"><i class="fa-solid fa-arrow-right-from-bracket"></i> SignUp<button>
                </div>
            </div>`}
                    </div>
                </div>
               
                
            <!-- Information <input class="border rounded-md p-1">
                        <button><i class="fa-solid fa-magnifying-glass block ml-3 hover:opacity-80"></i><button>  -->     
        `;
    },
    afterRender() {
        const logout = document.querySelector("#logout");
        if (logout) {
            logout.addEventListener("click", () => {
                localStorage.removeItem("user");
            });
        }
        reRender(HeaderDashBoard, "#main-dashboard");
    },
};
export default HeaderDashBoard;