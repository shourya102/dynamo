import React from 'react'
import './Table.css'
import { PiBracketsAngle } from "react-icons/pi";
import { Link , useLocation } from 'react-router-dom';
import CodeEditor from '../ProblemStructure/CodeEditor';


export default function Table(props) {



    const listToSend = ['Item 1', 'Item 2', 'Item 3'];


  return (
    <table className=' text-skin-base'>
            <tr className={`border-b-2 border-var(--border-color-2)`}>
                <td>Status</td>
                <td>Title</td>
                <td className='flex flex-row gap-3'>Acceptance <span className='flex justify-center items-center'> <PiBracketsAngle style = {{transform: 'rotate(90deg)' }} /></span></td>
                <td>Dificulty</td>
                <td>Solution</td>
                <td>Topic</td>
            </tr>
            {
                props.Problems.map((question , index )=>{
                return(
                    <tr>
                    <td key={index}>{index+1}</td>
                    <td >  <Link to='/code-editor' state={question} >{question.queHeading}</Link> </td>
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
