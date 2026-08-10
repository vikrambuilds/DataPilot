const sections = [
    {
        title: "Dataset management",
        items: [
            "Upload CSV, Excel, JSON, and other supported formats",
            "Maximum 200 MB per dataset in the initial release",
            "Dataset metadata and processing status",
            "Saved projects for returning to previous analyses",
        ],
    },
    {
        title: "Exploratory Data Analysis",
        items: [
            "Automatic data profiling",
            "Missing-value and duplicate analysis",
            "Statistical summaries",
            "Interactive charts and correlation analysis",
        ],
    },
    {
        title: "Data cleaning",
        items: [
            "Missing-value handling",
            "Duplicate detection and removal",
            "Outlier analysis",
            "Type conversion and feature transformations",
        ],
    },
    {
        title: "Machine learning",
        items: [
            "Classification and regression workflows",
            "Model comparison",
            "Evaluation metrics and visualizations",
            "Prediction playground and model export",
        ],
    },
];

export default function Features() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Features
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                    A practical workspace for the complete data workflow.
                </h1>
                <p className="mt-5 text-lg leading-8 text-gray-600">
                    DataPilot is being built in phases so the core data workflow
                    stays reliable before advanced AI and AutoML capabilities
                    are added.
                </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
                {sections.map((section) => (
                    <article
                        key={section.title}
                        className="rounded-2xl border border-gray-200 p-7"
                    >
                        <h2 className="text-xl font-semibold">
                            {section.title}
                        </h2>
                        <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-600">
                            {section.items.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}
