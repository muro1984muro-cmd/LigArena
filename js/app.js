const API_KEY = "123";

const LIG = "Turkish Super Lig";


async function maclariGetir(){

try{

const cevap = await fetch(
`https://www.thesportsdb.com/api/v1/json/${API_KEY}/eventsnextleague.php?id=4339`
);


const veri = await cevap.json();


console.log(veri);


let alan = document.querySelector("#maclar");


let html = "";


if(veri.events){

veri.events.slice(0,5).forEach(mac=>{


html += `

<div class="featured-match">

<h2>⚽ ${mac.strHomeTeam} - ${mac.strAwayTeam}</h2>

<div class="score">

<h1>
${mac.dateEvent}
</h1>

<p>
${mac.strTime || ""}
</p>

</div>

</div>

`;

});


alan.innerHTML += html;


}else{


alan.innerHTML += `
<p>Maç bulunamadı.</p>
`;

}


}

catch(hata){

console.log("Hata:",hata);

}


}


maclariGetir();
