import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/About";
import addNews from "./pages/addnews";
import HomePage from "./pages/Home";
import NewsDetail from "./pages/newDetail";
import News from "./pages/news";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });
const printlayout = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        printlayout(HomePage.render());
    },
    "/about": () => {
        printlayout(AboutPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        printlayout(NewsDetail.render(id));
    },
    "/signin": () => {
        printlayout(SignIn.render());
    },
    "/signup": () => {
        printlayout(SignUp.render());
    },
    "admin/news": () => {
        printlayout(News.render());
    },
    "admin/news/add": () => {
        printlayout(addNews.render());
    },
});
router.resolve();