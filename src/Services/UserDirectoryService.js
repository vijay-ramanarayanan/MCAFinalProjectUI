export default class UserService {

    async login(user)  {
        const options = {
            method: 'post',
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(user)
          };
        
        let response = await fetch('http://localhost:8080/login', options);
        response = await response.json();
        return response 
    }

    async register(user) {
        const options = {
            method: 'post',
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(user)
          };

          let response = await fetch('http://localhost:8080/register', options);
          response = await response.json();
          return response 
    }

    async fetchUserFunds(email) {
      const options = {
        method: 'post',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({email})
      };

      let response = await fetch('http://localhost:8080/myMutualFunds', options);
      response = await response.json();
      return response 
    }

}