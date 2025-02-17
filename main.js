//----------------------------------------------------------------------------------------- array
const evszamokArray = //létrehozzuk az objektumot
    {
        idoszak: "Időszak",//megadjuk az idoszak tulajdonságot és tartalmát feltöltjük egy string értékell
        evszam: "Évszám",//megadjuk az evszam tulajdonságot és tartalmát feltöltjük egy string értékell
        esemeny: "Esemény",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékell
        tananyag: "Tananyag"//megadjuk az esemeny tananyag és tartalmát feltöltjük egy string értékell
    }
const evszamok1Array={//létrehozzuk az objektumot
    
        idoszak: "XVI.",//megadjuk az idoszak tulajdonságot és tartalmát feltöltjük egy string értékell
        evszam: "1514",//megadjuk az evszam tulajdonságot és tartalmát feltöltjük egy string értékell
        esemeny: "Dózsa-féle parasztháború",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékell
        tananyag: "Magyar"//megadjuk az esemeny tananyag és tartalmát feltöltjük egy string értékell
    }
    const evszamok2Array={//létrehozzuk az objektumot
        //idoszak2: "",
        evszam: "1519-1522",//megadjuk az evszam tulajdonságot és tartalmát feltöltjük egy string értékell
        esemeny: "Magellán körülhajózza a földet",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékell
        tananyag: "Egyetemes"//megadjuk az esemeny tananyag és tartalmát feltöltjük egy string értékell
    }
    const evszamok3Array={//létrehozzuk az objektumot
        idoszak: "XVII.",//megadjuk az idoszak tulajdonságot és tartalmát feltöltjük egy string értékell
        evszam: "1664",//megadjuk az evszam tulajdonságot és tartalmát feltöltjük egy string értékell
        esemeny: "vasvári béke",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékell
        tananyag: "Magyar"//megadjuk az esemeny tananyag és tartalmát feltöltjük egy string értékell
    }
    const evszamok4Array={//létrehozzuk az objektumot
        idoszak: "XVIII.",//megadjuk az idoszak tulajdonságot és tartalmát feltöltjük egy string értékell
        evszam: "1701-1714",//megadjuk az evszam tulajdonságot és tartalmát feltöltjük egy string értékell
        esemeny: "spanyol örökösödési háború",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékell
        tananyag: "Egyetemes"//megadjuk az esemeny tananyag és tartalmát feltöltjük egy string értékell
    }
    const evszamok5Array={//létrehozzuk az objektumot
        //idoszak5: "",
        evszam: "1703-1711",//megadjuk az evszam tulajdonságot és tartalmát feltöltjük egy string értékell
        esemeny: "Rákóczi szabadságharc",
        tananyag: "Magyar"//megadjuk az esemeny tananyag és tartalmát feltöltjük egy string értékell
    }
    const evszamok6Array={//létrehozzuk az objektumot
        idoszak: "XIX",//megadjuk az idoszak tulajdonságot és tartalmát feltöltjük egy string értékell
        evszam: "1812",//megadjuk az evszam tulajdonságot és tartalmát feltöltjük egy string értékell
        esemeny: "Napóleon oroszországi hadjárata",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékell
        tananyag: "Egyetemes"//megadjuk az esemeny tananyag és tartalmát feltöltjük egy string értékell
    }
    const evszamok7Array={//létrehozzuk az objektumot
        //idoszak7: "",
        evszam: "1809",//megadjuk az evszam tulajdonságot és tartalmát feltöltjük egy string értékell
        esemeny: "győri csata",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékell
        tananyag: "Magyar"//megadjuk az esemeny tananyag és tartalmát feltöltjük egy string értékell
    }


//----------------------------------------------------------------------------------------- tabla lineáris

const tabla = document.createElement('table'); // Létrehozzuk a táblázatot
document.body.appendChild(tabla); // Hozzáadjuk a táblázatot a body-hoz

