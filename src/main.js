import Navigo from "navigo";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";

const router = new Navigo("/", { linksSelector: "a" });
const render = (content) => {
    document.getElementById("app").innerHTML = content.print();
};

router.on({
    "/": () => {
        render(HomePage);
    },
    "/about": () => {
        render(AboutPage);
    },
});
router.resolve();