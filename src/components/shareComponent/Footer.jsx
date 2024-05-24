import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {

    return (
        <div className="bg-[#C1DCDC]">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 justify-end">
                    <div>
                        <div className="lg:text-3xl font-bold font-serif">
                            <h2>
                                GREENMIND
                            </h2>
                        </div>

                        <p className="mt-4 max-w-xs text-gray-500">
                            We help you find <br /> your dream plant
                        </p>

                        <ul className="mt-8 flex gap-6">
                            <li>
                                <a href="https://facebook.com/" rel="noreferrer" target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only ">Facebook</span>
                                    <CiFacebook className="h-7 w-7 " />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.instagram.com/" rel="noreferrer" target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Instagram</span>

                                    <FaInstagram className="h-7 w-7" />
                                </a>
                            </li>

                            <li>
                                <a href="https://twitter.com/" rel="noreferrer" target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Twitter</span>
                                    <FaTwitter className="h-7 w-7" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                        <div>
                            <p className="font-medium text-gray-900">Information</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> About </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Product</a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Blog </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Company</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Community </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Career </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Our story </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Contact</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Getting Started </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Pricing </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Resources </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <p className="text-base text-gray-500">&copy; 2024 all Right Reserved Term of use GREENMIND</p>
            </div>
        </div>

    );
};

export default Footer;