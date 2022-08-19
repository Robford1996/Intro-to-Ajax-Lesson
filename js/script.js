// http://www.omdbapi.com/?i=tt3896198&apikey=7852cb

// console.log("connected")

// console.log("http://www.omdbapi.com/?i=tt3896198&apikey=7852cb&t=Frozen")

// console.log($.ajax("http://www.omdbapi.com/?i=tt3896198&apikey=7852cb&t=Frozen+2"))

const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=7852cb&t=";


//VARIABLES
const $title = $("#title")
const $year = $("#year")
const $rated = $("#rated")
const $actors = $("#actors")
const $awards = $("#awards")
const $input = $('input[type="text"]')
const $form = $("form")


//EVENT LISTENER

$form.on("submit", handleGetData)

function handleGetData(event){
    event.preventDefault()
    userInput = $input.val()

$.ajax(URL+userInput).then(function(data){
    console.log('movie is ready')
    console.log(data)
    $title.text(data.Title)
    $year.text(data.Year)
    $rated.text(data.Rated)
    $actors.text(data.Actors)
    $awards.text(data.Awards)
    $("main").append(`<img src="${data.Poster}" alt="${data.Title}"/>`)
}, function(error){
    console.log("we broke it")
    console.log(error)
})
}