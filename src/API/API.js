import controller from "./abortController";

export default new class {
    #baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
    #API_KEY = "374b35b0ffb90f29e0e74dc84bef7725";
    #createErrorMessage = (message, cod) => ({message, cod});
    #networkErrorMessage = this.#createErrorMessage('Woops, something went wrong', 500);
    #currentAbortController = null;
    getWeatherByCityName = async (cityName) => {
        try {

            !!this.#currentAbortController&&this.#currentAbortController.abort();
            this.#currentAbortController = controller()
            const result = await fetch(`${this.#baseUrl}q=${cityName}&appid=${this.#API_KEY}`, {
                signal: this.#currentAbortController.signal
            });
            return result.json();
        } catch (e) {
            return this.#networkErrorMessage;
        }
    };
    getWeatherByCoordinates = async (coordinates = [null, null]) => {
        try {
            !!this.#currentAbortController&&this.#currentAbortController.abort();
            this.#currentAbortController = controller();
            const [lat, lon] = coordinates;
            if (!!lat && !!lon) {
                const result = await fetch(`${this.#baseUrl}lat=${lat}&lon=${lon}&appid=${this.#API_KEY}`, {
                    signal: this.#currentAbortController.signal
                });
                return result.json();
            } else {
                return this.#createErrorMessage('Invalid lat or lon', 100);
            }
        } catch (e) {
            return this.#networkErrorMessage;
        }
    };
}

