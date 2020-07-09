export default new class{
    _baseUrl =  "https://api.openweathermap.org/data/2.5/weather?";
    _API_KEY = "374b35b0ffb90f29e0e74dc84bef7725";
    getWeatherByCityName = async (cityName) => {
        console.log(this)
        const result = await fetch(`${this._baseUrl}q=${cityName}&appid=${this._API_KEY}`);
        console.log(result)
        return result.json();
    };
    getWeatherByCoordinates = async (coordinates = [null, null]) => {
        const [lat, lon] = coordinates;
        if (!!lat && !!lon) {
            const result = await fetch(`${this._baseUrl}lat=${lat}&lon=${lon}&appid=${this._API_KEY}`);
            return result.json();
        }else{
            throw new Error('Invalid lat or lon');
        }
    };

}//Moscow

