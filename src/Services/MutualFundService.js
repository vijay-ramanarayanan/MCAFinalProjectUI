export default class MutualFundService {
    fetchMutualFundData(bank) {
        bank = bank.replace(' ', '_');
        return fetch( "http://localhost:8080/mutual-funds/" + bank).then(res =>{
            return res.json();
        });
    }

    async addAmountToFund(fund) {
        const options = {
            method: 'post',
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(fund)
          };

          let response = await fetch('http://localhost:8080/add-fund', options);
          response = await response.json();
          return response 
    }
}