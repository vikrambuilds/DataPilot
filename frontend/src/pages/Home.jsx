import { ArrowRight, BarChart3, Brain, Database, Sparkles } from "lucide-react";

import { Link } from "react-router-dom";

const capabilities = [
    {
        icon: Database,
        title: "Explore your data",
        text: "Understand columns, data types, missing values, distributions, and relationships.",
    },
    {
        icon: BarChart3,
        title: "Build useful insights",
        text: "Turn raw datasets into interactive visualizations and practical business analytics.",
    },
    {
        icon: Sparkles,
        title: "Clean with confidence",
        text: "Identify duplicates, missing values, outliers, and common data-quality problems.",
    },
    {
        icon: Brain,
        title: "Build ML models",
        text: "Train, compare, evaluate, and use machine-learning models from one workspace.",
    },
];

export default function Home() {
    return (
        <>
            <section className="border-b border-gray-100 bg-linear-to-b from-gray-50 to-white">
                <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
                    <div className="max-w-4xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600 shadow-sm">
                            <Sparkles size={15} />
                            AI-powered data science workspace
                        </div>

                        <h1 className="text-5xl font-bold tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
                            Turn raw data into
                            <span className="block text-gray-500">
                                useful decisions.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
                            DataPilot helps beginners and small businesses
                            upload, explore, clean, analyze, and eventually
                            build machine-learning models from their own
                            datasets — without needing an advanced data-science
                            workflow.
                        </p>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3.5 font-semibold text-white hover:bg-gray-700">
                                Get started <ArrowRight size={18} />
                            </button>
                            <Link
                                to="/features"
                                className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-3.5 font-semibold text-gray-800 hover:bg-gray-50"
                            >
                                Explore features
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                        One workspace
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        From dataset upload to data science workflow.
                    </h2>
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {capabilities.map((item) => {
                        const Icon = item.icon;
                        return (
                            <article
                                key={item.title}
                                className="rounded-2xl border border-gray-200 p-6"
                            >
                                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gray-100">
                                    <Icon size={21} />
                                </div>
                                <h3 className="mt-5 font-semibold">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-gray-600">
                                    {item.text}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="bg-gray-950 text-white">
                <div className="mx-auto max-w-7xl px-6 py-20">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                                Built for practical analysis
                            </p>
                            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                                Your data stays organized as a project, not a
                                pile of files.
                            </h2>
                            <p className="mt-5 max-w-xl leading-7 text-gray-400">
                                Each project will keep its dataset metadata,
                                analyses, cleaning history, models, predictions,
                                and reports together while large files live in
                                dedicated object storage.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
                            <div className="space-y-3 font-mono text-sm">
                                {[
                                    "Dataset",
                                    "EDA",
                                    "Cleaning",
                                    "Business Analytics",
                                    "AI Analyst",
                                    "ML Models",
                                    "Reports",
                                ].map((item, index) => (
                                    <div
                                        key={item}
                                        className="flex items-center justify-between rounded-lg bg-gray-800 px-4 py-3"
                                    >
                                        <span>{item}</span>
                                        <span className="text-gray-500">
                                            0{index + 1}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
