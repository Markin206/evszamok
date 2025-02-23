//----------------------------------------------------------------------------------------- array

/**
 * tömb amely a táblázat alap értékeit és tartalmát raktározza
 */
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
/**
* tömb amely a fejléc tartalmát raktározza
*/
const evszamokHeaderArray = [
    {
        idoszak: "Időszak",//megadjuk az időszak tulajdonságot és tartalmát feltöltjük egy string értékel
        evszam: "Évszám",//megadjuk az evszam tulajdonságot és tartalmát feltöltjük egy string értékel
        esemeny: "Esemény",//megadjuk az esemeny tulajdonságot és tartalmát feltöltjük egy string értékel
        tananyag: "Tananyag"//megadjuk az tananyag tulajdonságot és tartalmát feltöltjük egy string értékel
    }
]

/**
 * tömb amely a form adatait és tartalmát raktározza
 */
const formArray = [//létrehozzuk a tömböt amelynek 3 tulajdonsága lesz label, id, input_type
    {
        label : "Korszak megnevezés:",
        id: "korszak",
        input_type: "text"
    },
    {
        label : "1. esemény évszám:",
        id: "evszam1",
        input_type: "text"
    },
    {
        label : "1. esemény megnevezés:",
        id: "megnev1",
        input_type: "text"
    },
    {
        label : "1. esemény tananyag:",
        id: "tan1",
        input_type: "select"
    },
    {
        label : "2. esemény évszám:",
        id: "evszam2",
        input_type: "text"
    },
    {
        label : "2. esemény megnevezés:",
        id: "megnev2",
        input_type: "text"
    },
    {
        label : "2. esemény tananyag:",
        id: "tan2",
        input_type: "select"
    }
];


//----------------------------------------------------------------------------------------- tabla lineáris

const tabla = document.createElement('table'); // Létrehozzuk a táblázatot
document.body.appendChild(tabla); // Hozzáadjuk a táblázatot a body-hoz
const tablaheader = document.createElement('thead'); // Létrehozzuk a tableheadert (thead)
tabla.appendChild(tablaheader); // Hozzáadjuk a headert a táblázathoz
const tablaBody = document.createElement('tbody'); // Létrehozzuk a tablebodyt
tabla.appendChild(tablaBody); // Hozzáadjuk a törzset a táblázathoz

renderHeader(evszamokHeaderArray)//meghívjuk a függvényt
renderTable(evszamokArray)//meghívjuk a függvényt
createForm();//meghívjuk a createform
const form = document.querySelector('form');//meghívjuk az első HTMLelementet amely form idvel rendelkezik
/**
 * ebben van az esemény kezelő
 * a függvény megvárja a submit megtörténését és aztán lefut
 * természetesen van benne az is hogyha frissítjük a weboldalt akkor nem fut le
 * 
 * függvény megnézi az inputok értékét és egy lokális változóba eltárolja
 * közbe validációs függvényekkel nézzük hogy a felhasználó nem rontott el semmit a
 * esemény kezelő inputjaiban
 * ha nem rontott el semmit akkor az új megadott esemény és annak adatait
 * belerakja a tömbbe és újra meghívja táblázat tőrzsét
 */
form.addEventListener('submit', function(e){//megfigyeljük hogy a weboldalon submitoltunk-e bármit is
    e.preventDefault();//ezáltal nem fut let a függvény hogyha frissítjük a weboldalt

    const htmlElementKorszak = document.getElementById('korszak')//meghívjuk az első HTMLelementet amely korszak idvel rendelkezik
    const htmlElementEvszam1 = document.getElementById('evszam1')//meghívjuk az első HTMLelementet amely evszam1 idvel rendelkezik
    const htmlElementMegnev1 = document.getElementById('megnev1')//meghívjuk az első HTMLelementet amely megnev1 idvel rendelkezik
    const htmlElementTan1 = document.getElementById('tan1')//meghívjuk az első HTMLelementet amely tan1 idvel rendelkezik
    const htmlElementEvszam2 = document.getElementById('evszam2')//meghívjuk az első HTMLelementet amely evszam2 idvel rendelkezik
    const htmlElementMegnev2 = document.getElementById('megnev2')//meghívjuk az első HTMLelementet amely megnev2 idvel rendelkezik
    const htmlElementTan2 = document.getElementById('tan2')//meghívjuk az első HTMLelementet amely tan2 idvel rendelkezik
    if(simpleValidation(htmlElementEvszam2, htmlElementMegnev2, htmlElementTan2)){//ha nincs semmilyen hiba akkor lefutt
    const korszakValue = htmlElementKorszak.value//a meghívott htmlElement értékét berakjuk egy lokális változóba
    const evszam1Value = htmlElementEvszam1.value//a meghívott htmlElement értékét berakjuk egy lokális változóba
    const megnev1Value = htmlElementMegnev1.value//a meghívott htmlElement értékét berakjuk egy lokális változóba
    const tan1Value = htmlElementTan1.value//a meghívott htmlElement értékét berakjuk egy lokális változóba
    const evszam2Value = htmlElementEvszam2.value//a meghívott htmlElement értékét berakjuk egy lokális változóba
    const megnev2Value = htmlElementMegnev2.value//a meghívott htmlElement értékét berakjuk egy lokális változóba
    const tan2Value = htmlElementTan2.value//a meghívott htmlElement értékét berakjuk egy lokális változóba

    const error = form.querySelectorAll('.error');//kiválasztjuk az összes div-et amely error osztályt tartalmaz
        for(const errors of error)//végig iterálunk az összes error div-en
        {
        errors.innerHTML = "";//kiürítjük a divet
        }

    const newElement = {//létrehozunk egy új objektumot ahol a tulajdonságok megkapják a lokális változók értékét
        idoszak: korszakValue,
        evszam: evszam1Value,
        esemeny: megnev1Value,
        tananyag: tan1Value,
        evszam2: evszam2Value,
        esemeny2: megnev2Value,
        tananyag2: tan2Value
    }
    if(linearValidation(htmlElementKorszak, htmlElementEvszam1, htmlElementMegnev1, htmlElementTan1)){//ha nincs hiba lefut
    evszamokArray.push(newElement)//az új objektumot felpusholjuk a tömbe
    tablaBody.innerHTML = "";//kiürítjük a táblázat tőrzsét
    renderTable(evszamokArray);//meghívjuk a táblázatott újból
    form.reset();//kiürítjük/újra indítjuk a formot
    }}
})


