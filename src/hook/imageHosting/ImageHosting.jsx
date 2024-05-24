import useAxiosPublic from "../axiosPublic/useAxiosPublic";

export const UsePhoto = async (imgloc)=> {
    const formData = new FormData()
    formData.append('image',imgloc)
    const key = import.meta.env.VITE_IMAGE_HOSTING_KEY
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${key}`,formData);
    // console.log(data.data.display_url);
    return data.data.display_url;
  }

 
  const ImageHosting = () => {
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
    const axiosPublic = useAxiosPublic(); 
    return (
        <div>
           
        </div>
    );
  };
  
  export default ImageHosting;

