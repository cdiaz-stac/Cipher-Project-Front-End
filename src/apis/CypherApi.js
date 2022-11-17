const URI = "http://localhost:8080/cyphers/all"

const CypherApi = {

    getCyphers: (setCyphers) => {

        // fetch( URI ) => retrieving the data
        fetch( URI )
            .then( (result) => {        // go here if successful (200 response)
                
                console.log("RESULT:")
                console.log(result)

                return result.json(); 
            } )
            .then( (data) => {    // data => result.json() returned from previously

                console.log("DATA:")
                console.log(data)
                // call the setProducts function from our state and put in the data from
                // our API call
                setCyphers(data)
            } )
            .catch( (error) => { console.log(error) } ) // if fails go here (400/500 response)

    }



}

export default CypherApi;