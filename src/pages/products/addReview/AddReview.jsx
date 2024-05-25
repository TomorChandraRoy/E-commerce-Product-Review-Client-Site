// import { useForm } from "react-hook-form";
// import useAxiosPublic from "../../../hook/axiosPublic/useAxiosPublic";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../../hook/provider/AuthProvider";
// import ReviewDetails from "./ReviewDetails";

// const AddReview = () => {
//     const useAxios = useAxiosPublic();
//     const [review, setReview] = useState([]);
// //  

//     const { register, handleSubmit, reset } = useForm();
//     const handleSubmitForm = (data,) => {
//         try {
//             useAxios.post("/review", data ,{
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });
//             console.log(data);
//             reset();
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(()=>{
//         useAxios.get("/review")
//         .then(res => {
//             setReview(res.data);
//         }
//         )
//     },[]);



//     return (
//         <div className="">
//             <div className="w-[50%] h-full overflow-scroll ">
//                 {/* User Feedback */}
//                 <p className="text-3xl text-center text-slate-800 font-bold my-6">User Feedback</p>

//                {
//                 review.map(reviewData => <ReviewDetails key={reviewData._id} reviewData={reviewData}></ReviewDetails>)
//                }
               

//             </div>

//             <div className="h-full w-[50%]  mx-auto ">
//                 <form onSubmit={handleSubmit(handleSubmitForm)} className="card-body bg-blue-400 shadow-green-400 rounded" >
//                     <p className="text-center text-4xl my-6 ">Add a review</p>

//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Name</span>
//                         </label>
//                         <input type="text" {...register("name", { required: true })} placeholder="Enter Your Name" className="input input-bordered" required />
//                     </div>


//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Email</span>
//                         </label>
//                         <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email" className="input input-bordered" required />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Date</span>
//                         </label>
//                         <input type="date" {...register("date", { required: true })} placeholder="" className="input input-bordered" required />
//                     </div>

//                     <div className="form-control ">
//                         <label>Rating Selection</label>
//                         <select className="border" {...register("rating", { required: true })}>
//                             <option value="2">2</option>
//                             <option value="3">3</option>
//                             <option value="4">4</option>
//                             <option value="5">5</option>
//                         </select>
//                     </div>



//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Your Comment</span>
//                         </label>
//                         <textarea {...register("comment", { required: true })} placeholder="Add Your Comments" className="textarea textarea-bordered textarea-md w-full " ></textarea>
//                     </div>
//                     <div className="form-control mt-6">

//                         <button className="btn bg-[#0cc4b0] text-white border-none hover:bg-[#1b776c]">Submit</button>

//                     </div>
//                 </form>
//             </div>
//         </div>

//     );
// };

// export default AddReview;

import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hook/axiosPublic/useAxiosPublic";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../hook/provider/AuthProvider";
import ReviewDetails from "./ReviewDetails";

const AddReview = () => {
    const useAxios = useAxiosPublic();
    const [review, setReview] = useState([]);
//  

    const { register, handleSubmit, reset } = useForm();
    const handleSubmitForm = (data,) => {
        try {
            useAxios.post("/review", data ,{
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(data);
            reset();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        useAxios.get("/review")
        .then(res => {
            setReview(res.data);
        }
        )
    },[]);



    return (
       <div className=" mt-6 w-[1000px] mb-10">
         <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center ">
            <div className="lg:overflow-scroll lg:h-[700px] h-full ">
                {/* User Feedback */}
                <p className="text-3xl text-center text-slate-800 font-bold my-6">User Feedback</p>

               {
                review.map(reviewData => <ReviewDetails key={reviewData._id} reviewData={reviewData}></ReviewDetails>)
               }
               

            </div>

            <div className=" w-full  mx-auto">
                <form onSubmit={handleSubmit(handleSubmitForm)} className="card-body bg-blue-400 shadow-green-400 rounded" >
                    <p className="text-center text-4xl my-6 ">Add a review</p>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Enter Your Name" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" {...register("date", { required: true })} placeholder="" className="input input-bordered" required />
                    </div>

                    <div className="form-control ">
                        <label>Rating Selection</label>
                        <select className="border" {...register("rating", { required: true })}>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>



                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Comment</span>
                        </label>
                        <textarea {...register("comment", { required: true })} placeholder="Add Your Comments" className="textarea textarea-bordered textarea-md w-full " ></textarea>
                    </div>
                    <div className="form-control mt-6">

                        <button className="btn bg-[#0cc4b0] text-white border-none hover:bg-[#1b776c]">Submit</button>

                    </div>
                </form>
            </div>
        </div>
       </div>

    );
};

export default AddReview;
