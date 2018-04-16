//IN THIS FILE IS DATABASE CREATION

//City database creation
const VisitedCitiesDatabase = {}

//City table in database
VisitedCitiesDatabase.cities = []

//Add cities to the city table in the database
VisitedCitiesDatabase.cities.push(
    {
        city: "Berlin",
        continent: "Europe",
        year_visited: "2014, 2016",
        img: "",
        five_attractions: "",
    },
    {
        city: "Paris",
        continent: "Europe",
        year_visited: "2016",
        img: "",
        five_attractions: "",
    },
    {
        city: "Dublin",
        continent: "Europe",
        year_visited: "2016",
        img: "",
        five_attractions: "",
    },
    {
        city: "Tonder",
        continent: "Europe",
        year_visited: "2016",
        img: "",
        five_attractions: "",
    },
    {
        city: "Liverpool",
        continent: "Europe",
        year_visited: "2016",
        img: "",
        five_attractions: "",
    },
    {
        city: "Rome",
        continent: "Europe",
        year_visited: "2014",
        img: "",
        five_attractions: "",
    },
    {
        city: "Barcelona",
        continent: "Europe",
        year_visited: "2014",
        img: "",
        five_attractions: "",
    },
    {
        city: "Milan",
        continent: "Europe",
        year_visited: "2014",
        img: "",
        five_attractions: "",
    },
    {
        city: "Savannah",
        continent: "North America",
        year_visited: "1996-1998",
        img: "",
        five_attractions: "",
    },
    {
        city: "New Orleans",
        continent: "North America",
        year_visited: "2004, 2009, 2016",
        img: "",
        five_attractions: "",
    }
)
//Save database to local storage
localStorage.setItem(
    "VisitedCitiesDatabase",
    JSON.stringify(VisitedCitiesDatabase)
)