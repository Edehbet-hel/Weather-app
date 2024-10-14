

// Create a constant for the API key
const api_key = '896a21f116550292395716f11659121b';

// Add event listener to the search button
document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name');
    }
});

// Function to fetch weather data
function getWeather(city) {
    // Construct the API URL with the city and API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    // Fetch data from the API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Check if the response code is successful (200)
            if (data.cod === 200) {
                // Display the weather information
                document.getElementById('weather-info').classList.remove('hidden');
                document.getElementById('city-name').textContent = data.name;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
            } else {
                // Show an alert if the city is not found
                alert('City not found!');
            }
        })
        .catch(error => {
            // Handle errors during the fetch
            console.error('Error fetching weather data:', error);
            alert('Unable to fetch weather data.');
        });
}
