const URI = "http://localhost:8080/api/";

const UserApi = {
  createUser: (user) => {
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
        localStorage.setItem('id',data.id)
      })
      .catch((error) => {
        console.log(error);
      });
  },
  authUser: (user) => {
    // pass bearerToken in every authentication required api call "BearerToken" 'Authorization': `Bearer ${bearerToken}`

    fetch(URI + "authenticate", {
      //request itself
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        
      }, // pass token in header

      body: JSON.stringify(user),
    })
      .then((result) => result.json())
      .then((data) => {
        console.log("JWT CREATED:");
        console.log(data); // data -> jwt created
        localStorage.setItem('token', data.jwt);
        localStorage.setItem('username',user.username)
        console.log(UserApi.getUser())
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getToken() {
    return localStorage.getItem('token');
  },
  getUser() {
    return localStorage.getItem('username');
  },
  getId(){
    return localStorage.getItem('id');
  }
};

export default UserApi;