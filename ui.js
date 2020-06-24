class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "London";
  }

  populateUI(data) {

    this.uiContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 20rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title"><strong>${data.name}</strong></h5>
                <h6 class="card-subtitle mb-2 text-muted">Highs = ${data.main.temp_max}. Lows = ${data.main.temp_min}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Humidity = ${data.main.humidity}.</h6>
                <h6 class="card-subtitle mb-2 text-muted">Wind Speed = ${data.wind.speed}.</h6>
                 
                <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}</p>
                
            </div>
        </div>
        
        
        `;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}
