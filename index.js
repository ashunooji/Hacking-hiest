let weather = {
    apiKey: "135ad169d2d20d724e16959552f1c548",
    fetchWeather: function(city, state) {
        fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" +
                city + "," + state +
                "&units=metric&appid=" +
                this.apiKey
            )
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.getElementById("Place").innerText = name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.getElementById("Temp").innerText = temp;
        document.getElementById("Humidity").innerText = humidity + "%";
        document.getElementById("Wind_speed").innerText = speed + " km/h";
        document.body.style.backgroundImage =
            "u rl('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function() {
        //this.fetchWeather(document.querySelector(".search-bar").value);
        if (document.getElementById("city").value.length == 0)
            alert("Please enter a country name");
        else
            this.fetchWeather(document.getElementById("city").value, document.getElementById("country").value);
    },
};

document.getElementById("search").addEventListener("click", function() {
    weather.search();
});


document
    .querySelector(".cityName")
    .addEventListener("keyup", function(event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });
document
    .querySelector(".countryCode")
    .addEventListener("keyup", function(event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });