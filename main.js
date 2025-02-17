
const tabla = document.createElement('table'); // Létrehozzuk a táblázatot
document.body.appendChild(tabla); // Hozzáadjuk a táblázatot a body-hoz

//----------------------------------------------------------------------------------------- header
const tablaheader = document.createElement('thead'); // Létrehozzuk a tableheadert (thead)
tabla.appendChild(tablaheader); // Hozzáadjuk a headert a táblázathoz

const tablaheaderRow = document.createElement('tr'); // Létrehozzuk a tablaheaderRow sort
tablaheader.appendChild(tablaheaderRow); // Hozzáadjuk a tablaheaderRow sort a theadhez

const periodo = document.createElement('th'); // Létrehozzuk az "Időszak" oszlopot
periodo.innerHTML = "Időszak"; // Beállítjuk a "Időszak" szöveget
tablaheaderRow.appendChild(periodo); // Hozzáadjuk a tablaheaderRow sorhoz

const evszam = document.createElement('th'); // Létrehozzuk az "Évszám" oszlopot
evszam.innerHTML = "Évszám"; // Beállítjuk az "Évszám" szöveget
tablaheaderRow.appendChild(evszam); // Hozzáadjuk a tablaheaderRow sorhoz

const esemeny = document.createElement('th'); // Létrehozzuk az "Esemény" oszlopot
esemeny.innerHTML = "Esemény"; // Beállítjuk az "Esemény" szöveget
tablaheaderRow.appendChild(esemeny); // Hozzáadjuk a tablaheaderRow sorhoz

const tananyag = document.createElement('th'); // Létrehozzuk a "Tananyag" oszlopot
tananyag.innerHTML = "Tananyag"; // Beállítjuk a "Tananyag" szöveget
tablaheaderRow.appendChild(tananyag); // Hozzáadjuk a tablaheaderRow sorhoz

//----------------------------------------------------------------------------------------- tbody
const tablaBody = document.createElement('tbody'); // Létrehozzuk a tablebodyt
tabla.appendChild(tablaBody); // Hozzáadjuk a törzset a táblázathoz

// 1. sor (XVI. század)
const row1 = document.createElement('tr'); // Létrehozzuk az 1. sort
tablaBody.appendChild(row1); // Hozzáadjuk a tablebodyhoz

const idoszak1 = document.createElement('td'); // Létrehozzuk az "Időszak" cellát
idoszak1.rowSpan = 2; // Beállítjuk a rowspan értéket 2-re
idoszak1.innerHTML = "XVI. század"; // Beállítjuk a tartalmat
row1.appendChild(idoszak1); // Hozzáadjuk a sorhoz

const ev1 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev1.innerHTML = "1514"; // Beállítjuk a tartalmat
row1.appendChild(ev1); // Hozzáadjuk a sorhoz

const esemeny1 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny1.innerHTML = "Dózsa-féle parasztháború"; // Beállítjuk a tartalmat
row1.appendChild(esemeny1); // Hozzáadjuk a sorhoz

const tananyag1 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag1.innerHTML = "magyar"; // Beállítjuk a tartalmat
row1.appendChild(tananyag1); // Hozzáadjuk a sorhoz

// 2. sor (XVI. század, Magellán körülhajózza a földet)
const row2 = document.createElement('tr'); // Létrehozzuk a 2. sort
tablaBody.appendChild(row2); // Hozzáadjuk a tablebodyhoz

const ev2 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev2.innerHTML = "1519-1522"; // Beállítjuk a tartalmat
row2.appendChild(ev2); // Hozzáadjuk a sorhoz

const esemeny2 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny2.innerHTML = "Magellán körülhajózza a földet"; // Beállítjuk a tartalmat
row2.appendChild(esemeny2); // Hozzáadjuk a sorhoz

const tananyag2 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag2.innerHTML = "egyetemes"; // Beállítjuk a tartalmat
row2.appendChild(tananyag2); // Hozzáadjuk a sorhoz

// 3. sor (XVII. század)
const row3 = document.createElement('tr'); // Létrehozzuk a 3. sort
tablaBody.appendChild(row3); // Hozzáadjuk a tablebodyhoz

const idoszak3 = document.createElement('td'); // Létrehozzuk az "Időszak" cellát
idoszak3.innerHTML = "XVII. század"; // Beállítjuk a tartalmat
row3.appendChild(idoszak3); // Hozzáadjuk a sorhoz

