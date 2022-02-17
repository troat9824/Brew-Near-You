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
    var cityInput = $('#brewer').val();
    fetch("https://api.openbrewerydb.org/breweries?by_city=" + cityInput, {
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
            if(!cities.includes(cityInput)){
                cities.push(cityInput)
            }
            localStorage.setItem("cities",JSON.stringify(cities));
            console.log("cities");

         
            
            $("#response").html("<h1>Breweries in " + cityInput + "</h1>")
            data.forEach(function (obj) {
                var breweryName = obj.id
                breweryName = breweryName.replaceAll("-", " ")
                breweryName = toTitleCase(breweryName);
                $("#response").append(`
                <div class="breweryBox">
                    <a href =${obj.website_url || "#"} target="_blank"> 
                    <p>${breweryName}  </p>
                    </a>
                        Type of Brewery: ${obj.brewery_type} <br>
                        ${obj.street}, ${obj.city}, ${obj.state}, ${obj.postal_code} <br>
                        ${obj.phone} <br>

                        <a href="https://bing.com/maps/default.aspx?rtp=adr.${obj.street},${obj.city},${obj.state}" target="_blank">
                        <button>Directions</button>
                        </a>
                    </p>
                </div>

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
