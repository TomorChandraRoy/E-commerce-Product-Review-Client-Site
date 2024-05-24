import { Link } from "react-router-dom";


const Sorting = ({singleSortData}) => {
    const { image, name, price,  _id } = singleSortData;
    return (
        <div>
            
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className="h-64 w-full" src={image} alt="image" /></figure>
            <div className="card-body">
                <h2 className="card-title text-gray-700 ">{name}</h2>

                <p className="text-gray-700 font-semibold">Price:$ {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/RoomDetails/${_id}`}>
                        <button className="btn  text-white bg-[#0cc4b0] hover:bg-[#09ad9b]">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Sorting;