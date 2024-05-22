import { footerContent } from "@/lib/content";
import Container from "./container";
import FooterSection from "./footer-list";
import Logo from "./logo";


const Footer = () => {
    return (
        <div className="flex items-center w-full">
            <Container >
                <footer className="w-full" >
                    <div className="w-full mx-auto px-4 py-10">
                        <div className="sm:flex sm:justify-between">
                            <div className="mb-6 sm:mb-0">
                                <Logo />
                                <p className="mt-4 text-gray-600 text-sm w-[168px]">
                                    Data visualization, and expense management for your business.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
                                {
                                    footerContent.map((section, index) => (
                                        <FooterSection key={index} title={section.title} urls={section.urls} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="border-t border-gray-300 mt-10 pt-10 text-gray-600 text-sm flex flex-col sm:flex-row justify-between">
                            <div>&copy; EA 2024</div>
                            <div className="flex mt-4 sm:mt-0">
                                <a href="/privacy-policy" className="mr-4 hover:underline">Privacy Policy</a>
                                <a href="/terms" className="mr-4 hover:underline">Terms & Conditions</a>
                                <a href="/cookie-policy" className="hover:underline">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </Container >
        </div>
    );
};

export default Footer;
