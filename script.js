async function getWeather() {
    const location = document.getElementById('location').value;
    if (!location) {
        alert("Please enter a location");
        return;
    }

    const apiKey = "dfbae1567d0c47f08fb110925250303"; // Your API key
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            alert(data.error.message);
            return;
        }

        const temperature = data.current.temp_c;
        const condition = data.current.condition.text;
        const city = data.location.name;

        document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
        document.getElementById('condition').textContent = `Condition: ${condition}`;
        document.getElementById('city').textContent = `Location: ${city}`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to retrieve weather data. Please try again later.');
    }
}
