import React, { useEffect, useRef } from "react";

export default function Input({
    type = "text",
    name,
    value,
    className,
    placeholder,
    autoComplete,
    required,
    isFocused,
    handleChange,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            type={type}
            name={name}
            value={value}
            className={className}
            placeholder={placeholder}
            ref={input}
            autoComplete={autoComplete}
            required={required}
            onChange={handleChange}
        />
    );
}
