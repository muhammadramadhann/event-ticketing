import React, { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import BookingProgress from "@/Components/Event/Design/BookingProgress";
import BackButton from "@/Components/Event/Design/BackButton";
import WarningModal from "@/Components/Event/Design/WarningModal";
import EventHighlight from "@/Components/Event/SelectTicket/EventHighlight";
import PriceCalcultaion from "@/Components/Event/SelectTicket/PriceCalculation";
import SelectNumberTicket from "@/Components/Event/SelectTicket/SelectNumberTicket";
import moment from "moment";

export default function SelectTicket({ auth, event }) {
    let [total, setTotal] = useState(0);
    const [open, setOpen] = useState(false);

    let price_format = `Rp ${event.price.toLocaleString()}`;
    if (event.price === 0) {
        price_format = "Free";
    }

    let event_date = moment(event.start_date).format("LL");
    if (event.start_date !== event.end_date)
        event_date = `${moment(event.start_date).format("LL")} - ${moment(
            event.end_date
        ).format("LL")}`;

    const onMinusButtonHandler = () => {
        if (total > 0) {
            setTotal((total -= 1));
        }
    };

    const onPlusButtonHandler = () => {
        if (total < 3) {
            setTotal((total += 1));
        } else {
            setOpen(true);
        }
    };

    const onCloseModalHandler = () => {
        setOpen(false);
    };

    return (
        <Authenticated auth={auth}>
            <Head title={`Select Ticket for ${event.title}`} />
            <BookingProgress item={event} isActive="step-1" />
            <WarningModal isOpen={open} onCloseModal={onCloseModalHandler} />
            <div className="my-sm-4 my-2">
                <BackButton item={event} />
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-7">
                            <EventHighlight item={event} />
                            <SelectNumberTicket
                                item={event}
                                onPlus={onPlusButtonHandler}
                                onMinus={onMinusButtonHandler}
                                count={total}
                                price={price_format}
                            />
                        </div>
                        <div className="col-lg-4">
                            <PriceCalcultaion
                                item={event}
                                count={total}
                                price={price_format}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
