function showWeather(sol, obj){
    document.getElementById("temperature").innerHTML = obj[sol]["AT"]["av"];
    document.getElementById("windSpeed").innerHTML = obj[sol]["HWS"]["av"];
    document.getElementById("season").innerHTML = obj[sol]["Season"];
}


function refresh(){

    console.log("Send request");
    var NASAjson = new XMLHttpRequest(); 
    
    NASAjson.onload = function() {

        if (this.readyState === 4 && this.status === 200)
        {
            var obj = JSON.parse(this.responseText);
            var solIndex = obj["sol_keys"].length - 1;
            var sol = obj["sol_keys"][solIndex];
            showWeather(sol, obj);
        }
    }

    NASAjson.open('GET', 'https://api.nasa.gov/insight_weather/?api_key=xaLa8qefOGafWf42GncNT7wtZjNiPaQQrT9NQoMe&feedtype=json&ver=1.0');
    
    NASAjson.send();
}