console.log("LigArena başladı");


async function maclariGetir(){

let alan = document.querySelector("#maclar");


alan.innerHTML = `

<h2>
🔴 CANLI MAÇ
</h2>


<div class="teams">


<div class="team">

<img src="https://r2.thesportsdb.com/images/media/team/badge/svo05k1776827439.png" width="80">

<h3>
Beşiktaş
</h3>

</div>



<div class="score">

<p>
UEFA Avrupa Ligi 2. Ön Eleme
</p>

<h1>
21:00
</h1>

<span>
Bugün
</span>

</div>



<div class="team">

<img src="https://r2.thesportsdb.com/images/media/team/badge/7fb0ub1626445710.png" width="80">

<h3>
Midtjylland
</h3>

</div>


</div>

`;

}


maclariGetir();
