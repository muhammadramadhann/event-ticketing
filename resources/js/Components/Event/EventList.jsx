import React from "react";
import EventCard from "./EventCard";

export default function EventList({ events }) {
    if (events.length === 0) {
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
                {events.map((event, index) => (
                    <EventCard
                        key={event.id}
                        title={event.title}
                        slug={event.slug}
                        poster={event.poster}
                        start_date={event.start_date}
                        end_date={event.end_date}
                        city={event.city}
                        price={event.price}
                    />
                ))}
            </div>
        </section>
    );
}
