// const URL ="https://api.openweathermap.org/data/2.5/weather?lat=21.7645&lon=72.1519&appid=ed3f972bcd175474428f508b4f70d9a5";
// const URL_2 = "http://api.openweathermap.org/geo/1.0/direct?q=Bhavnagar&limit=5&appid=ed3f972bcd175474428f508b4f70d9a5";

let input = document.querySelector("input");
 let button = document.querySelector(".icon");
 let c_name = document.querySelector("#city_name");
 let temp = document.querySelector("#temp");
 let humi = document.querySelector("#humi");
 let wind_para = document.querySelector("#wind");
 let main_img= document.querySelector("#main_img");

    button.addEventListener("click",async()=> {
       let city = input.value;
       const URL_2 = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=ed3f972bcd175474428f508b4f70d9a5`;
       let response_2=await fetch(URL_2);
       let data_2 = await response_2.json();
       let lat = data_2[0].lat;
       let lon = data_2[0].lon;
       const URL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ed3f972bcd175474428f508b4f70d9a5`;
       let response=await fetch(URL);
       let data = await response.json();
      //  console.log(data);
       let city_name =data.name;
       c_name.innerText = city_name;
       let temp_main =data.main;
       let kel =temp_main.temp;
       let final_temp =kel-273.15;
       let two_point = Math.round(final_temp * 100.0) / 100.0;
       if (final_temp<=20){
        main_img.src="rain.png";
       }else if (final_temp<=15){
        main_img.src="gloomy_weather.png";
       }
       else{
        main_img.src="normal_weather.png";   
       }
       temp.innerText=`${two_point}°C`;
       let humidity = temp_main.humidity;
       let two_point_humi = Math.round(humidity * 100.0) / 100.0;
       humi.innerText=`${two_point_humi}%`;
       let wind =data.wind;
       let wind_speed = wind.speed*10;
       let two_point_wind = Math.round(wind_speed * 100.0) / 100.0;
       wind_para.innerText=`${two_point_wind}%`
    });


    