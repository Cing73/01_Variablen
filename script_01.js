"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Check 123");
// console.log(firstName);

/*****02 Deklaration + Wertzuweisung I *******/

// let firstName; // Deklaration (Definition)
// firstName = "Max"; // Wertzuweisung
// console.log(firstName); // Ausgabe

// let familyName = "Mütze"; // Deklaration + Wertzuweisung
// console.log(familyName); // Ausgabe
// console.log(firstName + " " + familyName); // Ausgabe

/*****03 Deklaration + Wertzuweisung II *******/

// let firstName,familyName;
// firstName = prompt("Bitte Vornamen eingeben:");
// familyName = prompt("Bitte Nachnamen eingeben:");
// console.log(firstName + " " + familyName); // Ausgabe

// JS ist eine untypisierte Sprache! | untyped
// let test;
// test = "Hi";
// test = 2;
// test = true;

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);

//***** 03a Konstanten *******/

// const test = "hallo";
// test = "hi"; KEINE neue Zuweisung zur LZ möglich! --> Fehler
// console.log(test);

//***** 04 Beispiel *******/

// Deklartion
let ageJohn, ageMark;
let birthYearJohn, birthYearMark;

let date = new Date();
let year = new Date().getFullYear();
console.log(year);

// Wertzuweisung
birthYearJohn = 1997;
birthYearMark = 1992;

// Berechnung
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe 
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);

