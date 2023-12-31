import React, {useState} from 'react';

const Problems = (props) => {

    const filters = useState([null, null, null]);

    return (
        <div className="flex justify-center">
            <div className="">
                <div className="flex">

                </div>
                <div className="flex space-x-1.5">
                    <select name='bbb' >
                        <option>abc</option>
                        <option>bca</option>
                    </select>
                    <select name='bbb'>
                        <option>abc</option>
                        <option>bca</option>
                    </select>
                    <select name='bbb'>
                        <option>abc</option>
                        <option>bca</option>
                    </select>
                </div>
                <div>
                    <table>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default Problems;