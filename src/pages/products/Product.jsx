import { useEffect } from "react";
import { useState } from "react";
import useAxiosPublic from './../../hook/axiosPublic/useAxiosPublic';
import { BsFillGridFill, BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { FaRegStar, FaStarHalfAlt } from "react-icons/fa";


const Product = () => {
    const useAxios = useAxiosPublic();
    const [allData, setAllData] = useState([]);
    //grid&list
    const [view, setView] = useState('grid');
    // sorting
    const [sort, setSort] = useState();
    //Filtering
    const [category, setCategory] = useState("");
    // console.log(category);

    // Pagination 
    const [totalProduct, setTotalProduct] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    // console.log(totalProduct);
    const [itemPerPage, setItemPerPage] = useState(10);
    const numberOfPage = Math.ceil(totalProduct / itemPerPage);
    const pages = [...Array(numberOfPage).keys()];
    // console.log(pages);
    const [loading, setLoading] = useState(false);

    //@ Filtering Api
    useEffect(() => {
        fetch(`http://localhost:5000/filterproduct?category=${category}`)
            .then(res => res.json())
            .then(data => {
                setAllData(data);
                // console.log(data);
            })
    }, [category]);

    const handleCategory = (e) => {
        setCategory(e.target.value);
    }
    //@ Filtering Api End

    //@ Sorting Api
    useEffect(() => {
        fetch(`http://localhost:5000/sortingproduct/?sortField=price&sortOrder=${sort}`)
            .then(res => res.json())
            .then(data => {
                // setSortData(data)
                setAllData(data)
            })
    }, [sort]);

    const handleSorting = (e) => {
        console.log(e.target.value)
        setSort(e.target.value)
    }
    //@ Sorting Api End

    //@ Grid&List &api pagination
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await useAxios.get(`/allproducts?page=${currentPage}&size=${itemPerPage}`)
                const data = res.data;
                setAllData(data);
            } catch (error) {
                console.error("Data not get", error);
            }
        }
        fetchData();

    }, [currentPage, itemPerPage]);
    //@ Grid&List end

    // @ Pagination Api
    useEffect(() => {

        useAxios.get("/productpagination")
            .then(res => {
                setTotalProduct(res.data.total);
            }
            )


    }, []);

    const handleItemPerPage = (e) => {
        const val = parseInt(e.target.value);
        setItemPerPage(val);
        setCurrentPage(0);


    };

    const previousBtnHandle = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
            setLoading(!loading)
        }
    };
    const nextBtnHandle = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
            setLoading(!loading)
        }
    };
    // @ Pagination Api End

    return (
        <div className="my-10 lg:px-10 px-5">
            <div className="flex justify-between mt-10 p-2">
                <div className="flex space-x-2 ">
                    <button
                        onClick={() => setView('grid')}
                        className={`px-4 py-2 rounded-md ${view === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                    >
                        <BsFillGridFill className="text-lg"></BsFillGridFill>
                    </button>
                    <button
                        onClick={() => setView('list')}
                        className={`px-4 py-2 rounded-md ${view === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                    >
                        <BsList className="text-lg"></BsList>
                    </button>
                </div>

                <div className="flex">

                    {/* ! sorting */}
                    <div className="h-10 w-full">
                        <select defaultValue="" onChange={handleSorting} className="bg-[#0cc4b0] text-white" >

                            <option value="" select> Sort by price</option>
                            <option value="1">Asending sort by price</option>
                            <option value="-1">desending sort by price</option>
                        </select>
                    </div>
                    {/*! sorting  end*/}

                    {/* filtering */}
                    <div>
                        <select value={category} onChange={handleCategory} className="select select-bordered w-full max-w-xs">
                            <option value="">Filtering</option>
                            <option value="Outdoor">Outdoor</option>
                            <option value="Indoor">Indoor</option>
                            <option value="Succulent">Succulent</option>
                            <option value="Herb">Herb</option>
                            <option value="Flowering">Flowering</option>
                        </select>
                    </div>
                    {/* filtering end */}
                </div>

            </div>
            <div className={`mt-4 ${view === 'grid' ? 'grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4' : 'list'}`}>
                {
                    allData?.map((singleProduct, index) =>
                        <div className={`card ${view === 'grid' ? '' : 'flex flex-row items-center'} bg-base-100 shadow-xl border border-red-400`}>
                            <figure className={`${view === 'grid' ? '' : 'flex-none w-1/3'}`}>
                                <img className="object-cover w-[200px] mt-3" src={singleProduct.image} alt="Album" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{singleProduct.name}</h2>
                                <p>${singleProduct.price}</p>
                                <span>Rating: {singleProduct.rating}</span>
                                
                                <div className="card-actions justify-end">
                                    <Link to={`/allproducts/${singleProduct._id}`}><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            {/* Pagination */}
            <div className="grid justify-center my-12 gap-3">
                {/* //" */}
                <div>
                    {/*  onClick={nextBtnHandle} */}
                    <button onClick={previousBtnHandle} className="btn bg-gray-200 mx-1 lg:mx-4"><RxDoubleArrowLeft></RxDoubleArrowLeft></button>

                    {
                        pages.map((page, index) =>
                            <button onClick={() => setCurrentPage(page)} key={index} className={currentPage === page ? "btn bg-[#0cc4b0] text-white lg:mx-4 hover:bg-[#09ad9b]" : "btn bg-gray-200 mx-1 lg:mx-4"}>{index + 1}</button>
                        )
                    }

                    <button onClick={nextBtnHandle} className="btn bg-gray-200 mx-1 lg:mx-4"><RxDoubleArrowRight></RxDoubleArrowRight></button>

                    <select className="btn bg-[#0cc4b0]" value={itemPerPage} onChange={handleItemPerPage}>
                        <option disabled selected>Page</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="23">23</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Product;
