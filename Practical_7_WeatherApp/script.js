document.getElementById('searchBtn').addEventListener('click', fetchWeather);

async function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    const resultDiv = document.getElementById('weatherResult');
    
    if (!city) {
        resultDiv.innerHTML = '<p style="color:red;">Please enter a city name.</p>';
        return;
    }
    
    resultDiv.innerHTML = '<p>Loading...</p>';
    
    try {
        // Using a free mock API or geocoding for demonstration
        // Note: Real implementation would use an API key from OpenWeatherMap etc.
        const response = await fetch(`https://wttr.in/${city}?format=j1`);
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        
        const data = await response.json();
        const currentCondition = data.current_condition[0];
        const tempC = currentCondition.temp_C;
        const desc = currentCondition.weatherDesc[0].value;
        
        resultDiv.innerHTML = `
            <h3>${city.toUpperCase()}</h3>
            <p><strong>Temperature:</strong> ${tempC}°C</p>
            <p><strong>Condition:</strong> ${desc}</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p style="color:red;">Error fetching weather data. Please try again.</p>`;
    }
}
