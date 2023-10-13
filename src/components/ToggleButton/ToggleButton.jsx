import React, {useState} from 'react';
import './ToggleButton.css';

const ToggleButton = (props) => {
    const [pos, setPos] = useState('');
    const handleClick = () => {
        setPos(prevState => {
            if (prevState === '') return 'translate-x-8';
            else return '';
        });
    }

    return (
        <div
            className={`ToggleButton w-20 h-14 bg-skin-fill-1 flex rounded-3xl items-center gap-2 p-1 shadow-sm ${props.className}`}>
            <button
                className={`fix flex rounded-full bg-skin-fill-2 ${pos} transition-transform ease-in delay-100`}
                onClick={() => {
                    handleClick();
                    props.click();
                }}>
            </button>
        </div>
    );
}

export default ToggleButton;