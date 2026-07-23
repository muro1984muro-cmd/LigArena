const API_KEY = "e639d1554da4579b85e63e33c3db94f1";

const API_URL = "https://v3.football.api-sports.io/fixtures?live=all&league=203";


async function canliMaclariGetir() {

    try {

        const cevap = await fetch(API_URL, {
            headers: {
                "x-apisports-key": API_KEY
            }
        });


        const veri = await cevap.json();


        console.log(veri);


        if(veri.response.length === 0){

            document.querySelector("#maclar").innerHTML += `
            <p>Şu anda canlı Süper Lig maçı yok.</p>
            `;

            return;

        }


        let maclar = "";


        veri.response.forEach(mac => {


            maclar += `

            <div class="featured-match">

            <h2>🔴 CANLI</h2>

            <div class="teams">

            <div class="team">
            <h3>${mac.teams.home.name}</h3>
            </div>


            <div class="score">

            <h1>
            ${mac.goals.home} - ${mac.goals.away}
            </h1>

            <span>
            ${mac.fixture.status.elapsed}' 
            </span>

            </div>


            <div class="team">
            <h3>${mac.teams.away.name}</h3>
            </div>


            </div>

            </div>

            `;


        });


        document.querySelector("#maclar").innerHTML += maclar;


    }


    catch(hata){

        console.log("API Hatası:", hata);

    }


}


canliMaclariGetir();