const ev3 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev3.innerHTML = "1664"; // Beállítjuk a tartalmat
row3.appendChild(ev3); // Hozzáadjuk a sorhoz

const esemeny3 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny3.innerHTML = "vasvári béke"; // Beállítjuk a tartalmat
row3.appendChild(esemeny3); // Hozzáadjuk a sorhoz

const tananyag3 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag3.innerHTML = "magyar"; // Beállítjuk a tartalmat
row3.appendChild(tananyag3); // Hozzáadjuk a sorhoz

// 4. sor (XVIII. század)
const row4 = document.createElement('tr'); // Létrehozzuk a 4. sort
tablaBody.appendChild(row4); // Hozzáadjuk a tablebodyhoz

const idoszak4 = document.createElement('td'); // Létrehozzuk az "Időszak" cellát
idoszak4.rowSpan = 2;; // Beállítjuk a rowspan értéket 2-re
idoszak4.innerHTML = "XVIII. század"; // Beállítjuk a tartalmat
row4.appendChild(idoszak4); // Hozzáadjuk a sorhoz

const ev4 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev4.innerHTML = "1701-1714"; // Beállítjuk a tartalmat
row4.appendChild(ev4); // Hozzáadjuk a sorhoz

const esemeny4 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny4.innerHTML = "spanyol örökösödési háború"; // Beállítjuk a tartalmat
row4.appendChild(esemeny4); // Hozzáadjuk a sorhoz

const tananyag4 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag4.innerHTML = "egyetemes"; // Beállítjuk a tartalmat
row4.appendChild(tananyag4); // Hozzáadjuk a sorhoz

// 5. sor (XVIII. század, Rákóczi szabadságharc)
const row5 = document.createElement('tr'); // Létrehozzuk az 5. sort
tablaBody.appendChild(row5); // Hozzáadjuk a tablebodyhoz

const ev5 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev5.innerHTML = "1703-1711"; // Beállítjuk a tartalmat
row5.appendChild(ev5); // Hozzáadjuk a sorhoz

const esemeny5 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny5.innerHTML = "Rákóczi szabadságharc"; // Beállítjuk a tartalmat
row5.appendChild(esemeny5); // Hozzáadjuk a sorhoz

const tananyag5 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag5.innerHTML = "magyar"; // Beállítjuk a tartalmat
row5.appendChild(tananyag5); // Hozzáadjuk a sorhoz

// 6. sor (XIX. század)
const row6 = document.createElement('tr'); // Létrehozzuk a 6. sort
tablaBody.appendChild(row6); // Hozzáadjuk a tablebodyhoz

const idoszak6 = document.createElement('td'); // Létrehozzuk az "Időszak" cellát
idoszak6.rowSpan = 2;; // Beállítjuk a rowspan értéket 2-re
idoszak6.innerHTML = "XIX. század"; // Beállítjuk a tartalmat
row6.appendChild(idoszak6); // Hozzáadjuk a sorhoz

const ev6 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev6.innerHTML = "1812"; // Beállítjuk a tartalmat
row6.appendChild(ev6); // Hozzáadjuk a sorhoz

const esemeny6 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny6.innerHTML = "Napóleon oroszországi hadjárata"; // Beállítjuk a tartalmat
row6.appendChild(esemeny6); // Hozzáadjuk a sorhoz

const tananyag6 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag6.innerHTML = "egyetemes"; // Beállítjuk a tartalmat
row6.appendChild(tananyag6); // Hozzáadjuk a sorhoz

// 7. sor (XIX. század, győri csata)
const row7 = document.createElement('tr'); // Létrehozzuk a 7. sort
tablaBody.appendChild(row7); // Hozzáadjuk a tablebodyhoz

const ev7 = document.createElement('td'); // Létrehozzuk az "Évszám" cellát
ev7.innerHTML = "1809"; // Beállítjuk a tartalmat
row7.appendChild(ev7); // Hozzáadjuk a sorhoz

const esemeny7 = document.createElement('td'); // Létrehozzuk az "Esemény" cellát
esemeny7.innerHTML = "győri csata"; // Beállítjuk a tartalmat
row7.appendChild(esemeny7); // Hozzáadjuk a sorhoz

const tananyag7 = document.createElement('td'); // Létrehozzuk a "Tananyag" cellát
tananyag7.innerHTML = "magyar"; // Beállítjuk a tartalmat
row7.appendChild(tananyag7); // Hozzáadjuk a sorhoz
