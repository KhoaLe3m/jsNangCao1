import Nav from "./nav";

const Header = {
    render() {
        return /* html */ `
            <header class="max-w-5xl mx-auto">
                <div  class="bg-blue-800 py-4 ">
                <img  src="https://th.bing.com/th/id/OIP.XFXskwxSLJ15Ol7cxkzzWwHaHa?pid=ImgDet&rs=1 "  class="mx-auto w-20">
                </div>
                <div class="bg-orange-500" id="main-menu">
                    ${Nav.render()}
                </div>
            </header>
        `;
    },
    afterRender() {
        Nav.afterRender();
    },
};
export default Header;