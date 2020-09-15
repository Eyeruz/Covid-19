
const btn = () => document.getElementById('btn')


document.addEventListener("DOMContentLoaded", function(){
 onCall()
 myApi()
})

function onCall() {
btn().addEventListener("click", changeColor) 
}



function changeColor() {
   btn().style.color = "pink" 
btn().background = "white"
}

function myApi() {
    fetch("https://covid-193.p.rapidapi.com/statistics", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "9d691e50d2msh4aa205c2ff027f5p10f338jsn0e4e7c874dc3"
	}
})
.then(res => res.json())
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
}


