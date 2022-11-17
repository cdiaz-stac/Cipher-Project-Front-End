const URI = "http://localhost:8080/api/cyphers/"


const CypherApi = {

    getCyphers: (setCyphers) => {

        // fetch( URI ) => retrieving the data
        fetch( URI + "all")
            .then( (result) => {        // go here if successful (200 response)
                
                console.log("RESULT:")
                console.log(result)

                return result.json(); 
            } )
            .then( (data) => {    // data => result.json() returned from previously

                console.log("DATA:")
                console.log(data)
               
                setCyphers(data)
            } )
            .catch( (error) => { console.log(error) } ) // if fails go here (400/500 response)

    },
    getOneCypher: (setOneCypher) => {
        // fetch( URI ) => retrieving the data
        fetch( URI + `${2}` )
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
                setOneCypher(data)
            } )
            .catch( (error) => { console.log(error) } ) // if fails go here (400/500 response)

    }



}

export default CypherApi;