fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`).then((data)=>{
    // console.log(data);
    return data.json(); 
}).then((completedata)=>{
    // console.log(completedata[2].id);
    // document.getElementById('root').innerHTML=completedata[2].id;
    let data1="";
    completedata.map((values)=>{
        data1+=`<div class="card">
        <h1 class="title">${values.name}</h1>
        <img src="${values.image}" alt="img" class="images">
        <p class="category">Rank  ${values.market_cap_rank}</p>
        <p class="price">$ ${values.current_price}</p>
      </div>`;
    });
    document.getElementById("cards").innerHTML=data1;

}).catch((err)=>{
    console.log(err);
})

/* <p class="price">24 Hour Price change  ${values.price_change_percentage_24h} %</p> */

