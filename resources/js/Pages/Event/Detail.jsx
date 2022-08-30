import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import DetailHero from "@/Components/Event/Detail/DetailHero";
import DetailBody from "@/Components/Event/Detail/DetailBody";

export default function Detail({ auth, event }) {
    return (
        <Authenticated auth={auth}>
            <Head title={event.title} />
            <div className="container my-5">
                <DetailHero item={event} />
                <DetailBody item={event} />
            </div>
        </Authenticated>
    );
}
