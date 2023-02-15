async function search(){
    let countryName=cInput.value
    if(countryName){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&units=metric&appid=8ac5c4d57ba6a4b3dfcf622700447b1e`)
        response.json().then((data)=>{
            displayData(data);

        })

    }else{
        alert('Please enter a location')
    }
}

function displayData(datas){
    temp.innerHTML = datas.main.temp+' ℃'
    place.innerHTML = datas.name
    weather.innerHTML = datas.weather[0].description
    country.innerHTML = datas.sys.country

    Cloudy_data.innerHTML = datas.clouds.all+' %'
    Humidity_data.innerHTML = datas.main.humidity+' %'
    Wind_data.innerHTML = datas.wind.speed+' km/h'
    Pressure_data.innerHTML = datas.main.pressure+' Hg'

}