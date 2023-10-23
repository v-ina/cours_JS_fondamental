// Exo_Q13. compare la popultaion de deux villes, et affiche nom de ville qui a plus de population.
/*
const town1 = {
    name: 'Bordeaux' ,
    population: 300000,
    superficy: 50
}
const town2 = {
    name: 'Lyon' ,
    population: 500000,
    superficy: 48
}
const town3 = {
    name: 'Paris' ,
    population: 2000000,
    superficy: 105
}

// A.
compareTwoTown (town1, town2)
compareTwoTown (town1, town3)
compareTwoTown (town3, town2) 

function compareTwoTown (city1, city2){
    if (city1.population > city2.population){
        console.log(city1.name)
    } else {
        console.log(city2.name)
    }
}
*/



// ----------------------------------------------------------------
// Exo_Q14. compare densité de population de deux villes, et affiche nom de ville qui a plus de densite.
/*
const town1 = {
    name: 'Bordeaux' ,
    population: 300000,
    superficy: 50
}
const town2 = {
    name: 'Lyon' ,
    population: 500000,
    superficy: 48
}
const town3 = {
    name: 'Paris' ,
    population: 2000000,
    superficy: 105
}

// A. 
compareDensity (town1,town2)
compareDensity (town1,town3)
compareDensity (town2,town3)

function compareDensity (city1,city2){
    if (city1.population/city1.superficy > city2.population/city2.superficy){
        console.log(city1.name, city1.population/city1.superficy) 
    } else {
        console.log(city2.name, city2.population/city2.superficy)
    }
}
*/



// ----------------------------------------------------------------
// Exo_ Q15. écrire la fonction qui compare 2 villes en paramètres et qui me retourne celle qui a le plus de jumelages.
/*
const town1 = {
    name: 'Bordeaux' ,
    population: 300000,
    superficy: 50,
    twinnings : ['berlin', 'londres', 'madrid', 'libourne']
}
const town2 = {
    name: 'Lyon' ,
    population: 500000,
    superficy: 48,
    twinnings : ['berlin', 'londres', 'madrid', 'libourne','rennes', 'varsovie']
}
const town3 = {
    name: 'Paris' ,
    population: 2000000,
    superficy: 105,
    twinnings : ['berlin', 'londres', 'madrid', 'libourne','rochefort']
}

// A.
compareTwins (town1, town2)
compareTwins (town1, town3)
compareTwins (town3, town2)

function compareTwins (city1, city2){
    if (city1.twinnings.length > city2.twinnings.length) {
        console.log(city1.name)
    } else {
        console.log(city2.name)
    }
}
*/