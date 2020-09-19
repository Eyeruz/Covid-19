class Search {
    static all = []
    constructor(country, continent, totalCases, recovered, newCases, 
        activeCases, newDeaths, totalDeaths, countryPopulation, 
        totalTests, date) {
            this.country = country;
            this.continent = continent
            this.totalCases = totalCases;
            this.recovered = recovered;
            this.newCases = newCases;
            this.activeCases = activeCases;
            this.newDeaths = newDeaths;
            this.totalDeaths = totalDeaths;
            this.countryPopulation = countryPopulation;
            this.totalTests = totalTests;
            this.date = date;
        }



 

   static allCases(value){
    
            const val = value.response.reduce((acc, val) => {
                return val.cases.total + acc
               }, 0)

               h3().innerText = val
               
            }

      static allDeaths(value){

    const val = value.response.reduce((acc, val) => {
         return val.deaths.total + acc
            }, 0)
         h32().innerText = val
 }

    static allRecovered(value){
         const val = value.response.reduce((acc, val) => {    
                 return val.cases.recovered + acc 
                }, 0)
                
                h33().innerText = val
                        
            
            }         
                        
            static search(value) {
    
                const searchValue = document.getElementById("countryName")
              const newValue = searchValue.value.charAt(0).toUpperCase() + searchValue.value.slice(1)
                const country = value.response.find(val => val.country === newValue)
                if(!country){
               alert("Invalid entry")
                }
        
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
        
        const p = document.createElement("h4")
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
        p9.innerText = 'Population: '
        p9.innerText += country.population 
        p3.innerText = 'Total Cases: '
        p3.innerText += country.cases.total
        p4.innerText = 'Recovered: '
        p4.innerText += country.cases.recovered
        p5.innerText = 'New Cases: '
        p5.innerText += country.cases.new
        p6.innerText = 'Active Cases: '
        p6.innerText += country.cases.active
        p8.innerText = 'Total Deaths: '
        p8.innerText += country.deaths.total
        p7.innerText = 'New Deaths: '
        p7.innerText += country.deaths.new 
        p10.innerText = 'Total Tests: '
        p10.innerText += country.tests.total
        p11.innerText = 'Date:  '    
        p11.innerText += country.day
        

     
        
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
        

        fetch('http://localhost:3000' + '/searches.json', {
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

  
      
          static userIn(data) {
      
            const userCountry = data.map(da => da.country)
           
            const userInfo = document.getElementById("userInfo")
      
            const p = document.createElement("p")
      
            p.innerText = userCountry
           
            userInfo.appendChild(p)
            }


        static userInfo() {   
              const baseUrl = 'http://localhost:3000'
          
              fetch(baseUrl + '/searches.json')
              .then(resp => {
                if (resp.status !== 200) {
                  throw new Error(resp.statusText);
                }
                return resp.json()
              })
              .catch(errors => console.log(errors))
              .then(data => Search.mostVs(data))
                }


            
                
          


            static mostVs(data) {
              // console.log(data)
              const country = data.map(da => da.country)
              // new Search(data).showing()      
             
          
            
            
                      let x = 1;
          let y = 0;
        let mostViewed;
        for (let i=0; i<country.length; i++)
{
        for (let j=i; j<country.length; j++)
        {
                if (country[i] == country[j])
                 y++;
                if (x<y)
                {
                  x=y; 
                  mostViewed = country[i];
                }
        }
        y=0;
}

                  const mostViews = document.getElementById("mostViews")
      
                  const p = document.createElement("p")
            
                  p.innerText = mostViewed
                 
                  mostViews.appendChild(p)
                
              } 
            }

             