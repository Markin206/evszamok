//----------------------------------------------------------------------------------------- valuek
const headerIdoszakValue = "Időszak"//változó létrehozása mely tartalmazza a headeridoszak string értékét
const headerEvszamValue = "Évszám"//változó létrehozása mely tartalmazza a headerevszam string értékét
const headerEsemenyValue = "Esemény"//változó létrehozása mely tartalmazza a headeresemeny string értékét
const headerTananyagValue = "Tananyag"//változó létrehozása mely tartalmazza a headertananyag string értékét

const tableBodyRow1Idoszak = "XVI. század"//változó létrehozása mely tartalmazza a idoszak string értékét
const tableBodyRow3Idoszak = "XVII."//változó létrehozása mely tartalmazza a idoszak string értékét
const tableBodyRow4Idoszak = "XVIII."//változó létrehozása mely tartalmazza a idoszak string értékét
const tableBodyRow6Idoszak = "XIX."//változó létrehozása mely tartalmazza a idoszak string értékét

const tableBodyRow1Evszam = "1514"//változó létrehozása mely tartalmazza a evszam string értékét
const tableBodyRow2Evszam = "1519-1522"//változó létrehozása mely tartalmazza a evszam string értékét
const tableBodyRow3Evszam = "1664"//változó létrehozása mely tartalmazza a evszam string értékét
const tableBodyRow4Evszam = "1701-1714"//változó létrehozása mely tartalmazza a evszam string értékét
const tableBodyRow5Evszam = "1703-1711"//változó létrehozása mely tartalmazza a evszam string értékét
const tableBodyRow6Evszam = "1812"//változó létrehozása mely tartalmazza a evszam string értékét
const tableBodyRow7Evszam = "1809"//változó létrehozása mely tartalmazza a evszam string értékét

const tableBodyRow1Esemeny = "Dózsa-féle parasztháború"//változó létrehozása mely tartalmazza a esemeny string értékét
const tableBodyRow2Esemeny = "Magellán körülhajózza a földet"//változó létrehozása mely tartalmazza a esemeny string értékét
const tableBodyRow3Esemeny = "vasvári béke"//változó létrehozása mely tartalmazza a esemeny string értékét
const tableBodyRow4Esemeny = "spanyol örökösödési háború"//változó létrehozása mely tartalmazza a esemeny string értékét
const tableBodyRow5Esemeny = "Rákóczi szabadságharc"//változó létrehozása mely tartalmazza a esemeny string értékét
const tableBodyRow6Esemeny = "Napóleon oroszországi hadjárata"//változó létrehozása mely tartalmazza a esemeny string értékét
const tableBodyRow7Esemeny = "győri csata"//változó létrehozása mely tartalmazza a esemeny string értékét

const tableBodyRow1Tananyag = "magyar"//változó létrehozása mely tartalmazza a tananyag string értékét
const tableBodyRow2Tananyag = "egyetemes"//változó létrehozása mely tartalmazza a tananyag string értékét


//----------------------------------------------------------------------------------------- tabla lineáris

const tabla = document.createElement('table'); // Létrehozzuk a táblázatot
document.body.appendChild(tabla); // Hozzáadjuk a táblázatot a body-hoz

//----------------------------------------------------------------------------------------- header
const tablaheader = document.createElement('thead'); // Létrehozzuk a tableheadert (thead)
tabla.appendChild(tablaheader); // Hozzáadjuk a headert a táblázathoz

const tablaheaderRow = document.createElement('tr'); // Létrehozzuk a tablaheaderRow sort
tablaheader.appendChild(tablaheaderRow); // Hozzáadjuk a tablaheaderRow sort a theadhez

const idoszak = document.createElement('th'); // Létrehozzuk az "Időszak" oszlopot
idoszak.innerHTML = headerIdoszakValue; // Beállítjuk a "Időszak" szöveget a megadott változó értékére
tablaheaderRow.appendChild(idoszak); // Hozzáadjuk a tablaheaderRow sorhoz

const evszam = document.createElement('th'); // Létrehozzuk az "Évszám" oszlopot
evszam.innerHTML = headerEvszamValue; // Beállítjuk az "Évszám" szöveget a megadott változó értékére
tablaheaderRow.appendChild(evszam); // Hozzáadjuk a tablaheaderRow sorhoz

