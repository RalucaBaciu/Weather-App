var theButton = document.getElementById("myButton");

theButton.addEventListener("click", getWeather, false); 


function getWeather() {
    
var userCity = document.getElementById("theCity").value;

//console.log(userCity);
    
var theAPICall = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + userCity + "&units=metric&APPID=185f6987e420ffe9a619332291f21445&cnt=16";
    
var myRequest = new XMLHttpRequest();
    
myRequest.open("GET", theAPICall, true);   
//console.log(myRequest);
    
myRequest.send();
    
myRequest.onload  = function() {
    
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        
        var myData  = JSON.parse(myRequest.responseText);
        console.log(myData);
        
        
        
        var day=new Date(myData.list[0].dt *1000);
        
        var options = {weekday:'long',year:'numeric', month:'long',day:'numeric'};
        
        var weatherImage = "http://openweathermap.org/img/w/"+myData.list[0].weather[0].icon+".png";
        
        document.getElementById("todayDate").innerHTML= day.toLocaleDateString("en-US",options);
        
        document.getElementById("imageToday").src = weatherImage;
        
        document.getElementById("highToday").innerHTML ="<strong>" +myData.list[0].temp.max+"&deg;C </strong>";
        
        document.getElementById("lowToday").innerHTML = "/"+myData.list[0].temp.min+" &deg;C";
        
        document.getElementById("dayDescription").innerHTML = "<strong>"+myData.list[0].weather[0].description.toUpperCase()+"</strong>";
        
        document.getElementById("main").innerHTML ="<strong>"+ myData.list["0"].weather["0"].main+"</strong>";
        document.getElementById("speed").innerHTML += myData.list["0"].speed+" km/h";
        document.getElementById("humidity").innerHTML += myData.list["0"].humidity+"%";
        document.getElementById("pressure").innerHTML += myData.list["0"].pressure+" mb";
        document.getElementById("clouds").innerHTML += myData.list["0"].clouds+"%";
        
        
}
}

        
}


                        /*Five Days Forecast*/
var x=0;




var fiveDays=document.getElementById("fiveDays");
var tenDays=document.getElementById("tenDays");
var sixteenDays=document.getElementById("sixteenDays");


        
function getForecastFive(x){
    
  

    var days=x;
        console.log(days);    
 var userCity = document.getElementById("theCity").value;

//console.log(userCity);
    
var theAPICall = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + userCity + "&units=metric&APPID=185f6987e420ffe9a619332291f21445&cnt=16";
    
var myRequest = new XMLHttpRequest();
    
myRequest.open("GET", theAPICall, true);   
//console.log(myRequest);
    
myRequest.send();
myRequest.onload=function(){
             if (myRequest.readyState == 4 && myRequest.status == 200) {
        
        var myData  = JSON.parse(myRequest.responseText);
        console.log(myData);
        
                 
        var section = document.getElementById("forecastContainer");
                 
        if(section.hasChildNodes()){
                     section.innerHTML="";
                 }
                 
         for(var i=0; i<days;i++){
             console.log(days);
          var divRow=document.createElement("div");
          divRow.setAttribute("class","row");
          section.appendChild(divRow);
          
          var col1=document.createElement("span");
          col1.setAttribute("class","c1");
          divRow.appendChild(col1);
          
          var c2Image=document.createElement("span");
          var col2=document.createElement("img");
          col2.setAttribute("class","c2");
          divRow.appendChild(c2Image);
          c2Image.appendChild(col2);
          
          var col3=document.createElement("span");
          col3.setAttribute("class","c3");
          divRow.appendChild(col3);
          
          var col4=document.createElement("span");
          col4.setAttribute("class","c4");
          divRow.appendChild(col4);
            
             var col5=document.createElement("span");
          col5.setAttribute("class","c5");
          divRow.appendChild(col5);
            
             var col6=document.createElement("span");
          col6.setAttribute("class","c6");
          divRow.appendChild(col6);
            
             var col7=document.createElement("span");
          col7.setAttribute("class","c7");
          divRow.appendChild(col7);
            
             var col8=document.createElement("span");
          col8.setAttribute("class","c8");
          divRow.appendChild(col8);
            
             var col9=document.createElement("span");
          col9.setAttribute("class","c9");
          divRow.appendChild(col9);
      }
                 
        
        //Forecast using a For loop
        
        var rows=document.getElementsByClassName("row");
        var c1=document.getElementsByClassName("c1");
        var c2=document.getElementsByClassName("c2");
        var c3=document.getElementsByClassName("c3");
        var c4=document.getElementsByClassName("c4");
        var c5=document.getElementsByClassName("c5");
        var c6=document.getElementsByClassName("c6");
        var c7=document.getElementsByClassName("c7");
        var c8=document.getElementsByClassName("c8");
        var c9=document.getElementsByClassName("c9");
        
        
        for(var i=0; i<rows.length;i++){
            
            var row=rows[i];
            
            var weatherImage = "http://openweathermap.org/img/w/"+myData.list[i].weather[0].icon+".png";
                
            var day=new Date(myData.list[i+1].dt *1000);
            
            //var image=document.createElement("img");
            var options = {weekday:'long',year:'numeric', month:'long',day:'numeric'};
            c1[i].innerHTML = day.toLocaleDateString("en-US",options);
            c2[i].src=weatherImage;
            
            //row.appendChild(image);
            
            c3[i].innerHTML="<strong>"+myData.list[i+1].temp.max+ "&deg;C </strong>"; 
            c4[i].innerHTML=" / "+myData.list[i+1].temp.min+ "&deg;C";
            
            c5[i].innerHTML="<br><strong>"+myData.list[i+1].weather["0"].main+"</strong>";
            c6[i].innerHTML="<br><strong>Wind speed: </strong>"+myData.list[i+1].speed+" km/h";
            c7[i].innerHTML= "<strong>Humidity: </strong>"+myData.list[i+1].humidity+"%";
            c8[i].innerHTML="<strong>Pressure:</strong> "+myData.list[i+1].pressure+" mb";
            c9[i].innerHTML="<strong>Cloud cover: </strong>"+myData.list[i+1].clouds+"% ";
        }
             }
        }
        }
/*
function removeCol(){
    var section = document.getElementById("forecastContainer");
                 
        
                 if(section.hasChildNodes()){
                     section.innerHTML="";
                 }
}
*/
