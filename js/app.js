console.log("TheSportsDB başladı");

async function maclariGetir(){

try{

const cevap = await fetch(
"https://www.thesportsdb.com/api/v1/json/123/eventsnextleague.php?id=4339"
);

const veri = await cevap.json();

console.log(veri);

}

catch(hata){

console.log("Hata:", hata);

}

}

maclariGetir();
