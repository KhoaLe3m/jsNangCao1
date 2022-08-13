const Nav = {
    render() {
        return /* html */ `
            <ul class="flex flex-row">
                <div class="basis-2/3 flex">
                    <li><a href="/" class="block  py-3 px-4 text-white hover:bg-blue-500">Home Page</a></li>
                    <li><a href="/about"  class="block  py-3 px-4 text-white hover:bg-blue-500">About Page</a></li>
                    <li><a href="/product" class="block  py-3 px-4 text-white hover:bg-blue-500">Product Page</a></li>
                </div>
                <div class=" flex ">
                    <li ><a href="/admin/news" class="block  py-3 px-4 text-white hover:bg-blue-500  ">Admin</a></li>
                    <li ><a href="/signin" class="block  py-3 px-4 text-white hover:bg-blue-500  ">Sign In</a></li>
                    <li><a href="/signup"  class="block  py-3 px-4 text-white hover:bg-blue-500 ">Sign Up</a></li>
                </div>
            </ul>
        `;
    },
};
export default Nav;