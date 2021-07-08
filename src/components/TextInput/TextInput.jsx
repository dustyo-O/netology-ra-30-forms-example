import { useState } from "react";

export function TextInput({ onChange }) {
    const [value, setValue] = useState('');

    const onInput = (e) => {
        const val = e.target.value;

        onChange(val);
        setValue(val);
    }

    return (
        <input onChange={onInput} value={value}/>
    );
}
