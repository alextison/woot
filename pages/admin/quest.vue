<template>
    <div class="w-full h-full flex justify-center  font-sans">
      <div class="w-full h-full flex justify-center items-center text-center">
        <div class="w-full h-full flex flex-col justify-center">
            <div class="w-full flex justify-evenly items-center px-8 py-4">
                <div class="w-1/5 h-full"></div>
                <h2 class="w-3/5 text-4xl font-medium mb-1">Quêtes</h2>
                <div class="w-1/5 flex items-center">
                    <p>Pièces disponibles</p>
                    <img src="~/assets/img/coin.png" class="ml-2 mr-16 h-12" alt="Woot Coin" />
                    <button>
                        <svg class="svg-icon h-8" viewBox="0 0 20 20">
                            <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="w-4/5 h-full flex justify-evenly flex-wrap mx-auto mb-4 py-2 overflow-y-auto">
                <div class="basis-1/5 m-2 p-1 border border-gray-500 rounded shadow-md">
                    <img src="~/assets/img/placeholder.png" alt="Placeholder Item" class="mb-2" />
                    <Form>
                        <input class="mb-2 rounded" type="text" value="Boire un café">
                        <input class="mb-2 rounded" type="text" value="Il faut boire le café avec Patrick de la compta">
                        <input class="mb-2 rounded" type="text" value="3">
                        <button type="submit" class="w-8 p-1 rounded border-2 border-indigo-400 bg-indigo-400 text-white transition duration-250 hover:bg-indigo-500 hover:border-indigo-500 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>
                            </svg>
                        </button>
                        <label for="checked-toggle" class="inline-flex relative items-center mx-4 cursor-pointer">
                            <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" checked>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-emerald-300  dark:peer-focus:ring-emerald-700  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500 "></div>
                            </label>
                        <button class="w-8 p-1 mb-4 mt-2 rounded border-2 border-red-500 bg-red-500 text-white transition duration-250 hover:bg-red-600 hover:border-red-600 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
                            </svg>
                        </button>
                    </Form>
                </div>
                <div class="basis-1/5 m-2 p-1 border border-gray-500 rounded shadow-md">
                    <img src="~/assets/img/placeholder.png" alt="Placeholder Item" class="mb-2" />
                    <Form>
                        <input class="mb-2 rounded" type="text" value="Boire un café">
                        <input class="mb-2 rounded" type="text" value="Il faut boire le café avec Patrick de la compta">
                        <input class="mb-2 rounded" type="text" value="3">
                        <button type="submit" class="w-8 p-1 rounded border-2 border-indigo-400 bg-indigo-400 text-white transition duration-250 hover:bg-indigo-500 hover:border-indigo-500 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>
                            </svg>
                        </button>
                        <label for="checked-toggle" class="inline-flex relative items-center mx-4 cursor-pointer">
                            <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" checked>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-emerald-300  dark:peer-focus:ring-emerald-700  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500 "></div>
                            </label>
                        <button class="w-8 p-1 mb-4 mt-2 rounded border-2 border-red-500 bg-red-500 text-white transition duration-250 hover:bg-red-600 hover:border-red-600 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
                            </svg>
                        </button>
                    </Form>
                </div>
                <div class="basis-1/5 m-2 p-1 border border-gray-500 rounded shadow-md">
                    <img src="~/assets/img/placeholder.png" alt="Placeholder Item" class="mb-2" />
                    <Form>
                        <input class="mb-2 rounded" type="text" value="Boire un café">
                        <input class="mb-2 rounded" type="text" value="Il faut boire le café avec Patrick de la compta">
                        <input class="mb-2 rounded" type="text" value="3">
                        <button type="submit" class="w-8 p-1 rounded border-2 border-indigo-400 bg-indigo-400 text-white transition duration-250 hover:bg-indigo-500 hover:border-indigo-500 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>
                            </svg>
                        </button>
                        <label for="checked-toggle" class="inline-flex relative items-center mx-4 cursor-pointer">
                            <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" checked>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-emerald-300  dark:peer-focus:ring-emerald-700  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500 "></div>
                            </label>
                        <button class="w-8 p-1 mb-4 mt-2 rounded border-2 border-red-500 bg-red-500 text-white transition duration-250 hover:bg-red-600 hover:border-red-600 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
                            </svg>
                        </button>
                    </Form>
                </div>
                <div class="basis-1/5 m-2 p-1 border border-gray-500 rounded shadow-md">
                    <img src="~/assets/img/placeholder.png" alt="Placeholder Item" class="mb-2" />
                    <Form>
                        <input class="mb-2 rounded" type="text" value="Boire un café">
                        <input class="mb-2 rounded" type="text" value="Il faut boire le café avec Patrick de la compta">
                        <input class="mb-2 rounded" type="text" value="3">
                        <button type="submit" class="w-8 p-1 rounded border-2 border-indigo-400 bg-indigo-400 text-white transition duration-250 hover:bg-indigo-500 hover:border-indigo-500 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>
                            </svg>
                        </button>
                        <label for="checked-toggle" class="inline-flex relative items-center mx-4 cursor-pointer">
                            <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" checked>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-emerald-300  dark:peer-focus:ring-emerald-700  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500 "></div>
                            </label>
                        <button class="w-8 p-1 mb-4 mt-2 rounded border-2 border-red-500 bg-red-500 text-white transition duration-250 hover:bg-red-600 hover:border-red-600 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
                            </svg>
                        </button>
                    </Form>
                </div>
                <div class="basis-1/5 m-2 p-1 border border-gray-500 rounded shadow-md">
                    <img src="~/assets/img/placeholder.png" alt="Placeholder Item" class="mb-2" />
                    <Form>
                        <input class="mb-2 rounded" type="text" value="Boire un café">
                        <input class="mb-2 rounded" type="text" value="Il faut boire le café avec Patrick de la compta">
                        <input class="mb-2 rounded" type="text" value="3">
                        <button type="submit" class="w-8 p-1 rounded border-2 border-indigo-400 bg-indigo-400 text-white transition duration-250 hover:bg-indigo-500 hover:border-indigo-500 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>
                            </svg>
                        </button>
                        <label for="checked-toggle" class="inline-flex relative items-center mx-4 cursor-pointer">
                            <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" checked>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-emerald-300  dark:peer-focus:ring-emerald-700  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500 "></div>
                            </label>
                        <button class="w-8 p-1 mb-4 mt-2 rounded border-2 border-red-500 bg-red-500 text-white transition duration-250 hover:bg-red-600 hover:border-red-600 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
                            </svg>
                        </button>
                    </Form>
                </div>
                <div class="basis-1/5 m-2 p-1 border border-gray-500 rounded shadow-md">
                    <img src="~/assets/img/placeholder.png" alt="Placeholder Item" class="mb-2" />
                    <Form>
                        <input class="mb-2 rounded" type="text" value="Boire un café">
                        <input class="mb-2 rounded" type="text" value="Il faut boire le café avec Patrick de la compta">
                        <input class="mb-2 rounded" type="text" value="3">
                        <button type="submit" class="w-8 p-1 rounded border-2 border-indigo-400 bg-indigo-400 text-white transition duration-250 hover:bg-indigo-500 hover:border-indigo-500 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>
                            </svg>
                        </button>
                        <label for="checked-toggle" class="inline-flex relative items-center mx-4 cursor-pointer">
                            <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" checked>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-emerald-300  dark:peer-focus:ring-emerald-700  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500 "></div>
                            </label>
                        <button class="w-8 p-1 mb-4 mt-2 rounded border-2 border-red-500 bg-red-500 text-white transition duration-250 hover:bg-red-600 hover:border-red-600 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
                            </svg>
                        </button>
                    </Form>
                </div>
                <div class="basis-1/5 m-2 p-1 border border-gray-500 rounded shadow-md">
                    <img src="~/assets/img/placeholder.png" alt="Placeholder Item" class="mb-2" />
                    <Form>
                        <input class="mb-2 rounded" type="text" value="Boire un café">
                        <input class="mb-2 rounded" type="text" value="Il faut boire le café avec Patrick de la compta">
                        <input class="mb-2 rounded" type="text" value="3">
                        <button type="submit" class="w-8 p-1 rounded border-2 border-indigo-400 bg-indigo-400 text-white transition duration-250 hover:bg-indigo-500 hover:border-indigo-500 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>
                            </svg>
                        </button>
                        <label for="checked-toggle" class="inline-flex relative items-center mx-4 cursor-pointer">
                            <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" checked>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-emerald-300  dark:peer-focus:ring-emerald-700  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500 "></div>
                            </label>
                        <button class="w-8 p-1 mb-4 mt-2 rounded border-2 border-red-500 bg-red-500 text-white transition duration-250 hover:bg-red-600 hover:border-red-600 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
                            </svg>
                        </button>
                    </Form>
                </div>
                <div class="basis-1/5 m-2 p-1 border border-gray-500 rounded shadow-md">
                    <img src="~/assets/img/placeholder.png" alt="Placeholder Item" class="mb-2" />
                    <Form>
                        <input class="mb-2 rounded" type="text" value="Boire un café">
                        <input class="mb-2 rounded" type="text" value="Il faut boire le café avec Patrick de la compta">
                        <input class="mb-2 rounded" type="text" value="3">
                        <button type="submit" class="w-8 p-1 rounded border-2 border-indigo-400 bg-indigo-400 text-white transition duration-250 hover:bg-indigo-500 hover:border-indigo-500 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>
                            </svg>
                        </button>
                        <label for="checked-toggle" class="inline-flex relative items-center mx-4 cursor-pointer">
                            <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" checked>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-emerald-300  dark:peer-focus:ring-emerald-700  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500 "></div>
                            </label>
                        <button class="w-8 p-1 mb-4 mt-2 rounded border-2 border-red-500 bg-red-500 text-white transition duration-250 hover:bg-red-600 hover:border-red-600 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
                            </svg>
                        </button>
                    </Form>
                </div>
                <div class="basis-1/5 m-2 p-1 border border-gray-500 rounded shadow-md">
                    <img src="~/assets/img/placeholder.png" alt="Placeholder Item" class="mb-2" />
                    <Form>
                        <input class="mb-2 rounded" type="text" value="Boire un café">
                        <input class="mb-2 rounded" type="text" value="Il faut boire le café avec Patrick de la compta">
                        <input class="mb-2 rounded" type="text" value="3">
                        <button type="submit" class="w-8 p-1 rounded border-2 border-indigo-400 bg-indigo-400 text-white transition duration-250 hover:bg-indigo-500 hover:border-indigo-500 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>
                            </svg>
                        </button>
                        <label for="checked-toggle" class="inline-flex relative items-center mx-4 cursor-pointer">
                            <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" checked>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-emerald-300  dark:peer-focus:ring-emerald-700  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500 "></div>
                            </label>
                        <button class="w-8 p-1 mb-4 mt-2 rounded border-2 border-red-500 bg-red-500 text-white transition duration-250 hover:bg-red-600 hover:border-red-600 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
                            </svg>
                        </button>
                    </Form>
                </div>
                <div class="basis-1/5 m-2 p-1 border border-gray-500 rounded shadow-md">
                    <img src="~/assets/img/placeholder.png" alt="Placeholder Item" class="mb-2" />
                    <Form>
                        <input class="mb-2 rounded" type="text" value="Boire un café">
                        <input class="mb-2 rounded" type="text" value="Il faut boire le café avec Patrick de la compta">
                        <input class="mb-2 rounded" type="text" value="3">
                        <button type="submit" class="w-8 p-1 rounded border-2 border-indigo-400 bg-indigo-400 text-white transition duration-250 hover:bg-indigo-500 hover:border-indigo-500 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>
                            </svg>
                        </button>
                        <label for="checked-toggle" class="inline-flex relative items-center mx-4 cursor-pointer">
                            <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" checked>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-emerald-300  dark:peer-focus:ring-emerald-700  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500 "></div>
                            </label>
                        <button class="w-8 p-1 mb-4 mt-2 rounded border-2 border-red-500 bg-red-500 text-white transition duration-250 hover:bg-red-600 hover:border-red-600 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
                            </svg>
                        </button>
                    </Form>
                </div>
                <div class="basis-1/5 m-2 p-1 border border-gray-500 rounded shadow-md">
                    <img src="~/assets/img/placeholder.png" alt="Placeholder Item" class="mb-2" />
                    <Form>
                        <input class="mb-2 rounded" type="text" value="Boire un café">
                        <input class="mb-2 rounded" type="text" value="Il faut boire le café avec Patrick de la compta">
                        <input class="mb-2 rounded" type="text" value="3">
                        <button type="submit" class="w-8 p-1 rounded border-2 border-indigo-400 bg-indigo-400 text-white transition duration-250 hover:bg-indigo-500 hover:border-indigo-500 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>
                            </svg>
                        </button>
                        <label for="checked-toggle" class="inline-flex relative items-center mx-4 cursor-pointer">
                            <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" checked>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-emerald-300  dark:peer-focus:ring-emerald-700  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500 "></div>
                            </label>
                        <button class="w-8 p-1 mb-4 mt-2 rounded border-2 border-red-500 bg-red-500 text-white transition duration-250 hover:bg-red-600 hover:border-red-600 disabled:opacity-50">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="white" d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
                            </svg>
                        </button>
                    </Form>
                </div>
                <div class="basis-1/5 m-2 p-1 border border-gray-500 rounded shadow-md">
                    <img src="~/assets/img/placeholder.png" alt="Placeholder Item" class="mb-2" />
                    <Form>
                        <input class="mb-2 rounded" type="text" placeholder="Nom de la quête">
                        <input class="mb-2 rounded" type="text" placeholder="Description de la quête">
                        <input class="mb-2 rounded" type="text" placeholder="Récompense de la quête">
                        <button type="submit" class="w-8 p-1 mt-2 rounded border-2 border-indigo-400 bg-indigo-400 text-white transition duration-250 hover:bg-indigo-500 hover:border-indigo-500 disabled:opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                <path fill="white" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                        </button>
                        <label for="checked-toggle" class="inline-flex relative items-center mx-4 cursor-pointer">
                            <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" checked>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-emerald-300  dark:peer-focus:ring-emerald-700  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500 "></div>
                        </label>
                    </Form>
                </div>
            </div>
        </div>

      </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>

</style>
