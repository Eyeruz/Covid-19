
const btn = () => document.getElementById('btn')
const totalR = () => document.getElementById('totalR')
const totalD = () => document.getElementById('totalD')
const totalC = () => document.getElementById('totalC')
const h3 = () => document.getElementById('allCases')
const h32 = () => document.getElementById('allDeaths')
const h33 = () => document.getElementById('allRecovered')
const form = () => document.getElementById("find-cases")
const allInputs = () => document.getElementById("all-inputs")

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
form().addEventListener("submit", submit)

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
console.log(value)
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

        function myApi4(){
            fetch("https://covid-193.p.rapidapi.com/statistics", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "9d691e50d2msh4aa205c2ff027f5p10f338jsn0e4e7c874dc3"
            }
        })
        .then(res => res.json())
        .then(value=> {
            search(value);
        })
        .catch(err => {
            console.log(err);
        });
        }

      function submit(e) {
      e.preventDefault()
    myApi4()
      }

      function search(value) {
        const searchValue = document.getElementById("countryName")
        const country = value.response.find(val => val.country == searchValue.value)
 
        
const cName = country.country
const cCont = country.continent
const cCases = country.cases.total
const cCasesR = country.cases.recovered
const cCasesN = country.cases.new
const cCasesA = country.cases.active
const cNewD = country.deaths.new 
const cTotalD = country.deaths.total
const cPop = country.population 
const cTest = country.tests.total

debugger;
const ser = document.getElementById("searchR")

const h4 = document.createElement("p")
const h41 = document.createElement("p")
const h42 = document.createElement("p")
const h42 = document.createElement("p")
const h42 = document.createElement("p")
const h42 = document.createElement("p")

h4.innerText = country.country
h41.innerText = country.continent
h42.innerText = country.cases.total

ser.appendChild(h4)
ser.appendChild(h41)
ser.appendChild(h42)

resetInputs()

resetForm()
    }

    function resetInputs() {
        const searchValue = document.getElementById("countryName")
        const ser = document.getElementById("searchR")
        searchValue.value = ""

  
      }

      function resetForm() {
          if(form().value ){
                form().value = ""    
              }
              debugger;
      }


  
//       function formm() {
//  const h2 = document.createElement("h2")
//  h2.innerText = 
// allInputs().appendChild(h2)
//       }








