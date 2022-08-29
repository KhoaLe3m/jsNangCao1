import reRender from "../utils/reRender";

const Nav = {
    render() {
        return /* html */ `
            <nav class="flex  justify-between  ">
                <ul class="flex items-center ">
                <li class="mr-6">
                <a class="text-blue-500 hover:text-blue-800" href="/#/"><img src="https://cdn.printgo.vn/uploads/media/772948/thiet-ke-logo-shop-giay-15_1584094947.jpg" width="65px" alt=""></a>
                </li>
                <li class="mr-6">
                <a class="text-blue-500 hover:text-blue-800" href="/products">Nike</a>
                </li>
                <li class="mr-6">
                <a class="text-blue-500 hover:text-blue-800" href="#">Adidas</a>
                </li>
                <li class="mr-6">
                <a class="text-blue-500 hover:text-blue-800" href="#">Converse</a>
                </li>
                </ul>
                ${localStorage.getItem("user") ? `<ul class=" flex items-center text-center  ">
                <li class="flex  " ><p class="mt-3">Hello</p><span class="block  py-3 px-4 text-white hover:text-blue-800" id="username"></span></li>
                <li ><a href="/cart" class="  py-3 px-4 text-white hover:text-blue-800" id="cart"><i class="fas fa-cart-arrow-down"></i></a></li>
                <li ><a  class="  py-3 px-4 text-white hover:text-blue-800" id="logout">Log out</a></li>
            </ul>` : `<ul class=" flex items-center  ">
            <li class="flex  " ><a href="/signin" class="block  py-3 px-4 text-white hover:text-blue-800">Sign In</a></li>
            <li ><a href="/signup" class="block  py-3 px-4 text-white hover:text-blue-800">Sign Up</a></li>
            </ul>`
}
            </nav>
        `;
    },
    afterRender() {
        const username = document.querySelector("#username");
        const logout = document.querySelector("#logout");
        if (username) {
            const { email } = JSON.parse(localStorage.getItem("user"));
            username.innerHTML = email;
        }
        if (logout) {
            logout.addEventListener("click", () => {
                localStorage.removeItem("user");
                reRender(Nav, "#main-menu");
            });
        }
    },
};
export default Nav;