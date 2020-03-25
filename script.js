'use strict';

const api_key = "ClBlngjBMaZ70BqVixmvrY3eqGRtoLKXEPYcs0Vl";

function main(){
    $('#parkFinder').submit(e =>{
        e.preventDefault();

        const parkState = e.target.parkstate.value;
        const maxResults = e.target.number.value || 10;

        fetch(`https://developer.nps.gov/api/v1/places?stateCode=${parkState}&limit=${maxResults}&api_key=${api_key}`)
        .then(response => response.json())
        .then(responseJSON => displayResults(responseJSON));
    })
}

function displayResults (arr){
    // console.log(0arr);
    $('#results').empty();
    arr.data.map(park =>{
        $('#results').append(`
        <li>
            <h2 class="park-title">${park.title}</h2>
            <p class="park-desc">${park.listingDescription}</p>
            <a class="learn-more" href = "${park.url}" target="_blank">Learn More</a>
        </li>`)
    });

    $('.hidden').removeClass('hidden');
}

$(main);