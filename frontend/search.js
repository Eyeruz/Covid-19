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
                        
                         
            
}