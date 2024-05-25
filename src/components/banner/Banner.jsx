import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import useAxiosPublic from "../../hook/axiosPublic/useAxiosPublic";

const Banner = () => {
    const useAxios = useAxiosPublic();
    const [searchProducts, setSearchProducts] = useState(0);
    console.log("cbvbvbcv",searchProducts);
    //Search
    const [search, setSearch] = useState();
    console.log(search);

    useEffect(()=>{
        console.log(search);
        useAxios.get(`/allproductsdata?search=${search}`)
        .then(res=>{
            setSearchProducts(res.data?.totalProduct);

        })
    },[search]);


    const handleSearcht = (e) => {
        e.preventDefault();
        const searchText = e.target.name.value;
        setSearch(searchText)
        console.log(searchText);
    }
   
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

                        <form onSubmit={handleSearcht}  className="input input-bordered flex items-center gap-[6rem] mt-5">
                            <input type="text" name="name"  className="grow" placeholder=" Search Plant Name " />
                            <button className="btn bg-[#93afaf] text-white  btn-sm hover:bg-[#09ad9b]" ><IoSearch /></button>
                        </form>
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


