const express = require('express');
const request = require('request');
const hbs = require("hbs");

const app = express();
const port = 3000;
app.set("view engine", "hbs");

app.get('/weather/:city', (req, res) => {
    const city = req.params.city;
    try {
        const apiKey = '3b4a6ecbcb824610f9bb8f696fa2c299';

        request(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`,
            function (error, response, body) {
                if (error) {
                    res.status(500).send('Error fetching weather data');
                    return;
                }

                const data = JSON.parse(body);
                if (response.statusCode === 200) {
                    res.render("weatherIndex.hbs", {
                        city: city,
                        pressure: data.list[0].main.pressure,
                        humidity: data.list[0].main.humidity,
                        temperature: (data.list[0].main.temp - 273.15).toFixed(0)
                    });
                } else {
                    res.status(response.statusCode).send(data.message);
                }
            }
        );
    } catch (error) {
        res.status(500).send('Error fetching weather data');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
