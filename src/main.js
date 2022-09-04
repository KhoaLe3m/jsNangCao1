import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/About";
import AdminPost from "./pages/admin/posts";
import addNews from "./pages/admin/posts/add";
import CartPage from "./pages/cart";
import HomePage from "./pages/Home";
import NewsDetail from "./pages/news/newDetail";
import ProductPage from "./pages/products";
import ProductDetail from "./pages/products/detailProduct";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Nav from "./components/nav";
import editNews from "./pages/admin/posts/edit";
import HeaderDashBoard from "./components/headerdashboard";
import AdminProducts from "./pages/admin/products";
import addProduct from "./pages/admin/products/add";
import editProduct from "./pages/admin/products/edit";
import pageOrder from "./pages/order";
import pageAdminOrder from "./pages/admin/orders";
import pageDetailOrder from "./pages/admin/orders/detailorder";
import pageListOrdered from "./pages/listordered";
import DetailOrder from "./pages/pagedetailorder";

const router = new Navigo("/", { linksSelector: "a" });
const printlayout = async (content, header, id) => {
    document.getElementById("header").innerHTML = await header.render();
    document.getElementById("app").innerHTML = await content.render(id);
    document.getElementById("footer").innerHTML = await Footer.render();
    if (Nav.afterRender) {
        Nav.afterRender();
    }
    if (content.afterRender) {
        content.afterRender(id);
    }
    if (header.afterRender) {
        Header.afterRender(id);
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
router.on("/signin", () => {
}, {
    before(done) {
        if (localStorage.getItem("user")) {
            document.location.href = "/#";
        } else {
            done();
        }
    },
});
router.on("/signup", () => {
}, {
    before(done) {
        if (localStorage.getItem("user")) {
            document.location.href = "/#";
        } else {
            done();
        }
    },
});

router.on({
    "/": () => {
        printlayout(HomePage, Header);
    },
    "/about": () => {
        printlayout(AboutPage, Header);
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        printlayout(NewsDetail, Header, id);
    },
    "/products": () => {
        printlayout(ProductPage, Header);
    },
    "/products/:id": ({ data }) => {
        const { id } = data;
        printlayout(ProductDetail, Header, id);
    },
    "/signin": () => {
        printlayout(SignIn, Header);
    },
    "/signup": () => {
        printlayout(SignUp, Header);
    },
    "/cart": () => {
        printlayout(CartPage, Header);
    },
    "/order": () => {
        printlayout(pageOrder, Header);
    },
    "/listordered": () => {
        printlayout(pageListOrdered, Header);
    },
    "/detailorder/idorder/:id": ({ data }) => {
        const { id } = data;
        printlayout(DetailOrder, Header, id);
    },
    "admin/news": () => {
        printlayout(AdminPost, HeaderDashBoard);
    },
    "admin/news/add": () => {
        printlayout(addNews, HeaderDashBoard);
    },
    "admin/news/:id/edit": ({ data }) => {
        const { id } = data;
        printlayout(editNews, HeaderDashBoard, id);
    },
    "admin/products": () => {
        printlayout(AdminProducts, HeaderDashBoard);
    },
    "admin/products/add": () => {
        printlayout(addProduct, HeaderDashBoard);
    },
    "admin/products/:id/edit": ({ data }) => {
        const { id } = data;
        printlayout(editProduct, HeaderDashBoard, id);
    },
    "admin/orders": () => {
        printlayout(pageAdminOrder, HeaderDashBoard);
    },
    "admin/orders/:id": ({ data }) => {
        const { id } = data;
        printlayout(pageDetailOrder, HeaderDashBoard, id);
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