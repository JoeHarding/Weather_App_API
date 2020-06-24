class Fetch {
  async getCurrent(input) {
    const myKey = "ccb637e79379def4b49c0958fcd81dd8";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
