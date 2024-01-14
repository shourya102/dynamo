import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import Table from '../Table/Table.jsx'
// import ProblemDescriptio from '../components/ProblemStructure/ProblemDescription/ProblemDescriptio.jsx';
// import Problems from '../components/ProblemStructure/Problem.jsx'

const Problem = (props) => {
    const [Question, setQuestion] = useState([]);

    useEffect(() => {
        console.log("data get");
        getQuestion();
    }, [])

    const getQuestion = async () => {
        const result = await Axios.get('http://localhost:8080/getques');
        // console.log(result.data);
        setQuestion(result.data);

    }

    const getArrayQuestion = async () => {
        const result = await Axios.get('http://localhost:8080/array');
        // console.log(result.data);
        setQuestion(result.data);

    }

    const getStringQuestion = async () => {
        const result = await Axios.get('http://localhost:8080/string');
        // console.log(result.data);
        setQuestion(result.data);

    }
    return (
        <div>
            <Table Problems={Question}/>
            {/* <ProblemDescriptio/> */}
            {/* <Problems/> */}
        </div>
    );
}

export default Problem;