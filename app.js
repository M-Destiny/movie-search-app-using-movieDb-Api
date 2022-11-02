//http://api.themoviedb.org/3/search/movie?&api_key=[API KEY]&query=avengers

var input = document.getElementById('input').value;
var submit = document.getElementById('submit')
var api = "http://api.themoviedb.org/3/search/movie?&api_key=[API KEY]&query="



submit.onclick = function(){


    fetch('https://api.themoviedb.org/3/search/movie?api_key=[API KEY]&language=en-US&query='+input+'&page=1&include_adult=false')
        .then(val => val.json())
        .then(data => {
            console.log(data.results);
            var name = data.results[0].title;
            var desc = data.results[0].overview;
            var img = "https://images.tmdb.org/t/p/w500" + data.results[0].poster_path;
            
            document.getElementById('movie').innerHTML = `
            <img src="${img}" alt="" class="img-fluid">
            <h1 class="text-center text-uppercase"> ${name}</h1>
            <p>${desc}</p>

            
            `


        })

}
