
const Banner = () => {
    return (
        <>
            <section className="text-black bg-[#C1DCDC] body-font">
                <div className="container mx-auto flex px-5 pt-14  md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-5xl lg:text-3xl md:text-2xl mb-4 font-bold ">Buy your
                            <br className="hidden lg:inline-block" /> dream plants
                        </h1>
                        <div className="flex justify-between gap-10">
                            <div>
                                <p className="mt-4 font-bold max-w-lg sm:text-xl/relaxed">
                                    50+
                                </p>
                                <strong className="block font-extrabold "> Plant Species </strong>
                            </div>
                            <div>
                                <p className="mt-4 font-bold max-w-lg sm:text-xl/relaxed">
                                    100+
                                </p>
                                <strong className="block font-extrabold"> Customers</strong>
                            </div>
                        </div>

                        <label className="input input-bordered flex items-center gap-[6rem] mt-5">
                            <input type="text" className="grow" placeholder="What are you looking for?" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-[2rem] h-[2rem] rounded p-[3px] bg-[#C1DCDC] opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/fXx8rWt/file.png" />
                    </div>
                </div>
            </section>
        </>
    )
};
export default Banner;


