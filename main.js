import { getKeres } from "./asyncron.js";

console.log("Első üzenet")

getkeres("adatok.json",megjelenit1)

//Így nézki a szinkron hívás patchel...



console.log("Második üzenet")

getkeres("https://www.boredapi.com/api/activity",megjelenitBored)
getkeres("https://pokeapi.co/api/v2/pokemon/ditto",megjelenitPokemon)

function megjelenit1(adat){
    console.log(adat)
}

function megjelenitBored(adat){
    $("body").append(`<h2>Mit csinaljak ha unatkozok?: ${adat.activity}</h2>`)
    $("body").append(`<h2>Tevékenység: ${adat.activity}</h2>`)
    $("body").append(`<h2>Minimum létszám: ${adat.participants}</h2>`)
    $("body").append(`<p> ${adat.type}</p>`)

}

function megjelenitPokemon(adat){
    $("body").append(`<h2>Pokemon: ${adat.activity}</h2>`)
    $("body").append(`<h2>Név: ${adat.activity}</h2>`)
    $("body").append(`<h2>Minimum létszám: ${adat.participants}</h2>`)
    $("body").append(`<h2>Tevékenység: ${adat.type}</h2>`)

}