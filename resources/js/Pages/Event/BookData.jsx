import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import BookingProgress from "@/Components/Event/Design/BookingProgress";
import BackButton from "@/Components/Event/Design/BackButton";

export default function BookData({ auth, event }) {
    const location = window.location.search;
    const params = new URLSearchParams(location);
    return (
        <Authenticated auth={auth}>
            <Head title={`Booking Ticket for ${event.title}`} />
            <BookingProgress
                item={event}
                isActive={`${event.price === 0 ? "step-1" : "step-2"}`}
            />
            <div className="my-sm-4 my-2">
                <BackButton item={event} />
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            {/* Orderer Field */}
                            {/* Participant Field */}
                            {/* Additional Field */}
                        </div>
                        <div className="col-lg-6">{/* EventInfo */}</div>
                    </div>
                    <h1>
                        Booking for <strong>{params.get("tickets")}</strong>{" "}
                        tickets
                    </h1>
                </div>
            </div>
        </Authenticated>
    );
}
