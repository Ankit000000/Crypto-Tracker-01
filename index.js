
 // API fetch function for getting the current dollar exchange data


const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1&sparkline=false';
const anotherUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=1&page=1&sparkline=false';
fetch(url, {
  method: 'get'
}).then(function (response) {
  response.json().then(function (data) {
    console.log("This is the price of 1 BTC in Dollars");
    console.log(JSON.stringify(data).slice(148, 153));
    fetch(anotherUrl).then(function (response) {
      response.json().then(function (data2) {
        console.log('This is the price of 1 BTC in Rupees');
        console.log(JSON.stringify(data2).slice(148, 155));
        document.getElementById('r6').innerHTML= JSON.stringify(data2).slice(148, 155) / JSON.stringify(data).slice(148, 153);  
      });
    }).catch(function () {
      console.log('Booo');
    });
  });
})
.catch(function (error) {
  console.log('Request failed', error);
});