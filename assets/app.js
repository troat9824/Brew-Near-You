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
            $("#response").html("<h1>Breweries in " + city_input + "</h1>")
            data.forEach(function (obj) {
                var brewery_name = obj.id
                brewery_name = brewery_name.replaceAll("-", " ")
                brewery_name = toTitleCase(brewery_name);
                $("#response").append(`
                <a href =${obj.website_url || "#"}> 
                    <p>Name:  ${brewery_name}  </p>
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