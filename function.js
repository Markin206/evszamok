/**
 * ez az a függvény amely létrehozza a fejlécet és végig iterál a megadott tömbön
 * @param {Array} evszamokHeaderarray ez az a tömb amely a fejléc tartalmát raktározza
 */
function renderHeader(evszamokHeaderarray){//létrehozzuk a függvényt amelynek egy  tömb paramétere lesz
    for(const currentHeadElement of evszamokHeaderarray){//végig iterálunk a paraméterben megadott objektumokon
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
    }}
    
    /**
     * ezzel a függvényel iratjuk ki a táblázatott
     * a függvény megnézi hogy létezik második események
     * ha igen akkor az idoszak rowspan2 és a 2.sor hozzá fűzi
     * @param {Array} array ez az a tömb amely az alap értékeket tartalmazza
     */
    function renderTable(array){//létrehozzuk a függvényt amelynek egy  tömb paramétere lesz
    for (const currentElement of array) {//végig iterálunk a paraméterben megadott objektumokon
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

    
/**
 * létre hozzuk a form-ot ebben a függvényben
 * a függvény végig iterál a formArray tömbön és megnézi a input típusát
 * ha select akkor option elemeket hozz létre ha nem akkor egy sima
 * text típusú inputot hoz létre
 */
function createForm() {//létrehozzuk a függvényt
    const form = document.createElement('form'); //létrehozzuk a form elemet
    const button = document.createElement('button')//létrehozunk egy gombot
    button.innerHTML = "Hozzáadás";//a gomb tartalmát feltöltjük stringgel

    for(const formElement of formArray) {//végig iterálunk a formArray tömbön
        const formDiv = document.createElement('div');//létrehozunk egy div-et
        const formLabel = document.createElement('label');//létrehozunk egy labelt
        const formError = document.createElement('div');//létrehozunk egy divet
        formError.classList.add("error");//a divhez hozzá adjuk az error osztályt
        
        formLabel.innerHTML = formElement.label;//a label tartalmát feltöltjük
        formLabel.setAttribute("for", formElement.id);//hozzáadjuk a for attribútumot a labelhez, hogy kapcsolódjon a megfelelő inputhoz

        if (formElement.input_type === "select") {//ha az input select akkor belép
            const formInput = document.createElement('select');//létrehozzuk a select elemet
            formInput.name = formElement.id;//megadjuk a select nevét
            formInput.id = formElement.id;//megadjuk a select ID-ját

            const option1 = document.createElement('option');//létrehozzuk a option elemet
            option1.value = "";//értékét megadjuk
            option1.innerText = "";//tartalma üres
            formInput.appendChild(option1);//hozzáadjuk az inputhoz mint kiválasztható elemet

            const option2 = document.createElement('option');
            option2.value = "magyar";//értékét megadjuk
            option2.innerText = "Magyar történelem";//tartalma megadjuk
            formInput.appendChild(option2);//hozzáadjuk az inputhoz mint kiválasztható elemet

            const option3 = document.createElement('option');
            option3.value = "egyetemes";//értékét megadjuk
            option3.innerText = "Egyetemes történelem";//tartalma megadjuk
            formInput.appendChild(option3);//hozzáadjuk az inputhoz mint kiválasztható elemet

            formDiv.appendChild(formLabel);//hozzáadjuk a labelt a divhez
            formDiv.appendChild(document.createElement('br'));//vonal törés
            formDiv.appendChild(formInput);//input hozzáadása
        }else{//ha az input típusa text
            const formInput = document.createElement('input');//létrehozzuk az input elemet
            formInput.type = formElement.input_type;//megadjuk az input típusát
            formInput.name = formElement.id;//megadjuk az input nevét
            formInput.id = formElement.id;//megadjuk az input ID-ját

            formDiv.appendChild(formLabel);//hozzáadjuk a labelt a divhez
            formDiv.appendChild(document.createElement('br'));//vonal törés
            formDiv.appendChild(formInput);//input hozzáadása
        }

        formDiv.appendChild(document.createElement('br'));//hozzáadjuk a divhez az újonnan létrehozott vonal törést
        formDiv.appendChild(formError);//hozzáadjuk a error divet a divhez
        formDiv.appendChild(document.createElement('br'));//hozzáadjuk a divhez az újonnan létrehozzott vonal törést
        form.appendChild(formDiv);//hozzáadjuk a divet a formhoz
    }

    form.appendChild(button);//hozzáadjuk a gombot a formhoz
    document.body.appendChild(form);//hozzáadjuk a weboldal testéhez a formot
}

//----------------------------------------------------------------------------------------- validation
/**
 * az első szimpla validáció amely megnézi hogy a korszak, evszam1, esemeny1, tan1 inputjai 
 * nem üresek-e ha mégis akkor a esemény kezelő nem engedi az új adatok hozzáadását
 * @param {HTMLElement} htmlElementKorszak ez a korszak htmlElement amely egyben input
 * @param {HTMLElement} htmlElementEvszam1 ez a evszam1 htmlElement amely egyben input
 * @param {HTMLElement} htmlElementMegnev1 ez a megnev1 htmlElement amely egyben input
 * @param {HTMLElement} htmlElementTan1 ez a tan1 htmlElement amely egyben input
 * @returns {boolean} ez a valid elemnt amit vissza adunk ezzel tudjuk hozzáadni az új objektumot/sort/elemeket a táblázathoz
 */
function linearValidation(htmlElementKorszak, htmlElementEvszam1, htmlElementMegnev1, htmlElementTan1){//létrehozzuk a függvényt amelynek 3 paramétere lesz
    let valid = true// //létrehozunk egy boolean az alapértékét true értékre adjuk

        if(htmlElementKorszak.value == ""){//ha evszám2 üres akkor belép
            const parentElement = htmlElementKorszak.parentElement//meghívjuk a parentelementet (field-eket a html-ben)
            const error = parentElement.querySelector('.error');//kiválasztjuk a parentelementen belül a error osztályal rendelkező
            if(error != null){//megnézzük hogy a error létezik-e a parentElementben
                error.innerHTML = "Kötelező megadni a korszakot"//error tartalmát feltöltjük
            }
            valid = false;//valid értékét frissítjük falsera
        }

        if(htmlElementEvszam1.value == ""){//ha esemény2 üres akkor belép
            const parentElement = htmlElementEvszam1.parentElement//meghívjuk a parentelementet (field-eket a html-ben)
            const error = parentElement.querySelector('.error');//kiválasztjuk a parentelementen belül a error osztályal rendelkező
            if(error){//megnézzük hogy a error létezik-e a parentElementben
                error.innerHTML = "Kötelező megadni a évszámot"//error tartalmát feltöltjük
            }valid = false;//valid értékét frissítjük falsera
        }

        if(htmlElementMegnev1.value == ""){//ha tananyag2 üres akkor belép
            const parentElement = htmlElementMegnev1.parentElement//meghívjuk a parentelementet (field-eket a html-ben)
            const error = parentElement.querySelector('.error');//kiválasztjuk a parentelementen belül a error osztályal rendelkező
            if(error){//megnézzük hogy a error létezik-e a parentElementben
                error.innerHTML = "Kötelező megadni az 1. eseményt"//error tartalmát feltöltjük
            }valid = false;//valid értékét frissítjük falsera
        }

        if(htmlElementTan1.value == ""){//ha tananyag2 üres akkor belép
            const parentElement = htmlElementTan1.parentElement//meghívjuk a parentelementet (field-eket a html-ben)
            const error = parentElement.querySelector('.error');//kiválasztjuk a parentelementen belül a error osztályal rendelkező
            if(error){//megnézzük hogy a error létezik-e a parentElementben
                error.innerHTML = "Kötelező megadni a tananyagot"//error tartalmát feltöltjük
            }valid = false;//valid értékét frissítjük falsera
        }
    return valid//vissza adjuk a valid értélét
}

//----------------------------------------------------------------------------------------- komplex validation
/**
 * egy komplex validáció amely meghívja a validateFormHtmlField függvényt
 * a függvény elösször megnézi hogy bármelyik cella üres-e vagy sem
 * ha nem akkor megnézzük az összes cellával hogy üresek-e és ha igen akkor
 * hiba üzenetett ki iratjuk
 * @param {HTMLElement} htmlElementEvszam2 ez a evszam2 input a formban
 * @param {HTMLElement} htmlElementMegnev2 ez a megnev2 input a formban
 * @param {HTMLElement} htmlElementTan2 ez a tan2 input a formban
 * @returns {boolean} ez a valid amely tovább engedélyezi hogy lefusson a esemény kezelő
 */
function simpleValidation(htmlElementEvszam2, htmlElementMegnev2, htmlElementTan2) {
    let valid = true; // a valid valtozo erteke igaz
    if(htmlElementEvszam2.value != "" || htmlElementMegnev2.value != "" || htmlElementTan2.value != ""){
        if(!validateFormHtmlField(htmlElementEvszam2, "A 2. évszám megadása kötelező ha létrehozunk 2. sort")){ // Ha a validateFormHtmlField fuggveny hamissal ter vissza a bementei lastName htmlElement eseten
            valid = false; // a valid valtozo erteket false-ra allitjuk
        }

        if(!validateFormHtmlField(htmlElementMegnev2, "A 2. esemény megadása kötelező ha létrehozunk 2. sort")){ // Ha a validateFormHtmlField fuggveny hamissal ter vissza a bementei lastName htmlElement eseten
            valid = false;  // a valid valtozo erteket false-ra allitjuk
        }

        if(!validateFormHtmlField(htmlElementTan2, "A 2. tananyag megadása kötelező ha létrehozunk 2. sort")){ // Ha a validateFormHtmlField fuggveny hamissal ter vissza a bementei lastName htmlElement eseten
            valid = false;  // a valid valtozo erteket false-ra allitjuk
        }
    }
    return valid; // vissyaterek a lokalis valid valtozo ertekevel
}

/**
 * ezzel a függvényel megnézzük a megadott htmlElement értékét
 * ha üres akkor a parent html elementbe error divjébe kiíratjuk a
 * megadott hibaüzenetett
 * @param {HTMLElement} inputhtmlElement a megadott htmlElement
 * @param {string} errormessage a megadott hiba üzenet 
 * @returns {boolean} ez a valid amely a simplevalidation-nél fontos mert ha hamis akkor azt jelenti hogy ott hiba van
 */
function validateFormHtmlField(inputhtmlElement, errormessage){ // definialjuk a validateFormHtmlField fuggvenyt
    let valid = true; // definialjuk a valid lokalis valtozot true ertekkel
    if(inputhtmlElement.value == ""){//ha tananyag2 üres akkor belép
        const parentElement = inputhtmlElement.parentElement//meghívjuk a parentelementet (field-eket a html-ben)
        const error = parentElement.querySelector('.error');//kiválasztjuk a parentelementen belül a error osztályal rendelkező
        if(error != null){//megnézzük hogy a error létezik-e a parentElementben
            error.innerHTML = errormessage//error tartalmát feltöltjük
        }valid = false;//valid értékét frissítjük falsera
    }

    return valid; // visszaterek a lokalis valid valtozoval, ami akkor hamis ha htmlelement nem ment at a validacion, egyebkent igazzal ter vissza
}
