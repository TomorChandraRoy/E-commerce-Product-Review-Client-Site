import { useContext } from "react";
import { AuthContext } from "../../../hook/provider/AuthProvider";


const ReviewDetails = ({reviewData}) => {
    const { user,} = useContext(AuthContext);
       const photo = user?.photoURL;
       const { name, email, date, rating, comment } = reviewData;
    return (
        <div>
            <div class="mx-auto  flex  rounded-xl border border-gray-300  p-4 text-left text-gray-600 shadow-lg sm:p-8">
                    <img class="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16" src={photo} alt="Profile Picture" /> 
                    <div class="w-full text-left">
                        <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                            <h3 class="font-medium">{name}</h3>
                            <time class="text-xs" datetime="2022-11-13T20:00Z">{date}</time>
                        </div>
                        <p class="text-sm">{comment}</p>
                        <p class="text-sm">Rating: {rating}</p>
                        <div class="mt-5 flex items-center justify-between text-gray-600">
                            <button class="cursor-pointer border py-2 px-8 text-center text-xs leading-tight transition-colors duration-150 ease-in-out hover:border-gray-500 rounded-lg">Reply</button>
                            <a title="Likes" href="#" class="group flex cursor-pointer items-center justify-around">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rounded-full p-1 group-hover:bg-red-200 group-hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                12
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ReviewDetails;
