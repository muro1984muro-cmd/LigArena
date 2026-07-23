console.log("LigArena başladı");

function maclariGetir(){

let alan = document.querySelector("#maclar");

alan.innerHTML = `

<h2>
🔴 CANLI MAÇ
</h2>


<div class="teams">


<div class="team">

<img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Be%C5%9Fikta%C5%9F_JK_logo.svg/1200px-Be%C5%9Fikta%C5%9F_JK_logo.svg.png" width="80">

<h3>
Beşiktaş
</h3>

</div>



<div class="score">

<p>
UEFA Avrupa Ligi 2. Ön Eleme
</p>

<h1>
0 - 0
</h1>

<span id="dakika">
1'
</span>

</div>



<div class="team">

<img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/39/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png" width="80">

<h3>
Midtjylland
</h3>

</div>


</div>

`;


// TEST DAKİKA SAYACI

let dakika = 1;

setInterval(()=>{

dakika++;

document.getElementById("dakika").innerHTML = dakika + "'";

},60000);


}


maclariGetir();
