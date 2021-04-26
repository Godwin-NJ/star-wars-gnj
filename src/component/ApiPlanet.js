import planetsData from '../planetsData'


 const ApiPlanet = async () => {  
        try {
            const response = await Promise.all(
            planetsData.map((planet) => {
            return fetch(planet).then(res => res.json())
            })
            )
            return response
        } catch (error) {
            console.log(error)
        }

        
}

export default ApiPlanet
