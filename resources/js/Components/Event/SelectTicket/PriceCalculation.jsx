import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function PriceCalcultaion({ item, count, price }) {
    return (
        <section id="price-calculation">
            <div className="card">
                <span className="fw-bold px-lg-4 px-0 mb-2">Ticket Info</span>

                <div className="mb-4 px-lg-4 px-0">
                    <img src="/images/ticket.svg" alt="ticket" />
                    <span className="ms-2 text-muted align-middle">
                        Maximum purchase of 3 tickets
                    </span>
                </div>

                <div className="price-jumbotron p-sm-4 p-3 mb-4">
                    <p className="fw-bold mb-3">Total Payments</p>
                    <div className="row justify-content-between align-items-center">
                        <div className={count === 0 ? "col-12" : "col-8"}>
                            <p className="mb-2">
                                {count === 0
                                    ? "Haven't selected the number of tickets"
                                    : `(${count}x) ${item.title}`}
                            </p>
                        </div>
                        <div className="col-4">
                            <p className="text-end">{count > 0 ? price : ""}</p>
                        </div>
                    </div>
                    <hr className="mt-1" />
                    <div className="row justify-content-between align-items-center total-price">
                        <div className="col-6">
                            <h6 className="fw-bold">Total</h6>
                        </div>
                        <div className="col-6">
                            <h6 className="fw-bold text-end">
                                Rp {(item.price * count).toLocaleString()}
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="px-lg-4 px-0">
                    <Link
                        href={route("event.detail.booking", item.slug)}
                        data={{ tickets: count }}
                        className={`btn btn-main-blue fw-bold w-100 ${
                            count === 0 ? "disabled" : ""
                        }`}
                    >
                        Confirm
                    </Link>
                </div>
            </div>
        </section>
    );
}