const esemeny = document.createElement('th'); // Létrehozzuk az "Esemény" oszlopot
esemeny.innerHTML = headerEsemenyValue; // Beállítjuk az "Esemény" szöveget a megadott változó értékére
tablaheaderRow.appendChild(esemeny); // Hozzáadjuk a tablaheaderRow sorhoz

const tananyag = document.createElement('th'); // Létrehozzuk a "Tananyag" oszlopot
tananyag.innerHTML = headerTananyagValue; // Beállítjuk a "Tananyag" szöveget a megadott változó értékére
tablaheaderRow.appendChild(tananyag); // Hozzáadjuk a tablaheaderRow sorhoz

//----------------------------------------------------------------------------------------- tbody
const tablaBody = document.createElement('tbody'); // Létrehozzuk a tablebodyt
tabla.appendChild(tablaBody); // Hozzáadjuk a törzset a táblázathoz

// 1. sor (XVI. század)
const row1 = document.createElement('tr'); // Létrehozzuk az 1. sort
tablaBody.appendChild(row1); // Hozzáadjuk a tablebodyhoz

const idoszak1 = document.createElement('td'); // Létrehozzuk az "Időszak" cellát
idoszak1.rowSpan = 2; // Beállítjuk a rowspan értéket 2-re
idoszak1.innerHTML = tableBodyRow1Idoszak; // Beállítjuk a tartalmat a megadott változó értékére
row1.appendChild(idoszak1); // Hozzáadjuk a sorhoz

const ev1 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev1.innerHTML = tableBodyRow1Evszam; // Beállítjuk a tartalmat a megadott változó értékére
row1.appendChild(ev1); // Hozzáadjuk a sorhoz

const esemeny1 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny1.innerHTML = tableBodyRow1Esemeny; // Beállítjuk a tartalmat a megadott változó értékére
row1.appendChild(esemeny1); // Hozzáadjuk a sorhoz

const tananyag1 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag1.innerHTML = tableBodyRow1Tananyag; // Beállítjuk a tartalmat a megadott változó értékére
row1.appendChild(tananyag1); // Hozzáadjuk a sorhoz

// 2. sor (XVI. század, Magellán körülhajózza a földet)
const row2 = document.createElement('tr'); // Létrehozzuk a 2. sort
tablaBody.appendChild(row2); // Hozzáadjuk a tablebodyhoz

const ev2 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev2.innerHTML = tableBodyRow2Evszam; // Beállítjuk a tartalmat a megadott változó értékére
row2.appendChild(ev2); // Hozzáadjuk a sorhoz

const esemeny2 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny2.innerHTML = tableBodyRow2Esemeny; // Beállítjuk a tartalmat a megadott változó értékére
row2.appendChild(esemeny2); // Hozzáadjuk a sorhoz

const tananyag2 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag2.innerHTML = tableBodyRow2Tananyag; // Beállítjuk a tartalmat a megadott változó értékére
row2.appendChild(tananyag2); // Hozzáadjuk a sorhoz

// 3. sor (XVII. század)
const row3 = document.createElement('tr'); // Létrehozzuk a 3. sort
tablaBody.appendChild(row3); // Hozzáadjuk a tablebodyhoz

const idoszak3 = document.createElement('td'); // Létrehozzuk az "Időszak" cellát
idoszak3.innerHTML = tableBodyRow3Idoszak; // Beállítjuk a tartalmat a megadott változó értékére
row3.appendChild(idoszak3); // Hozzáadjuk a sorhoz

const ev3 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev3.innerHTML = tableBodyRow3Evszam; // Beállítjuk a tartalmat a megadott változó értékére
row3.appendChild(ev3); // Hozzáadjuk a sorhoz

const esemeny3 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny3.innerHTML = tableBodyRow3Esemeny; // Beállítjuk a tartalmat a megadott változó értékére
row3.appendChild(esemeny3); // Hozzáadjuk a sorhoz

const tananyag3 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag3.innerHTML = tableBodyRow1Tananyag; // Beállítjuk a tartalmat a megadott változó értékére
row3.appendChild(tananyag3); // Hozzáadjuk a sorhoz

