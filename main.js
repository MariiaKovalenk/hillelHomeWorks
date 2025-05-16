const apiKey = 'b45497b5437bc829b3006e2009e14dc6';
const city = 'Kyiv';

function updateTime() {
    const now = new Date();
    document.getElementById('date').textContent = now.toLocaleDateString('uk-UA', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('time').textContent = now.toLocaleTimeString('uk-UA', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

function getWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`)
        .then(res => res.json())
        .then(data => {
            const { main, weather, wind } = data;
            const { temp, feels_like, humidity, pressure } = main;
            const { description, icon } = weather[0];
            const windSpeedKmh = Math.round(wind.speed * 3.6); // м/с → км/год

            document.getElementById('temp').textContent = `${Math.round(temp)}°C`;
            document.getElementById('description').textContent =
                description.charAt(0).toUpperCase() + description.slice(1);
            document.getElementById('feels_like').textContent = `Відчувається як: ${Math.round(feels_like)}°C`;
            document.getElementById('humidity').textContent = `Вологість: ${humidity}%`;
            document.getElementById('pressure').textContent = `Тиск: ${pressure} hPa`;
            document.getElementById('wind').textContent = `Вітер: ${windSpeedKmh} км/год`;
            document.getElementById('icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        })
        .catch(err => {
            alert('Не вдалося отримати дані про погоду.');
            console.error(err);
        });
}

// Запускаємо після завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
    updateTime();
    getWeather();
    setInterval(updateTime, 60000); // Оновлення часу щохвилини
});