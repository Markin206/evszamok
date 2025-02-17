//----------------------------------------------------------------------------------------- array
const evszamokArray = [//létrehozzuk a tömböt
    {
        idoszak: "Időszak",//megadjuk az időszak tulajdonságot és tartalmát feltöltjük egy string értékel
        evszam: "Évszám",//megadjuk az evszam tulajdonságot és tartalmát feltöltjük egy string értékel
        esemeny: "Esemény",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékel
        tananyag: "Tananyag"//megadjuk az tananyag tulajdonságot és tartalmát feltöltjük egy string értékel
    },
    {
        idoszak: "XVI.",//megadjuk az időszak tulajdonságot és tartalmát feltöltjük egy string értékel
        evszam: "1514",//megadjuk az evszam tulajdonságot és tartalmát feltöltjük egy string értékel
        esemeny: "Dózsa-féle parasztháború",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékel
        tananyag: "Magyar"//megadjuk az tananyag tulajdonságot és tartalmát feltöltjük egy string értékel
    },
    {
        evszam: "1519-1522",//megadjuk az evszam tulajdonságot és tartalmát feltöltjük egy string értékel
        esemeny: "Magellán körülhajózza a földet",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékel
        tananyag: "Egyetemes"//megadjuk az tananyag tulajdonságot és tartalmát feltöltjük egy string értékel
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
        tananyag: "Egyetemes"//megadjuk az tananyag tulajdonságot és tartalmát feltöltjük egy string értékel
    },
    {
        evszam: "1703-1711",
        esemeny: "Rákóczi szabadságharc",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékel
        tananyag: "Magyar"//megadjuk az tananyag tulajdonságot és tartalmát feltöltjük egy string értékel
    },
    {
        idoszak: "XIX",//megadjuk az időszak tulajdonságot és tartalmát feltöltjük egy string értékel
        evszam: "1812",//megadjuk az evszam tulajdonságot és tartalmát feltöltjük egy string értékel
        esemeny: "Napóleon oroszországi hadjárata",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékel
        tananyag: "Egyetemes"//megadjuk az tananyag tulajdonságot és tartalmát feltöltjük egy string értékel
    },
    {
        evszam: "1809",//megadjuk az evszam tulajdonságot és tartalmát feltöltjük egy string értékel
        esemeny: "győri csata",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékel
        tananyag: "Magyar"//megadjuk az tananyag tulajdonságot és tartalmát feltöltjük egy string értékel
    },
]

//----------------------------------------------------------------------------------------- tabla lineáris

const tabla = document.createElement('table'); // Létrehozzuk a táblázatot
document.body.appendChild(tabla); // Hozzáadjuk a táblázatot a body-hoz

//----------------------------------------------------------------------------------------- header
const tablaheader = document.createElement('thead'); // Létrehozzuk a tableheadert (thead)
tabla.appendChild(tablaheader); // Hozzáadjuk a headert a táblázathoz

const tablaheaderRow = document.createElement('tr'); // Létrehozzuk a tablaheaderRow sort
tablaheader.appendChild(tablaheaderRow); // Hozzáadjuk a tablaheaderRow sort a theadhez

const idoszak = document.createElement('th'); // Létrehozzuk az "Időszak" oszlopot
idoszak.innerHTML = evszamokArray[0].idoszak; // Beállítjuk a "Időszak" szöveget a megadott változó értékére
tablaheaderRow.appendChild(idoszak); // Hozzáadjuk a tablaheaderRow sorhoz

const evszam = document.createElement('th'); // Létrehozzuk az "Évszám" oszlopot
evszam.innerHTML = evszamokArray[0].evszam; // Beállítjuk az "Évszám" szöveget a megadott változó értékére
tablaheaderRow.appendChild(evszam); // Hozzáadjuk a tablaheaderRow sorhoz

const esemeny = document.createElement('th'); // Létrehozzuk az "Esemény" oszlopot
esemeny.innerHTML = evszamokArray[0].esemeny; // Beállítjuk az "Esemény" szöveget a megadott változó értékére
tablaheaderRow.appendChild(esemeny); // Hozzáadjuk a tablaheaderRow sorhoz

const tananyag = document.createElement('th'); // Létrehozzuk a "Tananyag" oszlopot
tananyag.innerHTML = evszamokArray[0].tananyag; // Beállítjuk a "Tananyag" szöveget a megadott változó értékére
tablaheaderRow.appendChild(tananyag); // Hozzáadjuk a tablaheaderRow sorhoz

//----------------------------------------------------------------------------------------- tbody
const tablaBody = document.createElement('tbody'); // Létrehozzuk a tablebodyt
tabla.appendChild(tablaBody); // Hozzáadjuk a törzset a táblázathoz

// 1. sor (XVI. század)
const row1 = document.createElement('tr'); // Létrehozzuk az 1. sort
tablaBody.appendChild(row1); // Hozzáadjuk a tablebodyhoz

const idoszak1 = document.createElement('td'); // Létrehozzuk az "Időszak" cellát
idoszak1.rowSpan = 2; // Beállítjuk a rowspan értéket 2-re
idoszak1.innerHTML = evszamokArray[1].idoszak; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row1.appendChild(idoszak1); // Hozzáadjuk a sorhoz

const ev1 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev1.innerHTML = evszamokArray[1].evszam; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row1.appendChild(ev1); // Hozzáadjuk a sorhoz

