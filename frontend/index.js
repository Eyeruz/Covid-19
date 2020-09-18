
const btn = () => document.getElementById('btn')
const totalR = () => document.getElementById('totalR')
const totalD = () => document.getElementById('totalD')
const totalC = () => document.getElementById('totalC')
const h3 = () => document.getElementById('allCases')
const h32 = () => document.getElementById('allDeaths')
const h33 = () => document.getElementById('allRecovered')
const form = () => document.getElementById("find-cases")
const allInputs = () => document.getElementById("all-inputs")
const searchValue = () => document.getElementById("countryName")


document.addEventListener("DOMContentLoaded", function(){
 onCall()
 myApi()
 myApi2()
 blink()
 blink2()
 myApi3()
 blink3()
 getRails()
 userInfo()

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
.then(value => { 
    Search.allCases(value)
    ;
})
.catch(err => {
	console.log(err);
});
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
    Search.allDeaths(value);
})
.catch(err => {
	console.log(err);
});
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
        Search.allRecovered(value);
    })
    .catch(err => {
        console.log(err);
    });
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
        .then(value => {
            Search.search(value);
        })
        .catch(err => {
            console.log(err);
        });
        }

    function submit(e) {
      e.preventDefault()
         myApi4()
 
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
        .then(data => Search.userInfo(data))
      }

function userInfo() {   
    const baseUrl = 'http://localhost:3000'

    fetch(baseUrl + '/searches.json')
    .then(resp => {
      if (resp.status !== 200) {
        throw new Error(resp.statusText);
      }
      return resp.json()
    })
    .catch(errors => console.log(errors))
    .then(data => Search.mostViews(data))
   
        }
