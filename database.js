//IN THIS FILE IS DATABASE CREATION

//City database creation
const VisitedCitiesDatabase = {}

//City table in database
VisitedCitiesDatabase.cities = []

//Add cities to the city table in the database
VisitedCitiesDatabase.cities.push(
    {
        city: "Berlin",
        year_visited: "2014, 2016",
        img: "",
        five_attractions: "",
    },
    {
        city: "Paris",
        year_visited: "2016",
        img: "",
        five_attractions: "",
    },
    {
        city: "Dublin",
        year_visited: "2016",
        img: "",
        five_attractions: "",
    },
    {
        city: "Tonder",
        year_visited: "2016",
        img: "",
        five_attractions: "",
    },
    {
        city: "Liverpool",
        year_visited: "2016",
        img: "",
        five_attractions: "",
    },
    {
        city: "Rome",
        year_visited: "2014",
        img: "",
        five_attractions: "",
    },
    {
        city: "Barcelona",
        year_visited: "2014",
        img: "",
        five_attractions: "",
    },
    {
        city: "Milan",
        year_visited: "2014",
        img: "",
        five_attractions: "",
    },
    {
        city: "Savannah",
        year_visited: "2014, 2016",
        img: "",
        five_attractions: "",
    },
    {
        city: "New Orleans",
        year_visited: "2014, 2016",
        img: "",
        five_attractions: "",
    }
)
//Save database to local storage
localStorage.setItem(
    "VisitedCitiesDatabase",
    JSON.stringify(VisitedCitiesDatabase)
)