
const Products = () => {
    return (
        <div>
            <section className="text-black  body-font lg:mt-5 ">
                <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className=" sm:text-4xl lg:text-3xl md:text-2xl mb-4 font-bold text-black">Best Selling 
                            <br className="hidden lg:inline-block" />Plants
                        </h1>
                        <p className="mb-8 leading-relaxed">Easiest way to healthy life by buying your favorite plants </p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-black bg-[#C1DCDC] border-0 lg:py-2 lg:px-6 md:py-1 md:px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg">See more ➡</button>
                        </div>
                    </div>
                    <div className="grid gap-12 md:gap-6 lg:grid-cols-3 md:grid-cols-3  grid-cols-1 ">
                    <div className="xl:w-[246px] lg:w-[200px] ">
                        <img className="object-cover object-center rounded " alt="hero" src="https://i.ibb.co/d4vSGrF/agent-2.jpg" />
                        <p className="font-medium text-xl my-4">Natural Plants</p>
                        <p className="text-gray-400">$1400.00</p>
                    </div>
                    <div className="xl:w-[246px] lg:w-[200px] ">
                        <img className="object-cover object-center rounded " alt="hero" src="https://i.ibb.co/d4vSGrF/agent-2.jpg" />
                        <p className="font-medium text-xl my-4">Artificial Plants</p>
                        <p className="text-gray-400">$900.00</p>
                    </div>
                    <div className="xl:w-[246px] lg:w-[200px] ">
                        <img className="object-cover object-center rounded " alt="hero" src="https://i.ibb.co/d4vSGrF/agent-2.jpg" />
                        <p className="font-medium text-xl my-4">Artificial Plants</p>
                        <p className="text-gray-400">$1300.00</p>
                    </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Products;