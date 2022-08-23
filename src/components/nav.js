import reRender from "../utils/reRender";

const Nav = {
    render() {
        return /* html */ `
            <nav class="flex  justify-between">
                <ul class=" flex">
                    <li><a href="/" class="block  py-3 px-4 text-white hover:bg-blue-500">Home Page</a></li>
                    <li><a href="/about"  class="block  py-3 px-4 text-white hover:bg-blue-500">About Page</a></li>
                    <li><a href="/product" class="block  py-3 px-4 text-white hover:bg-blue-500">Product Page</a></li>
                </ul>
                ${localStorage.getItem("user") ? `<ul class=" flex ">
                <li class="flex items-center" >Hello<span class="block  py-3 px-4 text-white" id="username"></span></li>
                <li ><a  class="block  py-3 px-4 text-white hover:bg-blue-500" id="logout">Log out</a></li>
            </ul>` : ""}
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