import { Separator } from "@/components/ui/separator";
import {
    TwitterIcon,
    FacebookIcon,
    InstagramIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const FooterPage = () => {
    return (
        <footer>
            <div className="max-w-screen-xl mx-auto">
                <Separator />
                <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
                    {/* Copyright */}
                    <span className="text-muted-foreground">
                        &copy; {new Date().getFullYear()}{" "}
                        <Link
                            to="/"
                            className="hover:text-foreground"
                            onClick={() => window.location.reload()}
                        >
                            MD Jaan Interiors
                        </Link>
                        . All rights reserved.
                    </span>

                    <div className="flex items-center gap-5 text-muted-foreground">
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="group" aria-label="Twitter">
                            <TwitterIcon className="h-5 w-5 transition-colors duration-200" />
                        </a>
                        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="group" aria-label="Facebook">
                            <FacebookIcon className="h-5 w-5 transition-colors duration-200" />
                        </a>
                        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="group" aria-label="Instagram">
                            <InstagramIcon className="h-5 w-5 transition-colors duration-200" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;