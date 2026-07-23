const API_KEY = "123";


async function maclariGetir(){

try{

const cevap = await fetch(
"https://www.thesportsdb.com/api/v1/json/123/eventsnextleague.php?id=4339"
);

const veri = await cevap.json();


let alan = document.querySelector("#maclar");


if(veri.events){

let mac = veri.events[0];


alan.innerHTML = `

<h2>
🔥 Yaklaşan Maç
</h2>


<div class="teams">


<div class="team">
<h3>
${mac.strHomeTeam}
</h3>

<img src="${mac.strHomeTeamBadge}" width="60">

</div>



<div class="score">

<p>
${mac.strLeague}
</p>

<h1>
${mac.strTime.slice(0,5)}
</h1>

<span>
${mac.dateEvent}
</span>

</div>



<div class="team">

<h3>
${mac.strAwayTeam}
</h3>

<img src="${mac.strAwayTeamBadge}" width="60">

</div>


</div>


`;

}


}

catch(hata){

console.log("Hata:", hata);

}


}


maclariGetir();const API_KEY = "123";


async function maclariGetir(){

try{

const cevap = await fetch(
"https://www.thesportsdb.com/api/v1/json/123/eventsnextleague.php?id=4339"
);

const veri = await cevap.json();


let alan = document.querySelector("#maclar");


if(veri.events){

let mac = veri.events[0];


alan.innerHTML = `

<h2>
🔥 Yaklaşan Maç
</h2>


<div class="teams">


<div class="team">
<h3>
${mac.strHomeTeam}
</h3>

<img src="${mac.strHomeTeamBadge}" width="60">

</div>



<div class="score">

<p>
${mac.strLeague}
</p>

<h1>
${mac.strTime.slice(0,5)}
</h1>

<span>
${mac.dateEvent}
</span>

</div>



<div class="team">

<h3>
${mac.strAwayTeam}
</h3>

<img src="${mac.strAwayTeamBadge}" width="60">

</div>


</div>


`;

}


}

catch(hata){

console.log("Hata:", hata);

}


}


maclariGetir();const API_KEY = "123";


async function maclariGetir(){

try{

const cevap = await fetch(
"https://www.thesportsdb.com/api/v1/json/123/eventsnextleague.php?id=4339"
);

const veri = await cevap.json();


let alan = document.querySelector("#maclar");


if(veri.events){

let mac = veri.events[0];


alan.innerHTML = `

<h2>
🔥 Yaklaşan Maç
</h2>


<div class="teams">


<div class="team">
<h3>
${mac.strHomeTeam}
</h3>

<img src="${mac.strHomeTeamBadge}" width="60">

</div>



<div class="score">

<p>
${mac.strLeague}
</p>

<h1>
${mac.strTime.slice(0,5)}
</h1>

<span>
${mac.dateEvent}
</span>

</div>



<div class="team">

<h3>
${mac.strAwayTeam}
</h3>

<img src="${mac.strAwayTeamBadge}" width="60">

</div>


</div>


`;

}


}

catch(hata){

console.log("Hata:", hata);

}


}


maclariGetir();const API_KEY = "123";


async function maclariGetir(){

try{

const cevap = await fetch(
"https://www.thesportsdb.com/api/v1/json/123/eventsnextleague.php?id=4339"
);

const veri = await cevap.json();


let alan = document.querySelector("#maclar");


if(veri.events){

let mac = veri.events[0];


alan.innerHTML = `

<h2>
🔥 Yaklaşan Maç
</h2>


<div class="teams">


<div class="team">
<h3>
${mac.strHomeTeam}
</h3>

<img src="${mac.strHomeTeamBadge}" width="60">

</div>



<div class="score">

<p>
${mac.strLeague}
</p>

<h1>
${mac.strTime.slice(0,5)}
</h1>

<span>
${mac.dateEvent}
</span>

</div>



<div class="team">

<h3>
${mac.strAwayTeam}
</h3>

<img src="${mac.strAwayTeamBadge}" width="60">

</div>


</div>


`;

}


}

catch(hata){

console.log("Hata:", hata);

}


}


maclariGetir();const API_KEY = "123";


async function maclariGetir(){

try{

const cevap = await fetch(
"https://www.thesportsdb.com/api/v1/json/123/eventsnextleague.php?id=4339"
);

const veri = await cevap.json();


let alan = document.querySelector("#maclar");


if(veri.events){

let mac = veri.events[0];


alan.innerHTML = `

<h2>
🔥 Yaklaşan Maç
</h2>


<div class="teams">


<div class="team">
<h3>
${mac.strHomeTeam}
</h3>

<img src="${mac.strHomeTeamBadge}" width="60">

</div>



<div class="score">

<p>
${mac.strLeague}
</p>

<h1>
${mac.strTime.slice(0,5)}
</h1>

<span>
${mac.dateEvent}
</span>

</div>



<div class="team">

<h3>
${mac.strAwayTeam}
</h3>

<img src="${mac.strAwayTeamBadge}" width="60">

</div>


</div>


`;

}


}

catch(hata){

console.log("Hata:", hata);

}


}


maclariGetir();
