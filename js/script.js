// http://www.omdbapi.com/?i=tt3896198&apikey=7852cb

// console.log("connected")

// console.log("http://www.omdbapi.com/?i=tt3896198&apikey=7852cb&t=Frozen")

// console.log($.ajax("http://www.omdbapi.com/?i=tt3896198&apikey=7852cb&t=Frozen+2"))

const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=7852cb&t=frozen";

$.ajax(URL).then(function(data){
    console.log('movie is ready')
    console.log(data)
}, function(error){
    console.log("we broke it")
    console.log(error)
})