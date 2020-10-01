'use strict'

/*
    Put your JavaScript here
*/

function app() {
    const select = document.getElementById("selectMovie");
    const movieDetail = document.getElementById("movieDetail");

    select.addEventListener("change", () => {
        fetchMovie(select.value);
    });

    function fetchMovie(select) {
        if (select) {
            movieDetail.style.display = "flex"
            fetch(`http://www.omdbapi.com/?apikey=7efa09a2&t=${select}`)
                .then(res => res.json())
                .then(addToDom);
        }
    };

    function addToDom(data) {
        movieDetail.innerHTML = `
        <img class="poster" src=${data.Poster}>
        <h2> ${data.Title} </h2>
        <p > ${data.Plot} </p>
        `;
    };
};

app();