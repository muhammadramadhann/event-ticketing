import React from "react";
import EventCard from "./EventCard";
import { Link } from "@inertiajs/inertia-react";

export default function EventList({ items }) {
    if (items.length === 0) {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center">
                <img src="/images/empty.svg" alt="empty" />
                <h2 className="fw-bold">Found no events :(</h2>
            </div>
        );
    }

    return (
        <section id="event-list" className="mb-4">
            <div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 g-4">
                {items.map((event) => (
                    <div key={event.id} className="col">
                        <Link href={event.slug} className="event-card">
                            <EventCard
                                title={event.title}
                                slug={event.slug}
                                poster={event.poster}
                                start_date={event.start_date}
                                end_date={event.end_date}
                                city={event.city}
                                price={event.price}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
