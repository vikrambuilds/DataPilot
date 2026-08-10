export default function About() {
    return (
        <section className="mx-auto max-w-4xl px-6 py-20">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                About DataPilot
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Data science without unnecessary complexity.
            </h1>

            <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600">
                <p>
                    DataPilot is an AI-powered Data Science Workspace designed
                    for beginners and small businesses that need practical
                    answers from their data without building a full data-science
                    stack themselves.
                </p>
                <p>
                    The product is designed around a simple workflow: upload a
                    dataset, understand its quality, explore patterns, clean it,
                    generate useful insights, and eventually build
                    machine-learning models.
                </p>
                <p>
                    The architecture deliberately separates application metadata
                    from large files and heavy processing. PostgreSQL stores
                    metadata, object storage stores large files, and background
                    workers handle expensive Python operations.
                </p>
            </div>

            <div className="mt-12 rounded-2xl bg-gray-50 p-7">
                <h2 className="font-semibold">Our principle</h2>
                <p className="mt-3 text-gray-600">
                    Calculations should come from the data-processing engine. AI
                    should explain, guide, and orchestrate the workflow — not
                    invent numerical results.
                </p>
            </div>
        </section>
    );
}
