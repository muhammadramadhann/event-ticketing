import React from "react";

export default function Checkbox({ id, name, value, handleChange }) {
    return (
        <input
            type="checkbox"
            id={id}
            name={name}
            value={value}
            className="form-check-input"
            onChange={(e) => handleChange(e)}
        />
    );
}