//----------------------------------------------------------------------------------------- header
const tablaheader = document.createElement('thead'); // Létrehozzuk a tableheadert (thead)
tabla.appendChild(tablaheader); // Hozzáadjuk a headert a táblázathoz

const tablaheaderRow = document.createElement('tr'); // Létrehozzuk a tablaheaderRow sort
tablaheader.appendChild(tablaheaderRow); // Hozzáadjuk a tablaheaderRow sort a theadhez

const idoszak = document.createElement('th'); // Létrehozzuk az "Időszak" oszlopot
idoszak.innerHTML = evszamokArray.idoszak; // Beállítjuk a "Időszak" szöveget a megadott változó értékére
tablaheaderRow.appendChild(idoszak); // Hozzáadjuk a tablaheaderRow sorhoz

const evszam = document.createElement('th'); // Létrehozzuk az "Évszám" oszlopot
evszam.innerHTML = evszamokArray.evszam; // Beállítjuk az "Évszám" szöveget a megadott változó értékére
tablaheaderRow.appendChild(evszam); // Hozzáadjuk a tablaheaderRow sorhoz

const esemeny = document.createElement('th'); // Létrehozzuk az "Esemény" oszlopot
esemeny.innerHTML = evszamokArray.esemeny; // Beállítjuk az "Esemény" szöveget a megadott változó értékére
tablaheaderRow.appendChild(esemeny); // Hozzáadjuk a tablaheaderRow sorhoz

const tananyag = document.createElement('th'); // Létrehozzuk a "Tananyag" oszlopot
tananyag.innerHTML = evszamokArray.tananyag; // Beállítjuk a "Tananyag" szöveget a megadott változó értékére
tablaheaderRow.appendChild(tananyag); // Hozzáadjuk a tablaheaderRow sorhoz

//----------------------------------------------------------------------------------------- tbody
const tablaBody = document.createElement('tbody'); // Létrehozzuk a tablebodyt
tabla.appendChild(tablaBody); // Hozzáadjuk a törzset a táblázathoz

// 1. sor (XVI. század)
const row1 = document.createElement('tr'); // Létrehozzuk az 1. sort
tablaBody.appendChild(row1); // Hozzáadjuk a tablebodyhoz

const idoszak1 = document.createElement('td'); // Létrehozzuk az "Időszak" cellát
idoszak1.rowSpan = 2; // Beállítjuk a rowspan értéket 2-re
idoszak1.innerHTML = evszamok1Array.idoszak; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row1.appendChild(idoszak1); // Hozzáadjuk a sorhoz

const ev1 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev1.innerHTML = evszamok1Array.evszam; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row1.appendChild(ev1); // Hozzáadjuk a sorhoz

const esemeny1 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny1.innerHTML = evszamok1Array.esemeny; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row1.appendChild(esemeny1); // Hozzáadjuk a sorhoz

const tananyag1 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag1.innerHTML = evszamok1Array.tananyag; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row1.appendChild(tananyag1); // Hozzáadjuk a sorhoz

// 2. sor (XVI. század, Magellán körülhajózza a földet)
const row2 = document.createElement('tr'); // Létrehozzuk a 2. sort
tablaBody.appendChild(row2); // Hozzáadjuk a tablebodyhoz

const ev2 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev2.innerHTML = evszamok2Array.evszam; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row2.appendChild(ev2); // Hozzáadjuk a sorhoz

const esemeny2 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny2.innerHTML = evszamok2Array.esemeny; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row2.appendChild(esemeny2); // Hozzáadjuk a sorhoz

const tananyag2 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag2.innerHTML = evszamok2Array.tananyag; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row2.appendChild(tananyag2); // Hozzáadjuk a sorhoz

// 3. sor (XVII. század)
const row3 = document.createElement('tr'); // Létrehozzuk a 3. sort
tablaBody.appendChild(row3); // Hozzáadjuk a tablebodyhoz

const idoszak3 = document.createElement('td'); // Létrehozzuk az "Időszak" cellát
idoszak3.innerHTML = evszamok3Array.idoszak; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row3.appendChild(idoszak3); // Hozzáadjuk a sorhoz

