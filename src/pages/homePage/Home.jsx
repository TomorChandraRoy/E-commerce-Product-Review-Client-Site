import Categories from "../../components/Categories/Categories";
import Banner from "../../components/banner/Banner";
import Products from "../../components/homeProduct/Products";
import Testimonial from "../../components/testimonial/Testimonial";
import AboutUs from './../../components/aboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <AboutUs/>
            <Categories/>
            <Testimonial/>
        </div>
    );
};

export default Home;
