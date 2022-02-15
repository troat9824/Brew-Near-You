function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
$('#brewerform') .on("submit", function (events) {
    events.preventDefault()
    var city_input = $('#brewer').val();
    fetch("https://api.openbrewerydb.org/breweries?by_city=" + city_input, {
        "method": "GET",
        "headers": {
        }
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            const cities = JSON.parse(localStorage.getItem("cities")) || []
            if(!cities.includes(city_input)){
                cities.push(city_input)
            }
            localStorage.setItem("cities",JSON.stringify(cities));
            console.log("cities");

         
            
            $("#response").html("<h1>Breweries in " + city_input + "</h1>")
            data.forEach(function (obj) {
                var brewery_name = obj.id
                brewery_name = brewery_name.replaceAll("-", " ")
                brewery_name = toTitleCase(brewery_name);
                $("#response").append(`
                <p> <strong>${obj.name}</strong> <br>
                    Type of Brewery: ${obj.brewery_type} <br>
                    ${obj.street}, ${obj.city}, ${obj.state}, ${obj.postal_code} <br>
                    ${obj.phone}
                <a href =${obj.website_url || "#"} target="_blank"> 
                    <p>${brewery_name}  </p>
                </a>
                <a href="https://bing.com/maps/default.aspx?rtp=adr.${obj.street},${obj.city},${obj.state}" target="_blank">
                    <button>Directions</button>
                </a>

                `);
                console.log(obj.id);


            });

        })
        type='text/javascript'>
            function loadMapScenario() {
                var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
                    /* No need to set credentials if already passed in URL */
                    showSearchBar: true
                });
                
            }

        
});
