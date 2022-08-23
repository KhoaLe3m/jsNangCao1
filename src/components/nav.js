const Nav = {
    render() {
        return /* html */ `
            <ul class="flex  justify-between">
                <div class="basis-2/3 flex">
                    <li><a href="/" class="block  py-3 px-4 text-white hover:bg-blue-500">Home Page</a></li>
                    <li><a href="/about"  class="block  py-3 px-4 text-white hover:bg-blue-500">About Page</a></li>
                    <li><a href="/product" class="block  py-3 px-4 text-white hover:bg-blue-500">Product Page</a></li>
                </div>
                <div class=" flex ">
                    <li class="flex items-center" >Hello<span class="block  py-3 px-4 text-white" id="username"></span></li>
                    <li ><a  class="block  py-3 px-4 text-white hover:bg-blue-500" id="logout">Log out</a></li>
                </div>
            </ul>
        `;
    },
    afterRender() {
        const username = document.querySelector("#username");

        const { email } = JSON.parse(localStorage.getItem("user"));
        username.innerHTML = email;
    },
};
export default Nav;