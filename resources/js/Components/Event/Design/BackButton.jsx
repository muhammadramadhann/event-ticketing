import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function BackButton({ item }) {
    return (
        <div className="container mb-4">
            <Link
                href={`${
                    item.price === 0
                        ? route("event.detail", item.slug)
                        : route("event.detail.select", item.slug)
                }`}
                className="back"
            >
                <FontAwesomeIcon icon={faArrowLeft} />
                <span className="ms-2">Kembali</span>
            </Link>
        </div>
    );
}
