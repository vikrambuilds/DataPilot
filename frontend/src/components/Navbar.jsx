import { Link, NavLink } from "react-router-dom";

import { Database, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
    { label: "Features", to: "/features" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link
                    to="/"
                    className="flex items-center gap-2 font-bold text-xl"
                >
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-gray-900 text-white">
                        <Database size={18} />
                    </span>
                    DataPilot
                </Link>

                <nav className="hidden items-center gap-7 md:flex">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `text-sm font-medium transition ${
                                    isActive
                                        ? "text-gray-900"
                                        : "text-gray-500 hover:text-gray-900"
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="hidden items-center gap-3 md:flex">
                    <button className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100">
                        Log in
                    </button>
                    <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700">
                        Get started
                    </button>
                </div>

                <button
                    className="rounded-lg p-2 md:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle navigation"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {open && (
                <div className="border-t border-gray-100 px-6 py-4 md:hidden">
                    <nav className="flex flex-col gap-4">
                        {links.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                onClick={() => setOpen(false)}
                                className="text-sm font-medium text-gray-700"
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