const esemeny1 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny1.innerHTML = evszamokArray[1].esemeny; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row1.appendChild(esemeny1); // Hozzáadjuk a sorhoz

const tananyag1 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag1.innerHTML =  evszamokArray[1].tananyag; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row1.appendChild(tananyag1); // Hozzáadjuk a sorhoz

// 2. sor (XVI. század, Magellán körülhajózza a földet)
const row2 = document.createElement('tr'); // Létrehozzuk a 2. sort
tablaBody.appendChild(row2); // Hozzáadjuk a tablebodyhoz

const ev2 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev2.innerHTML =  evszamokArray[2].evszam; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row2.appendChild(ev2); // Hozzáadjuk a sorhoz

const esemeny2 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny2.innerHTML =  evszamokArray[2].esemeny; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row2.appendChild(esemeny2); // Hozzáadjuk a sorhoz

const tananyag2 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag2.innerHTML = evszamokArray[2].tananyag; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row2.appendChild(tananyag2); // Hozzáadjuk a sorhoz

// 3. sor (XVII. század)
const row3 = document.createElement('tr'); // Létrehozzuk a 3. sort
tablaBody.appendChild(row3); // Hozzáadjuk a tablebodyhoz

const idoszak3 = document.createElement('td'); // Létrehozzuk az "Időszak" cellát
idoszak3.innerHTML = evszamokArray[3].idoszak; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row3.appendChild(idoszak3); // Hozzáadjuk a sorhoz

const ev3 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev3.innerHTML = evszamokArray[3].evszam; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row3.appendChild(ev3); // Hozzáadjuk a sorhoz

const esemeny3 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny3.innerHTML = evszamokArray[3].esemeny; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row3.appendChild(esemeny3); // Hozzáadjuk a sorhoz

const tananyag3 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag3.innerHTML = evszamokArray[3].tananyag; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row3.appendChild(tananyag3); // Hozzáadjuk a sorhoz

// 4. sor (XVIII. század)
const row4 = document.createElement('tr'); // Létrehozzuk a 4. sort
tablaBody.appendChild(row4); // Hozzáadjuk a tablebodyhoz

const idoszak4 = document.createElement('td'); // Létrehozzuk az "Időszak" cellát
idoszak4.rowSpan = 2;; // Beállítjuk a rowspan értéket 2-re
idoszak4.innerHTML = evszamokArray[4].idoszak; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row4.appendChild(idoszak4); // Hozzáadjuk a sorhoz

const ev4 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev4.innerHTML = evszamokArray[4].evszam; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row4.appendChild(ev4); // Hozzáadjuk a sorhoz

const esemeny4 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny4.innerHTML = evszamokArray[4].esemeny; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row4.appendChild(esemeny4); // Hozzáadjuk a sorhoz

const tananyag4 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag4.innerHTML = evszamokArray[4].tananyag; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row4.appendChild(tananyag4); // Hozzáadjuk a sorhoz

// 5. sor (XVIII. század, Rákóczi szabadságharc)
const row5 = document.createElement('tr'); // Létrehozzuk az 5. sort
tablaBody.appendChild(row5); // Hozzáadjuk a tablebodyhoz

const ev5 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev5.innerHTML = evszamokArray[5].evszam; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row5.appendChild(ev5); // Hozzáadjuk a sorhoz

const esemeny5 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny5.innerHTML = evszamokArray[5].esemeny; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row5.appendChild(esemeny5); // Hozzáadjuk a sorhoz

const tananyag5 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag5.innerHTML = evszamokArray[5].tananyag; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row5.appendChild(tananyag5); // Hozzáadjuk a sorhoz

// 6. sor (XIX. század)
const row6 = document.createElement('tr'); // Létrehozzuk a 6. sort
tablaBody.appendChild(row6); // Hozzáadjuk a tablebodyhoz

const idoszak6 = document.createElement('td'); // Létrehozzuk az "Időszak" cellát
idoszak6.rowSpan = 2;; // Beállítjuk a rowspan értéket 2-re
idoszak6.innerHTML = evszamokArray[6].idoszak; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row6.appendChild(idoszak6); // Hozzáadjuk a sorhoz

const ev6 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev6.innerHTML = evszamokArray[6].evszam; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row6.appendChild(ev6); // Hozzáadjuk a sorhoz

const esemeny6 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny6.innerHTML = evszamokArray[6].esemeny; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row6.appendChild(esemeny6); // Hozzáadjuk a sorhoz

const tananyag6 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag6.innerHTML = evszamokArray[6].tananyag; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row6.appendChild(tananyag6); // Hozzáadjuk a sorhoz

// 7. sor (XIX. század, győri csata)
const row7 = document.createElement('tr'); // Létrehozzuk a 7. sort
tablaBody.appendChild(row7); // Hozzáadjuk a tablebodyhoz

const ev7 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev7.innerHTML = evszamokArray[7].evszam; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row7.appendChild(ev7); // Hozzáadjuk a sorhoz

const esemeny7 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny7.innerHTML = evszamokArray[7].esemeny; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row7.appendChild(esemeny7); // Hozzáadjuk a sorhoz

const tananyag7 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag7.innerHTML = evszamokArray[7].tananyag; // beállítjuk a tartalmat a megadott array objektum tulajdonságára
row7.appendChild(tananyag7); // Hozzáadjuk a sorhoz
