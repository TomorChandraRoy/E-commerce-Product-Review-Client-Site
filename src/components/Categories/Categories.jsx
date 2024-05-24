

const Categories = () => {

    return (
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12 ">
                  {/* text - start */}
                    <div className="mb-40 ">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Categories</h2>
                        <p className="mx-auto max-w-screen-md text-center text-gray-500  md:text-lg">Find what you are looking for</p>
                    </div>
                    {/* text - end */}
                <div className="mx-auto max-w-screen-2xl  bg-[#C1DCDC]  lg:h-[650px] md:h-[1115px] h-[1500px] ">
                    <div  className="">
                        <div className="grid lg:gap-4 md:gap-4 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:mx-10 md:mx-20 ">
                            {/* product - start */}
                            <div className="-mt-14">
                                <a href="#" className="group  block h-96 overflow-hidden rounded-t-lg bg-gray-100">
                                    <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div >
                                    <div className="flex flex-col text-center mt-3">
                                        <p className="font-bold text-gray-800 text-center transition duration-100 lg:text-lg">Natural Plants</p>
                                    </div>
                                </div>
                            </div>
                            {/* product - end */}
                            {/* product - start */}
                            <div className="mt-14">
                                <a href="#" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
                                    <img src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Nick Karvounis" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div >
                                    <div className="flex flex-col text-center mt-3 mb-28">
                                        <p className="font-bold text-gray-800 text-center transition duration-100 lg:text-lg">Plant Accessories</p>
                                        <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <button type="button" className="mt-4 btn btn-success mx-auto">Explore ➡ </button>
                                    </div>
                                </div>
                            </div>
                            {/* product - end */}
                            {/* product - start */}
                            <div className="-mt-10">
                                <a href="#" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
                                    <img src="https://images.unsplash.com/photo-1548286978-f218023f8d18?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div >
                                    <div className="flex flex-col text-center mt-3">
                                        <p className="font-bold text-gray-800 text-center transition duration-100 lg:text-lg">Artificial Plants</p>
                                    </div>
                                </div>
                            </div>
                            {/* product - end */}
                        </div>
                    </div>

                </div>
            </div>

        </>


    );
};

export default Categories;