import React from "react";
import moment from "moment";

export default function SelectNumberTicket({
    item,
    onPlus,
    onMinus,
    count,
    price,
}) {
    // Date
    let event_date = moment(item.start_date).format("LL");
    if (item.start_date !== item.end_date)
        event_date = `${moment(item.start_date).format("LL")} - ${moment(
            item.end_date
        ).format("LL")}`;

    return (
        <section id="select-number-ticket">
            <div className="d-flex flex-column mt-5">
                <div className="mb-2">
                    <h3 className="fw-bold">Choose Ticket</h3>
                    <p className="text-muted">
                        Please choose how many ticket do you want.
                    </p>
                </div>
            </div>

            <div className="card add-ticket py-4 mb-lg-0 mb-4">
                <div className="px-4">
                    <h6 className="fw-bold">{item.title}</h6>
                    <p className="text-danger my-3">
                        Registration limit : {event_date} (23:59 WIB)
                    </p>
                </div>
                <hr className="mt-1 mb-4" />
                <div className="px-4">
                    <div className="row align-items-center">
                        <div className="col-md-8 col-6">
                            <h6 className="fw-bold mt-2">{price}</h6>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="input-group justify-content-end">
                                <button
                                    className="btn btn-main-blue btn-minus"
                                    type="button"
                                    id="button-addon2"
                                    onClick={onMinus}
                                >
                                    <img src="/images/minus.svg" alt="minus" />
                                </button>
                                <input
                                    className="form-control"
                                    value={count}
                                    min={1}
                                    max={3}
                                    readOnly
                                />
                                <button
                                    className="btn btn-main-blue btn-plus"
                                    type="button"
                                    id="button-addon2"
                                    onClick={onPlus}
                                >
                                    <img src="/images/plus.svg" alt="plus" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
