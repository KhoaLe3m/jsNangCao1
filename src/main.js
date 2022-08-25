import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/About";
import AdminPost from "./pages/admin/posts";
import addNews from "./pages/admin/posts/add";
import CartPage from "./pages/cart";
import EditNews from "./pages/editnews";
import HomePage from "./pages/Home";
import NewsDetail from "./pages/newDetail";
import ProductPage from "./pages/products";
import ProductDetail from "./pages/products/detailProduct";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import reRender from "./utils/reRender";

const router = new Navigo("/", { linksSelector: "a" });
const printlayout = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) {
        content.afterRender(id);
    }
};

router.on("/admin/*/", () => {
}, {
    before(done) {
        if (localStorage.getItem("user")) {
            const userId = JSON.parse(localStorage.getItem("user")).id;
            // do somthing
            if (userId === 2) {
                done();
            } else if (userId !== 2) {
                document.location.href = "/#/";
            }
        } else {
            document.location.href = "/#";
        }
    },
});

router.on({
    "/": () => {
        printlayout(HomePage);
    },
    "/about": () => {
        printlayout(AboutPage);
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        printlayout(NewsDetail, id);
    },
    "/products": () => {
        printlayout(ProductPage);
    },
    "/products/:id": ({ data }) => {
        const { id } = data;
        printlayout(ProductDetail, id);
    },
    "/signin": () => {
        printlayout(SignIn);
    },
    "/signup": () => {
        printlayout(SignUp);
    },
    "/cart": () => {
        printlayout(CartPage);
    },
    "admin/news": () => {
        printlayout(AdminPost);
    },
    "admin/news/add": () => {
        printlayout(addNews);
    },
    "admin/news/:id/edit": ({ data }) => {
        const { id } = data;
        printlayout(EditNews, id);
    },
});
router.resolve();

// const loadScript = function (src, callback) {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//         callback(null, script);
//     };
//     script.onerror = () => {
//         callback("Lỗi rồi!");
//     };
//     document.head.appendChild(script);
// };
// loadScript("https://www.javascripttutorial.net/javascript-event-loop/", (error, script) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("script", script);
//     }
// });

// const render = () => new Promise((resolve, reject) => {
//     const status = false;
//     setTimeout(() => {
//         if (status) {
//             resolve([1, 2, 3, 4]);
//         } else {
//             reject("Lắc đầu");
//         }
//     }, 3000);
// });

// SỬ dụng then catch để xử lý bất đồng bộ
// toTinh.then((result) => console.log(result))
//     .then(() => console.log(1))
//     .catch((result) => console.log(result));

// Sử dụng async await để xử lý bất đồng bộ!( cú phát es8)
// const printA = async () => {
//     try {
//         const result = await render();
//         console.log(result);
//         result.push(5);
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// };
// printA();