const ev3 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev3.innerHTML = evszamok3Array.evszam; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row3.appendChild(ev3); // Hozzáadjuk a sorhoz

const esemeny3 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny3.innerHTML = evszamok3Array.esemeny; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row3.appendChild(esemeny3); // Hozzáadjuk a sorhoz

const tananyag3 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag3.innerHTML = evszamok3Array.tananyag; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row3.appendChild(tananyag3); // Hozzáadjuk a sorhoz

// 4. sor (XVIII. század)
const row4 = document.createElement('tr'); // Létrehozzuk a 4. sort
tablaBody.appendChild(row4); // Hozzáadjuk a tablebodyhoz

const idoszak4 = document.createElement('td'); // Létrehozzuk az "Időszak" cellát
idoszak4.rowSpan = 2;; // Beállítjuk a rowspan értéket 2-re
idoszak4.innerHTML = evszamok4Array.idoszak; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row4.appendChild(idoszak4); // Hozzáadjuk a sorhoz

const ev4 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev4.innerHTML = evszamok4Array.evszam; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row4.appendChild(ev4); // Hozzáadjuk a sorhoz

const esemeny4 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny4.innerHTML = evszamok4Array.esemeny; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row4.appendChild(esemeny4); // Hozzáadjuk a sorhoz

const tananyag4 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag4.innerHTML = evszamok4Array.tananyag; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row4.appendChild(tananyag4); // Hozzáadjuk a sorhoz

// 5. sor (XVIII. század, Rákóczi szabadságharc)
const row5 = document.createElement('tr'); // Létrehozzuk az 5. sort
tablaBody.appendChild(row5); // Hozzáadjuk a tablebodyhoz

const ev5 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev5.innerHTML = evszamok5Array.evszam; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row5.appendChild(ev5); // Hozzáadjuk a sorhoz

const esemeny5 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny5.innerHTML = evszamok5Array.esemeny; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row5.appendChild(esemeny5); // Hozzáadjuk a sorhoz

const tananyag5 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag5.innerHTML = evszamok5Array.tananyag; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row5.appendChild(tananyag5); // Hozzáadjuk a sorhoz

// 6. sor (XIX. század)
const row6 = document.createElement('tr'); // Létrehozzuk a 6. sort
tablaBody.appendChild(row6); // Hozzáadjuk a tablebodyhoz

const idoszak6 = document.createElement('td'); // Létrehozzuk az "Időszak" cellát
idoszak6.rowSpan = 2;; // Beállítjuk a rowspan értéket 2-re
idoszak6.innerHTML = evszamok6Array.idoszak; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row6.appendChild(idoszak6); // Hozzáadjuk a sorhoz

const ev6 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev6.innerHTML = evszamok6Array.evszam; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row6.appendChild(ev6); // Hozzáadjuk a sorhoz

const esemeny6 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny6.innerHTML = evszamok6Array.esemeny; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row6.appendChild(esemeny6); // Hozzáadjuk a sorhoz

const tananyag6 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag6.innerHTML = evszamok6Array.tananyag; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row6.appendChild(tananyag6); // Hozzáadjuk a sorhoz

// 7. sor (XIX. század, győri csata)
const row7 = document.createElement('tr'); // Létrehozzuk a 7. sort
tablaBody.appendChild(row7); // Hozzáadjuk a tablebodyhoz

const ev7 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev7.innerHTML = evszamok7Array.evszam; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row7.appendChild(ev7); // Hozzáadjuk a sorhoz

const esemeny7 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny7.innerHTML = evszamok7Array.esemeny; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row7.appendChild(esemeny7); // Hozzáadjuk a sorhoz

const tananyag7 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag7.innerHTML = evszamok7Array.tananyag; // beállítjuk a tartalmat a megadott objektum ulajdonságára
row7.appendChild(tananyag7); // Hozzáadjuk a sorhoz
