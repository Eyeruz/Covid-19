
const btn = () => document.getElementById('btn')
const totalR = () => document.getElementById('totalR')
const totalD = () => document.getElementById('totalD')
const totalC = () => document.getElementById('totalC')
const h3 = () => document.getElementById('allCases')

document.addEventListener("DOMContentLoaded", function(){
 onCall()
 myApi()
 myApi2()
})

function onCall() {
btn().addEventListener("click", changeColor) 
h3().
}



function changeColor() {
   btn().style.color = "green" 

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
.then(value=> {
    allCases(value);
})
.catch(err => {
	console.log(err);
});
}

function allCases(value){
    
const val = value.response.reduce((acc, val) => {
    return val.cases.total + acc
   }, 0)
   addCases(val)
}


function addCases(value) {
h3().innerText = value

}

fuction


function myApi2() {
    fetch("https://covid-193.p.rapidapi.com/statistics", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "9d691e50d2msh4aa205c2ff027f5p10f338jsn0e4e7c874dc3"
	}
})
.then(res => res.json())
.then(value=> {
    allDeaths(value);
})
.catch(err => {
	console.log(err);
});
}

function allDeaths(value){
    debugger;

    const val = value.response.reduce((acc, val) => {
        return val.deaths.total + acc
       }, 0)
       

    }



