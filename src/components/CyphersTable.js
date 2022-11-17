import React, { useEffect, useState } from 'react';
import CypherApi from '../apis/CypherApi';


const CyphersTable = () => {

    // hold empty array for the products that need to be loaded on the page,
    // will call an API to load the data into products in the useEffect hook
    const[ cyphers, setCyphers] =  useState([])

    // useEffect( function, [] ) => function gets executed when component gets mounted
    useEffect( () => {
        console.log("Hello, this component was mounted!")

        CypherApi.getCyphers(setCyphers)

    }, [] )

    const tableData = cyphers.map( p => 
        <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.question}</td>
            <td>{p.difficulty}</td>
            <td>
                <button className='btn btn-danger'>
                    Attempt
                </button>
            </td>
        </tr> )

        return (
            <div>
    
                <h2>Product List</h2>
    
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

export default CyphersTable;