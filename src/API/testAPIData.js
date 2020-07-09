export default new Promise(
    resolve => {
        setTimeout(()=>resolve(
            JSON.stringify(
                {
                    "coord": {
                        "lon": 53,
                        "lat": 37
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "scattered clouds",
                            "icon": "03d"
                        }
                    ],
                    "base": "stations",
                    "main": {
                        "temp": 302.15,
                        "feels_like": 305.2,
                        "temp_min": 302.15,
                        "temp_max": 302.15,
                        "pressure": 1006,
                        "humidity": 70
                    },
                    "visibility": 10000,
                    "wind": {
                        "speed": 3.1,
                        "deg": 320
                    },
                    "clouds": {
                        "all": 40
                    },
                    "dt": 1594040602,
                    "sys": {
                        "type": 1,
                        "id": 7498,
                        "country": "IR",
                        "sunrise": 1593998070,
                        "sunset": 1594050641
                    },
                    "timezone": 14400,
                    "id": 129933,
                    "name": "Jūybār",
                    "cod": 200
                }
            )
        ),5000)
    }
)
