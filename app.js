async function fetchWeather() {
    try {
        const cityName = document.getElementById('cityInput').value;
        const apiUrl = `http://www.7timer.info/bin/astro.php?lon=0&lat=0&ac=0&lang=en&unit=metric&output=internal&tzshift=0&city=${cityName}`;
        const response = await fetch(apiUrl);
        const data = await response.text();
        document.getElementById('weatherForecast').innerHTML = `<img src="${data}" alt="Weather Forecast">`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherForecast').innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
    }
}

window.onload = fetchWeather;
