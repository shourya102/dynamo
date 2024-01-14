import React from 'react'
import './Table.css'
import {PiBracketsAngle} from "react-icons/pi";
import {Link} from 'react-router-dom';


export default function Table(props) {
    return (
        <table className='text-skin-base'>
            <tr className={`border-b-2 border-var(--border-color-2)`}>
                <th>Status</th>
                <th>Title</th>
                <th className='flex flex-row gap-3'>Acceptance <span
                    className='flex justify-center items-center'> <PiBracketsAngle
                    style={{transform: 'rotate(90deg)'}}/></span></th>
                <th>Difficulty</th>
                <th>Solution</th>
                <th>Topic</th>
            </tr>
            {
                props.Problems.map((question, index) => {
                    return (
                        <tr>
                            <td key={index}>{index + 1}</td>
                            <td><Link to='/code-editor' state={question}>{question.queHeading}</Link></td>
                            <td>{question.ac}</td>
                            <td>{question.dificulty}</td>
                            <td>{question.solved}</td>
                            <td>{question.topic}</td>
                        </tr>
                    )
                })
            }
        </table>
    )
}
