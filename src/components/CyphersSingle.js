import React, { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import CypherApi from '../apis/CypherApi';
import ProgressApi from '../apis/ProgressApi';
const CyphersSingle = (props) => {

    // hold empty array for the products that need to be loaded on the page,
    // will call an API to load the data into products in the useEffect hook
    const[ cypher, setOneCypher] =  useState([])
    const [answer, setAnswer] = useState([])
    const[showAlert, setShowAlert] = useState(false) 
    // useEffect( function, [] ) => function gets executed when component gets mounted
    useEffect( () => {
        console.log("Hello, this component was mounted!")
        
        CypherApi.getOneCypher(setOneCypher, props.id)
        ProgressApi.addProgress(props.id)
    }, [] )

    const handleSignIn = (event) => {

        //make post Request
        //take the product generated and find the id
        // set the id for the alert
        if(cypher.answer.equals(answer)){
            ProgressApi.getCompleted(localStorage.getItem('progId'))
            setShowAlert(true);
        }
        console.log("reached")

        event.preventDefault();

    }


    const tableData = (
        <tr key={cypher.id}>
            <td>{cypher.id}</td>
            <td>{cypher.question}</td>
            <td>{cypher.difficulty}</td>
        </tr> )

        return (
            <div>
    
                <h2>Question</h2>
    
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Question</th>
                            <th>Difficulty</th>
                            <th></th>
                        </tr>
                    </thead>
    
                    <tbody>
                        { tableData }
                    </tbody>
    
                </table>
                
                <form onSubmit={handleSignIn}>
                <div className='mb-3'>
                    <label htmlFor='prod-answer' className='form-label'>Answer:</label>
                    <input type="text" className = 'form-control' id='prod-answer'  value={answer}
                    onChange={(event) => { setAnswer(event.target.value)}}/>
                </div>
                </form>
            </div>
        );
    };



export default CyphersSingle;







