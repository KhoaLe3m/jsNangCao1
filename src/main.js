import Navigo from "navigo";

const router = new Navigo("/");

router.on({
    "/": () => {
        console.log("Home Page");
    },
    "/about": () => {
        console.log("About Page");
    },
});
router.resolve();