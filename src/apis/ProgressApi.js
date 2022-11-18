import UserApi from "./UserApi"
const URI = "http://localhost:8080/api/progress/"


const ProgressApi = {

    getProgress: (setProgress) => {

        // fetch( URI ) => retrieving the data
        fetch( URI + "user")
            .then( (result) => {        // go here if successful (200 response)
                
                console.log("RESULT:")
                console.log(result)

                return result.json(); 
            } )
            .then( (data) => {    // data => result.json() returned from previously

                console.log("DATA:")
                console.log(data)
               
                setProgress(data)
            } )
            .catch( (error) => { console.log(error) } ) // if fails go here (400/500 response)

    },

    addProgress: (id) => {

        const bearerToken = UserApi.getToken()
        fetch(URI +"add/"+ `${id}`, {
            //request itself
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${bearerToken}`
            }, // pass token in header
      
          })
            .then((result) => result.json())
            .then((data) => {
              console.log("PROGRESS CREATED:");
              console.log(data); // data -> progress created
            })
            .catch((error) => {
              console.log(error);
            });

    }
}

export default ProgressApi;