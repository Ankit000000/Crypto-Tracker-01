
 // API fetch function for getting the current dollar exchange data

var myHeaders = new Headers();
myHeaders.append("apikey", "PzafMwBIDeT9gKZ5ZIvbw50Teq1662rG");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch(`https://api.apilayer.com/fixer/convert?to=INR&from=USD&amount=1`, requestOptions).then((data)=>{
    // console.log(data);
    return data.json(); 
}).then((requestOptions)=>{
    console.log(requestOptions);
    document.getElementById("r1").innerHTML=requestOptions?.date;
    document.getElementById("r6").innerHTML=requestOptions?.info?.rate;
});

