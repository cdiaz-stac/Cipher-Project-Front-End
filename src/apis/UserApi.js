const URI = "http://localhost:8080/api/";

const UserApi = {
  createUser: (user, setUserName, setUserPassword) => {
    //would need to set up tokens in the headers for this to work
    fetch(URI + "user/signup", {
      //request itself
      method: "POST",
      headers: { "Content-Type": "application/json" }, // pass token in header
      body: JSON.stringify(user), //convert object to JSON string
    })
      .then((result) => result.json())
      .then((data) => {
        console.log("USER CREATED:");
        console.log(data); // data -> product created

      })
      .catch((error) => {
        console.log(error);
      });
  },
  authUser: (user, authUser, authPassword) => {
    // pass bearerToken in every authentication required api call "BearerToken" 'Authorization': `Bearer ${bearerToken}`
    const bearerToken = this.getToken();

    fetch(URI + "authenticate", {
      //request itself
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        
      }, // pass token in header

      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("JWT CREATED:");
        console.log(data); // data -> jwt created
        const {token} = data.jwt
        localStorage.setItem('token', token);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getToken() {
    return localStorage.getItem('token');
  },
};
