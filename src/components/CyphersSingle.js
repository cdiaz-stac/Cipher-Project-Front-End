import React, { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import CypherApi from '../apis/CypherApi';

const CyphersSingle = () => {

    // hold empty array for the products that need to be loaded on the page,
    // will call an API to load the data into products in the useEffect hook
    const[ cypher, setOneCypher] =  useState([])
    // useEffect( function, [] ) => function gets executed when component gets mounted
    useEffect( () => {
        console.log("Hello, this component was mounted!")

        CypherApi.getOneCypher(setOneCypher)

    }, [] )

    


    const tableData = (
        <tr key={cypher.id}>
            <td>{cypher.id}</td>
            <td>{cypher.question}</td>
            <td>{cypher.difficulty}</td>
        </tr> )

        return (
            <div>
    
                <h2></h2>
    
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Question</th>
                            <th>Difficulty</th>
                            <th></th>
                        </tr>
                    </thead>
    
                    <tbody>
                        { tableData }
                    </tbody>
    
                </table>
                
            </div>
        );
    };



export default CyphersSingle;







