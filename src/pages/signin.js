import $ from "../utils/selector";

const SignIn = {
    render() {
        return /* html */` 
            <form id="formSignIn">
                <div class="flex flex-row max-w-5xl mx-auto">
                    <div class="basis-1/4"></div>
                    <div class="basis-1/2">
                        <h1 class="text-center font-bold text-5xl">Login</h1>
                        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                        <div class="mb-4">
                        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <input id="emailUser" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username">
                        </div>
                        <div class="mb-6">
                        <label id="passwordUser" class="block text-grey-darker text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************">
                        <p class="text-red text-xs italic">Please choose a password.</p>
                        </div>
                        <div class="flex items-center justify-between">
                        <button id="btnSignIn" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
                            Sign In
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </div>
                    </div>
                    <div class="basis-1/4"></div>
                </div>
            </form>
            `;
    },
    afterRender() {
        $("btnSignIn").addEventListener("submit", (e) => {
            e.PreventDefault();
        });
    },
};
export default SignIn;