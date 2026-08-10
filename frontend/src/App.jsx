import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";

function PublicLayout({ children }) {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PublicLayout>
                        <Home />
                    </PublicLayout>
                }
            />
            <Route
                path="/features"
                element={
                    <PublicLayout>
                        <Features />
                    </PublicLayout>
                }
            />
            <Route
                path="/about"
                element={
                    <PublicLayout>
                        <About />
                    </PublicLayout>
                }
            />
            <Route
                path="/contact"
                element={
                    <PublicLayout>
                        <Contact />
                    </PublicLayout>
                }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
