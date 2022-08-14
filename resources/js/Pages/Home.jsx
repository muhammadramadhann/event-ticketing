import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navigation/Navbar";
import Events from "@/Components/Event/Events";

export default function Home({ auth, events }) {
    return (
        <>
            <Head title="Home" />
            <Navbar auth={auth} />
            <main className="container my-5">
                <Events items={events} />
            </main>
        </>
    );
}
