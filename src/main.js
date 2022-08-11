import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";

const router = new Navigo("/", { linksSelector: "a" });
const render = (content) => {
    document.getElementById("header").innerHTML = Header.print();
    document.getElementById("app").innerHTML = content.print();
    document.getElementById("footer").innerHTML = Footer.print();
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