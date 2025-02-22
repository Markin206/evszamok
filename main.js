//----------------------------------------------------------------------------------------- array
const evszamokArray = [//létrehozzuk a tömböt

    {
        idoszak: "XVI.",//megadjuk az időszak tulajdonságot és tartalmát feltöltjük egy string értékel
        evszam: "1514",//megadjuk az evszam tulajdonságot és tartalmát feltöltjük egy string értékel
        esemeny: "Dózsa-féle parasztháború",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékel
        tananyag: "Magyar",//megadjuk az tananyag tulajdonságot és tartalmát feltöltjük egy string értékel
        evszam2: "1519-1522",//megadjuk az evszam tulajdonságot és tartalmát feltöltjük egy string értékel
        esemeny2: "Magellán körülhajózza a földet",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékel
        tananyag2: "Egyetemes"//megadjuk az tananyag tulajdonságot és tartalmát feltöltjük egy string értékel
    },
    {
        idoszak: "XVII.",//megadjuk az időszak tulajdonságot és tartalmát feltöltjük egy string értékel
        evszam: "1664",//megadjuk az evszam tulajdonságot és tartalmát feltöltjük egy string értékel
        esemeny: "vasvári béke",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékel
        tananyag: "Magyar"//megadjuk az tananyag tulajdonságot és tartalmát feltöltjük egy string értékel
    },
    {
        idoszak: "XVIII.",//megadjuk az időszak tulajdonságot és tartalmát feltöltjük egy string értékel
        evszam: "1701-1714",//megadjuk az evszam tulajdonságot és tartalmát feltöltjük egy string értékel
        esemeny: "spanyol örökösödési háború",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékel
        tananyag: "Egyetemes",//megadjuk az tananyag tulajdonságot és tartalmát feltöltjük egy string értékel
        evszam2: "1703-1711",
        esemeny2: "Rákóczi szabadságharc",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékel
        tananyag2: "Magyar"//megadjuk az tananyag tulajdonságot és tartalmát feltöltjük egy string értékel
    },
    {
        idoszak: "XIX",//megadjuk az időszak tulajdonságot és tartalmát feltöltjük egy string értékel
        evszam: "1812",//megadjuk az evszam tulajdonságot és tartalmát feltöltjük egy string értékel
        esemeny: "Napóleon oroszországi hadjárata",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékel
        tananyag: "Egyetemes",//megadjuk az tananyag tulajdonságot és tartalmát feltöltjük egy string értékel
        evszam: "1809",//megadjuk az evszam tulajdonságot és tartalmát feltöltjük egy string értékel
        esemeny: "győri csata",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékel
        tananyag: "Magyar"//megadjuk az tananyag tulajdonságot és tartalmát feltöltjük egy string értékel
    },
]

const evszamokHeaderArray = [
    {
        idoszak: "Időszak",//megadjuk az időszak tulajdonságot és tartalmát feltöltjük egy string értékel
        evszam: "Évszám",//megadjuk az evszam tulajdonságot és tartalmát feltöltjük egy string értékel
        esemeny: "Esemény",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékel
        tananyag: "Tananyag"//megadjuk az tananyag tulajdonságot és tartalmát feltöltjük egy string értékel
    }
]
//----------------------------------------------------------------------------------------- tabla lineáris

const tabla = document.createElement('table'); // Létrehozzuk a táblázatot
document.body.appendChild(tabla); // Hozzáadjuk a táblázatot a body-hoz


const tablaheader = document.createElement('thead'); // Létrehozzuk a tableheadert (thead)
tabla.appendChild(tablaheader); // Hozzáadjuk a headert a táblázathoz
const tablaBody = document.createElement('tbody'); // Létrehozzuk a tablebodyt
tabla.appendChild(tablaBody); // Hozzáadjuk a törzset a táblázathoz

for(const currentHeadElement of evszamokHeaderArray){//végig iterálunk az evszamokHeaderArray tömbön
    const row = document.createElement('tr')//létrehozunk egy sort
    tablaheader.appendChild(row)//hozzá adjuk a fejléchez

    const idoszak = document.createElement('th')//létrehozunk egy header cellát
    const evszam = document.createElement('th')//létrehozunk egy header cellát
    const esemeny = document.createElement('th')//létrehozunk egy header cellát
    const tananyag = document.createElement('th')//létrehozunk egy header cellát

    idoszak.innerHTML = currentHeadElement.idoszak//idoszak tartalmát feltöltjük
    evszam.innerHTML = currentHeadElement.evszam//evszam tartalmát feltöltjük
    esemeny.innerHTML = currentHeadElement.esemeny//esemeny tartalmát feltöltjük
    tananyag.innerHTML = currentHeadElement.tananyag//tananyag tartalmát feltöltjük

    row.appendChild(idoszak)//hozzáadjuk a sorhoz a cellát
    row.appendChild(evszam)//hozzáadjuk a sorhoz a cellát
    row.appendChild(esemeny)//hozzáadjuk a sorhoz a cellát
    row.appendChild(tananyag)//hozzáadjuk a sorhoz a cellát
}

function renderTable(){//létrehozzuk a függvényt
for (const currentElement of evszamokArray) {//végig iterálunk az objektumokon
    const row = document.createElement('tr'); // Létrehozok egy sort
    tablaBody.appendChild(row); // hozzáadom a táblázat tőrzséhez

    const idoszak = document.createElement('td');//létre hozunk egy cellát
    idoszak.innerHTML = currentElement.idoszak;//az idoszak tartalmát feltöltjük
    row.appendChild(idoszak);//hozzáadom a sor tőrzséhez
    idoszak.rowSpan = currentElement.evszam2 ? 2 : 1; // Változtasd idoszak rowspanjét 2re ha evszam2 létezik

    const evszam = document.createElement('td');//létre hozunk egy cellát
    evszam.innerHTML = currentElement.evszam;//az evszam tartalmát feltöltjük
    row.appendChild(evszam);//hozzáadom a sor tőrzséhez

    const esemeny = document.createElement('td');//létre hozunk egy cellát
    esemeny.innerHTML = currentElement.esemeny;//az esemeny tartalmát feltöltjük
    row.appendChild(esemeny);//hozzáadom a sor tőrzséhez

    const tananyag = document.createElement('td');//létre hozunk egy cellát
    tananyag.innerHTML = currentElement.tananyag;//az tananyag tartalmát feltöltjük
    row.appendChild(tananyag);//hozzáadom a sor tőrzséhez

    if (currentElement.evszam2) {//ha létezik evszam2 akkor belép
        const row2 = document.createElement('tr');//létrehozunk egy új sort evszam2, esemeny2,tananyag2
        tablaBody.appendChild(row2); // hozzadjuk a tőrzshöz a sort

        const evszam2 = document.createElement('td');//létre hozunk egy cellát
        evszam2.innerHTML = currentElement.evszam2;//feltöltjük az evszam2 tartalmát
        row2.appendChild(evszam2);//hozzáadjuk a sorhoz

        const esemeny2 = document.createElement('td');//létre hozunk egy cellát
        esemeny2.innerHTML = currentElement.esemeny2;//feltöltjük az esemeny2 tartalmát
        row2.appendChild(esemeny2);//hozzáadjuk a sorhoz
        const tananyag2 = document.createElement('td');//létre hozunk egy cellát
        tananyag2.innerHTML = currentElement.tananyag2;//feltöltjük az tananyag2 tartalmát
        row2.appendChild(tananyag2);//hozzáadjuk a sorhoz
    }
}
}
renderTable()