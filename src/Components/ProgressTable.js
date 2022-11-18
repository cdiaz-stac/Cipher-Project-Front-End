import { useEffect, useState } from 'react';
import CypherApi from '../apis/CypherApi';
import ProgressApi from '../apis/ProgressApi';
import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";

const ProgressTable = (props) => {

    // hold empty array for the products that need to be loaded on the page,
    // will call an API to load the data into products in the useEffect hook
    const[ progress, setProgress] =  useState([])
    const[cypher, setCypher] = useState([])
    // useEffect( function, [] ) => function gets executed when component gets mounted
    useEffect( () => {
        console.log("Hello, this component was mounted!")

        ProgressApi.getCypherInProg(cypher, props.id)
        ProgressApi.getProgress(setProgress)


    }, [] )

    const tableData = progress.map( p => 
        <tr key={p.id} >
            <td>{p.id}</td>
            <td>{p.status}</td>
            <td><Link to={'/cyphers/'+ p.id}>
                {/* edit to also have capacity to addProgress via onclick="doSomething();doSomethingElse();*/}
                <button onClick={()=>{props.setId(p.id)}} className='btn btn-danger'>
                    Attempt
                </button>
                </Link>
            </td>
        </tr> )
   
        return (
            <div>
    
                <h2>Progress</h2>
    
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Status</th>
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

export default ProgressTable;