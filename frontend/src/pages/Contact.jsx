import { Mail } from "lucide-react";

export default function Contact() {
    return (
        <section className="mx-auto max-w-3xl px-6 py-20">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Contact
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Have a question about DataPilot?
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-600">
                This page is a placeholder for the public contact flow. A proper
                contact form and email service can be added after the
                authentication and backend foundation is complete.
            </p>

            <div className="mt-10 flex items-center gap-4 rounded-2xl border border-gray-200 p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gray-100">
                    <Mail size={20} />
                </div>
                <div>
                    <p className="font-semibold">Get in touch</p>
                    <p className="text-sm text-gray-500">
                        Contact functionality will be connected later.
                    </p>
                </div>
            </div>
        </section>
    );
}
