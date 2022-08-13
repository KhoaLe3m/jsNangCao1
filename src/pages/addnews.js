const addNews = {
    render() {
        return /* html */`
            <div class="max-w-5xl mx-auto flex flex-row">
                <div class="basis-1/5"></div>
                <div class="basis-3/5 border">
                <div class="mx-3 my-2">
                    <label for="exampleFormControlInput1" class="form-label inline-block pt-3 mb-2 text-gray-700">Title</label>
                    <input type="text" id="exampleFormControlInput1" placeholder="Enter Title"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
                    </div>
                <div>
                <div class="mx-3 my-2">
                    <label for="exampleFormControlInput1" class="form-label inline-block pt-3 mb-2 text-gray-700">Image</label>
                    <input type="file" id="exampleFormControlInput1" placeholder="Choose File"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
                    </div>
                <div>
                <div class="mx-3 my-2 ">
                    <label for="exampleFormControlInput1" class="form-label inline-block pt-3 mb-2 text-gray-700">Image</label>
                    <br>
                    <textarea placeholder="Enter Description here!" class="form-control block w-full border text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"></textarea>
                    </div>
                <div>
                <div class="mx-3 my-2">
                    <button class="bg-blue-400 hover:bg-blue-dark text-black font-bold py-2 px-4 rounded" type="button">Add</button>
                <div>
                <div class="basis-1/5"></div>            
            </div>            
        `;
    },
};
export default addNews;