import data from "../data";

const EditNews = {
    render(id) {
        const id1 = Number(id);
        const post = data.find((element) => element.id === id1);
        return /* html */`
                <div class="max-w-5xl mx-auto flex flex-row">
                    <div class="basis-1/5"></div>
                    <div class="basis-3/5 border">
                    <div class="mx-3 my-2">
                        <label for="exampleFormControlInput1" class="form-label inline-block pt-3 mb-2 text-gray-700">Title</label>
                        <input type="text" id="exampleFormControlInput1" placeholder="Enter Title" value="${post.title}"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
                        </div>
                    <div>
                    <div class="mx-3 my-2">
                        <label for="exampleFormControlInput1" class="form-label inline-block pt-3 mb-2 text-gray-700">Image old</label>
                        <img src="${post.img}" height="100px">
                        <label for="exampleFormControlInput1" class="form-label inline-block pt-3 mb-2 text-gray-700">New Image</label>

                        <input type="file" id="exampleFormControlInput1" placeholder="Choose File"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
                        </div>
                    <div>
                    <div class="mx-3 my-2 ">
                        <label for="exampleFormControlInput1" class="form-label inline-block pt-3 mb-2 text-gray-700">Description</label>
                        <br>
                        <textarea placeholder="Enter Description here!" class="form-control block w-full border text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">${post.desc}</textarea>
                        </div>
                    <div>
                    <div class="mx-3 my-2">
                        <button class="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out" type="button">Edit</button>
                    <div>
                    <div class="basis-1/5"></div>            
                </div>           
        `;
    },
};
export default EditNews;