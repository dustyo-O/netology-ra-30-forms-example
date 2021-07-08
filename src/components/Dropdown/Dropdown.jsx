import { useState } from "react";

export function Dropdown({ options, onChange }) {
    const [value, setValue] = useState(undefined);

    const onSelect = (e) => {
        const val = e.target.value;

        onChange(val);
        setValue(val);
    }

    return (
        <select className="Dropdown" value={value} onChange={onSelect}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.title}
                </option>
            ))}
        </select>
    );
}
