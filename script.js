// 2. Ternary užduotis:

// 1. Parašykite variable su jūsų vardu. Pasiklauskite, jei vardo ilgis trumpesnis nei 5 simboliai - tegul išmeta konsolėje "Short Name", kitaip - "Long Name".

// 2. Sukurkite du kintamuosius: 'clientAge' ir 'legalAge'. Patikriname ar vartotojas gali vairuoti automobilį - t.y. clientAge didesnis arba lygus legalAge. Jei taip - išmeta 'Can Drive', kitaip 'Can't drive'.

// 3. Ahh, o jeigu antrame pratime įvesti -1 kaip amžių? Darom double ternary operator - t.y. operatorius operatoriuje. Pirma paklausiame - jei amžius mažesnis nei 0; arba didesnis nei 120 - išmetame "Invalid Age". Jei vis tik ne - tada false statement'e bus dar vienas operatorius su antru pratimo klausimu.

// 4. Sukurkite variable 'phone', kuris būtų lygus 'iPhone'. Taip pat sukurkite variable isIphoneUser, kuris turėtų būti prilygintas Boolean reikšmei (t.y. true arba false) priklausomai ar phone yra 'iPhone' ar bet koks kitas


//pirma uzduotis

var vardas = "Iveta"
vardas == "Iveta" ? alert("Long Name") : alert("Short Name");
console.log(vardas)

// //antra uzduotis

var clientAge = 18;
var legalAge = 18;
var result = (clientAge >= legalAge )? alert ("can Drive") : alert ("Can't drive");

console.log(result);

//trecia uzduotis

var clientAge = -1;

var legalAge = 18;

var result = (clientAge < 0 || clientAge > 120) ? "Invalid Age" : (clientAge >= legalAge) ? "can drive" : "can't drive"
console.log(result)

// //ketvirta uzduotis

var phone = "iPhone"
 var isIphoneUser = phone == "iPhone" ? alert("tru") : alert("false")
console.log(phone)