
const btn = () => document.getElementById('btn')
const totalR = () => document.getElementById('totalR')
const totalD = () => document.getElementById('totalD')
const totalC = () => document.getElementById('totalC')
const h3 = () => document.getElementById('allCases')
const h32 = () => document.getElementById('allDeaths')
const h33 = () => document.getElementById('allRecovered')

document.addEventListener("DOMContentLoaded", function(){
 onCall()
 myApi()
 myApi2()
 blink()
 blink2()
 myApi3()
 blink3()
})

function onCall() {
btn().addEventListener("click", changeColor) 

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

function blink() {
    const h3 = document.getElementById('allCases');

    setInterval(function() {
        h3.style.display = (h3.style.display == 'none' ? '' : 'none');
    }, 1000);

}



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
       addDeaths(val)

    }

    function addDeaths(value){
        h32().innerText = value

    }

    function blink2() {
        const h3 = document.getElementById('allDeaths');
    
        setInterval(function() {
            h3.style.display = (h3.style.display == 'none' ? '' : 'none');
        }, 1000);
    
    }


    function myApi3(){
        fetch("https://covid-193.p.rapidapi.com/statistics", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "9d691e50d2msh4aa205c2ff027f5p10f338jsn0e4e7c874dc3"
        }
    })
    .then(res => res.json())
    .then(value=> {
        allRecovered(value);
    })
    .catch(err => {
        console.log(err);
    });
    }
    

    function allRecovered(value){
    debugger;
        const val = value.response.reduce((acc, val) => {
            return val.cases.recovered + acc
           }, 0)
           addRecovered(val)
    
        }
    
        function addRecovered(value){
            h33().innerText = value
    
        }
    
        function blink3() {
            const h3 = document.getElementById('allRecovered');
        
            setInterval(function() {
                h3.style.display = (h3.style.display == 'none' ? '' : 'none');
            }, 1000);
        
        }






