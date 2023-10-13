import React, {useState} from 'react';

const ToggleButton = (props) => {
    const [pos, setPos] = useState('justify-start');
    const handleClick = () => {
            setPos(prevState => {
                if(prevState === 'justify-start') return 'justify-end';
                else return 'justify-start';
            });
    }
    console.log(pos);
    return (
        <div className={`w-20 h-14 bg-white flex rounded-3xl ${pos} items-center gap-2 p-1 transition-transform`}>
            <button className={`flex rounded-full h-10 w-10 bg-gray-600`} onClick={handleClick}></button>
        </div>
    );
}

export default ToggleButton;