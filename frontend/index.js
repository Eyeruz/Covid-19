
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
 getRails()

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
    
        const baseUrl = 'http://localhost:3000'
        const searchValue = document.getElementById("countryName")
        const country = value.response.find(val => val.country == searchValue.value)

const strongParams = {
           search: { 
        country: country.country,
        continent: country.continent,
        countryPopulation: country.population, 
        totalCases: country.cases.total,
        recovered: country.cases.recovered,
        newCases: country.cases.new,
        activeCases: country.cases.active,
        newDeaths: country.deaths.new,
        totalDeaths: country.deaths.total,
        countryPopulation: country.population, 
        totalTests: country.tests.total,
        date: country.day
}
      }


const ser = document.getElementById("searchR")

const p = document.createElement("p")
const p2 = document.createElement("p")
const p3 = document.createElement("p")
const p4 = document.createElement("p")
const p5 = document.createElement("p")
const p6 = document.createElement("p")
const p7 = document.createElement("p")
const p8 = document.createElement("p")
const p9 = document.createElement("p")
const p10 = document.createElement("p")
const p11 = document.createElement("p")

p.innerText = country.country
p2.innerText = country.continent
p3.innerText = country.cases.total
p4.innerText = country.cases.recovered
p5.innerText = country.cases.new
p6.innerText = country.cases.active
p7.innerText = country.deaths.new 
p8.innerText = country.deaths.total
p9.innerText = country.population 
p10.innerText = country.tests.total
p11.innerText = country.day



ser.appendChild(p)
ser.appendChild(p2)
ser.appendChild(p3)
ser.appendChild(p4)
ser.appendChild(p5)
ser.appendChild(p6)
ser.appendChild(p7)
ser.appendChild(p8)
ser.appendChild(p9)
ser.appendChild(p10)

ser.appendChild(p11)


fetch(baseUrl + '/searches.json', {
    method: "post",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(strongParams)
  })
    .then(resp => resp.json())
    .then(country => { 
    (country);
    })

resetInputs()

    }
 
   function resetInputs() {
        const searchValue = document.getElementById("countryName")
        const ser = document.getElementById("searchR")
        searchValue.value = ""
     }

      function getRails() {
        const baseUrl = 'http://localhost:3000'

        fetch(baseUrl + '/searches.json')
        .then(resp => {
          if (resp.status !== 200) {
            throw new Error(resp.statusText);
          }
          return resp.json()
        })
        .catch(errors => console.log(errors))
        .then(data => userInfo(data))
     

      }


      function userInfo(data) {

      const userCountry = data.map(da => da.country)

      const userInfo = document.getElementById("userInfo")

      const p = document.createElement("p")

      p.innerText = userCountry
     
      userInfo.appendChild(p)



      }

        









