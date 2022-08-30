import React from "react";

export default function WarningModal({ isOpen, onCloseModal }) {
    return (
        <div
            className={`modal fade ${isOpen ? "show" : ""}`}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden={`${isOpen ? "false" : "true"}`}
            role="dialog"
            aria-modal={`${isOpen ? "true" : ""}`}
            id="warning-modal"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h6 className="modal-title" id="exampleModalLabel">
                            Maximum purchase of tickets is only 3 tickets per 1
                            transaction
                        </h6>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onCloseModal}
                        ></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
