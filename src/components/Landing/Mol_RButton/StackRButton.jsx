import React, { useState } from 'react';
import RButton from './RButton';

export default function StackRButton() {
    const [selectedOption, setSelectedOption] = useState('01/ история');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const options = [
        { value: '01/ история', label: '01/ история' },
        { value: '02/ мифология', label: '02/ мифология' },
        { value: '03/ искусство', label: '03/ искусство' },
        { value: '04/ поп-культура', label: '04/ поп-культура' },
        { value: '05/ язык', label: '05/ язык' },
    ];

    return (
        <div className='RButton-stack'>
            {options.map((option) => (
                <RButton
                    key={option.value}
                    label={option.label}
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={handleOptionChange}
                />
            ))}
        </div>
    );
}