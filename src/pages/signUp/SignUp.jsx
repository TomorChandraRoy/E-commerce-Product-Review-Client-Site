import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, } from "react-router-dom";
import { AuthContext } from "../../hook/provider/AuthProvider";
import useAxiosPublic from "../../hook/axiosPublic/useAxiosPublic";


const SignUp = () => {
    const { createAccount } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

    //#React hook Form
    const { register, formState: { errors }, handleSubmit, } = useForm();
    const onSubmit = (data) => {
        // console.log(data.photoURL[0]);
        console.log(data.user);

        //Image Hosting 
        // const signUpInputImg = data.photoURL[0];
        // const signUpImg = await axiosPublic.post(image_hosting_api, signUpInputImg, {
        //     headers: { 'Content-Type': 'multipart/form-data' }
        // });
        // console.log(signUpImg.data);

        //#CREATE AUTH Firebase
        createAccount(data.email, data.password)
            .then(result => {
                console.log("", result)
            })
            .catch(error => { console.error(error) });
    }

    return (
        <div>
            <div className="hero h-fit py-10">
                <div className=" flex items-center flex-wrap md:w-full justify-around">
                    <div className=" w-full mx-5 text-center md:w-2/5">
                        <div className="lg:text-3xl font-bold font-serif">
                            GREENMIND
                        </div>
                        <h1 className="text-center font-bold text-2xl my-4">
                            Join for Exclusive Deals
                        </h1>
                        <p>Unlock your dream home with us! Join now for exclusive listings, personalized insights, and expert guidance. Your key to finding the perfect place to call home starts here.</p>
                    </div>
                    <div className="shadow-2xl bg-white rounded-xl mx-3 my-2 w-full md:w-2/5">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
                            {/* Name input box */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    placeholder="Your Name"
                                    className="input input-bordered"
                                />
                                {errors.name && (
                                    <span className="error-message text-red-500">
                                        Name is required
                                    </span>
                                )}
                            </div>

                            {/* Photo URL box */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="file"  {...register("photoURL", { required: true })} className="file-input file-input-bordered file-input-info w-full" />
                                {errors.photoURL && (
                                    <span className="error-message text-red-500">
                                        photoURL is required
                                    </span>
                                )}
                            </div>

                            {/* email input box */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    placeholder="Your Email"
                                    className="input input-bordered"
                                />
                                {errors.email && (
                                    <span className="error-message text-red-500">
                                        Email is required
                                    </span>
                                )}

                            </div>

                            {/* password input box */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,

                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                    })}
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                                 {errors.password && (
                                    <span className="error-message text-red-500">
                                        Password is required
                                    </span>
                                )}
                            </div>

                            {/* Terms and Conditions Checkbox */}
                            <div className="mt-2">
                                <input type="checkbox" name="box" id="" className={`mr-1`} />
                                <label className="inline-block" htmlFor="remember-me">
                                    I agree to the
                                    <a className="underline" href="#">
                                        Terms and Conditions
                                    </a>
                                </label>
                            </div>

                            {/* SignUp button  */}
                            <div className="form-control mt-6">
                                <button type="submit" className={`btn bg-orange-400 disabled:text-slate-600 hover:bg-orange-500 border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-60`}>
                                    Sign up
                                </button>
                            </div>

                            {/* new here */}
                            <p className="py-6 text-center ">
                                <small className="text-base">
                                    Already have an account ||{" "}
                                    <Link to="/signin" className="text-blue-600">
                                        Plese Login
                                    </Link>
                                </small>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;