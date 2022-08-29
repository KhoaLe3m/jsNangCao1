import Nav from "./nav";

const Header = {
    render() {
        return /* html */ `
            <div class=" z-100 relative top-0 left-0 right-0 overflow-hidden">
                <header class="max-w  mx-auto w-full fixed ">
                    <div class="bg-gray-300" id="main-menu">
                        ${Nav.render()}
                    </div>
                </header>
            </div>
        `;
    },
    afterRender() {
        Nav.afterRender();
    },
};
export default Header;