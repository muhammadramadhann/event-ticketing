import React from "react";

export default function BookingProgress({ item, isActive }) {
    if (item.price === 0) {
        return (
            <section id="booking-progress" className="mt-4">
                <div className="progress-container">
                    <ul className="progressbar">
                        <li
                            className={`${
                                item.price === 0 && isActive === "step-1"
                                    ? "active-progress"
                                    : ""
                            } `}
                        >
                            Isi Data
                        </li>
                        <li
                            className={`${
                                item.price === 0 && isActive === "step-2"
                                    ? "active-progress"
                                    : ""
                            }`}
                        >
                            Selesai
                        </li>
                    </ul>
                </div>
            </section>
        );
    } else {
        return (
            <section id="booking-progress" className="mt-4">
                <div className="progress-container">
                    <ul className="progressbar">
                        <li
                            className={`${
                                isActive === "step-1" || isActive === "step-2"
                                    ? "active-progress"
                                    : ""
                            } `}
                        >
                            Pilih Tiket
                        </li>
                        <li
                            className={`${
                                isActive === "step-2" ? "active-progress" : ""
                            } `}
                        >
                            Isi Data
                        </li>
                        <li
                            className={`${
                                isActive === "step-3" ? "active-progress" : ""
                            } `}
                        >
                            Bayar
                        </li>
                        <li
                            className={`${
                                isActive === "step-4" ? "active-progress" : ""
                            }`}
                        >
                            Selesai
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
