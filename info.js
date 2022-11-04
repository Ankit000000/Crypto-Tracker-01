fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`).then((data) => {
    // console.log(data);
    return data.json();
}).then((completedata) => {
    // console.log(completedata[2].id);
    // document.getElementById('root').innerHTML=completedata[2].id;
    let data1 = "";
    completedata.map((values) => {
        data1 += `<div class="elements_of_table">

        <div class="table_elements"><p id="rank">${values.market_cap_rank}</p></div>
        <div class="table_elements"><p>${values.name}</p></div>
        <div class="table_elements" class="images"><img src="${values.image}" alt="img" class="images"></div>
        <div class="table_elements"><p>$ ${values.current_price}</p></div>
        <div class="table_elements"><p>${values.market_cap}</p></div>
        <div class="table_elements"><p>${values.total_volume}</p></div>
        <div class="table_elements"><p>${values.price_change_24h}</p></div>
        <div class="table_elements"><p>${values.price_change_percentage_24h}</p></div>                   
        <div class="table_elements"><p>${values.market_cap_change_24h}</p></div>
        <div class="table_elements"><p>${values.circulating_supply}</p></div>
        <div class="table_elements"><p>${values.total_supply}</p></div>
        <div class="table_elements"><p>${values.max_supply}</p></div>
        <div class="table_elements"><p>${values.ath}</p></div>
        <div class="table_elements"><p>${values.ath_date}</p></div>
        <div class="table_elements"><p>${values.atl}</p></div>
        <div class="table_elements"><p>${values.atl_date}</p></div>
        <div class="table_elements"><p>${values.last_updated}</p></div>
      </div>`;
    });
    document.getElementById("cards").innerHTML = data1;

}).catch((err) => {
    console.log(err);
})