// 4. sor (XVIII. század)
const row4 = document.createElement('tr'); // Létrehozzuk a 4. sort
tablaBody.appendChild(row4); // Hozzáadjuk a tablebodyhoz

const idoszak4 = document.createElement('td'); // Létrehozzuk az "Időszak" cellát
idoszak4.rowSpan = 2;; // Beállítjuk a rowspan értéket 2-re
idoszak4.innerHTML = tableBodyRow4Idoszak; // Beállítjuk a tartalmat a megadott változó értékére
row4.appendChild(idoszak4); // Hozzáadjuk a sorhoz

const ev4 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev4.innerHTML = tableBodyRow4Evszam; // Beállítjuk a tartalmat a megadott változó értékére
row4.appendChild(ev4); // Hozzáadjuk a sorhoz

const esemeny4 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny4.innerHTML = tableBodyRow4Esemeny; // Beállítjuk a tartalmat a megadott változó értékére
row4.appendChild(esemeny4); // Hozzáadjuk a sorhoz

const tananyag4 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag4.innerHTML = tableBodyRow2Tananyag; // Beállítjuk a tartalmat a megadott változó értékére
row4.appendChild(tananyag4); // Hozzáadjuk a sorhoz

// 5. sor (XVIII. század, Rákóczi szabadságharc)
const row5 = document.createElement('tr'); // Létrehozzuk az 5. sort
tablaBody.appendChild(row5); // Hozzáadjuk a tablebodyhoz

const ev5 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev5.innerHTML = tableBodyRow5Evszam; // Beállítjuk a tartalmat a megadott változó értékére
row5.appendChild(ev5); // Hozzáadjuk a sorhoz

const esemeny5 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny5.innerHTML = tableBodyRow5Esemeny; // Beállítjuk a tartalmat a megadott változó értékére
row5.appendChild(esemeny5); // Hozzáadjuk a sorhoz

const tananyag5 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag5.innerHTML = tableBodyRow1Tananyag; // Beállítjuk a tartalmat a megadott változó értékére
row5.appendChild(tananyag5); // Hozzáadjuk a sorhoz

// 6. sor (XIX. század)
const row6 = document.createElement('tr'); // Létrehozzuk a 6. sort
tablaBody.appendChild(row6); // Hozzáadjuk a tablebodyhoz

const idoszak6 = document.createElement('td'); // Létrehozzuk az "Időszak" cellát
idoszak6.rowSpan = 2;; // Beállítjuk a rowspan értéket 2-re
idoszak6.innerHTML = tableBodyRow6Idoszak; // Beállítjuk a tartalmat a megadott változó értékére
row6.appendChild(idoszak6); // Hozzáadjuk a sorhoz

const ev6 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev6.innerHTML = tableBodyRow6Evszam; // Beállítjuk a tartalmat a megadott változó értékére
row6.appendChild(ev6); // Hozzáadjuk a sorhoz

const esemeny6 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny6.innerHTML = tableBodyRow6Esemeny; // Beállítjuk a tartalmat a megadott változó értékére
row6.appendChild(esemeny6); // Hozzáadjuk a sorhoz

const tananyag6 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag6.innerHTML = tableBodyRow2Tananyag; // Beállítjuk a tartalmat a megadott változó értékére
row6.appendChild(tananyag6); // Hozzáadjuk a sorhoz

// 7. sor (XIX. század, győri csata)
const row7 = document.createElement('tr'); // Létrehozzuk a 7. sort
tablaBody.appendChild(row7); // Hozzáadjuk a tablebodyhoz

const ev7 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev7.innerHTML = tableBodyRow7Evszam; // Beállítjuk a tartalmat a megadott változó értékére
row7.appendChild(ev7); // Hozzáadjuk a sorhoz

const esemeny7 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny7.innerHTML = tableBodyRow7Esemeny; // Beállítjuk a tartalmat a megadott változó értékére
row7.appendChild(esemeny7); // Hozzáadjuk a sorhoz

const tananyag7 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag7.innerHTML = tableBodyRow1Tananyag; // Beállítjuk a tartalmat a megadott változó értékére
row7.appendChild(tananyag7); // Hozzáadjuk a sorhoz
