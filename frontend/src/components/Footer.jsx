import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-gray-50">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="font-semibold">DataPilot</p>
                    <p className="mt-1 text-sm text-gray-500">
                        Upload. Understand. Clean. Predict.
                    </p>
                </div>
                <div className="flex gap-5 text-sm text-gray-500">
                    <Link to="/features" className="hover:text-gray-900">
                        Features
                    </Link>
                    <Link to="/about" className="hover:text-gray-900">
                        About
                    </Link>
                    <Link to="/contact" className="hover:text-gray-900">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}
