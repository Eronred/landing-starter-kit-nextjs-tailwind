import React from 'react';

interface SwitchProps {
    isToggled: boolean;
    setToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

const Switch = (
    { isToggled, setToggled }: SwitchProps
) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToggled(event.target.checked);
    };

    return (
        <label className="inline-flex items-center cursor-pointer ">
            <input type="checkbox" checked={isToggled} onChange={handleChange} className="sr-only peer" />
            <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all  peer-checked:bg-[#7C5CFC]"></div>
        </label>
    );
};

export default Switch;