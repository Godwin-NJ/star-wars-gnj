const Planet = ({planetDisplay}) => {
    return ( 
        <div className="flex flex-wrap ">
            {planetDisplay.map((planet,i) => {
                console.log(planet) 
                const{name, climate,terrain, population,residents,films,url, created} 
                = planet
                return(
                    <div key={i} className="grow ma4" >
                        <article className="center mw5 pa4 h-100 mw6-ns br3 hidden ba b--black-10 mv4">
                        <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3 tc">
                            {name}<br/>
                            {created}
                        </h1>
                        <div className="pa3 tc  bt b--black-10">
                            <h4 className="ttu tc garamond ">{climate}</h4>  
                            <div className="f6 f5-ns lh-copy measure">
                              {terrain}<br/>
                              {population}<br/>
                              {films.map((film,i) => {
                                  return(
                                      <ul key={i}>
                                      <li>{film}</li>
                                     </ul>
                                  )
                              })}<br/>
                              {url}
                            
                            </div>
                        </div>
                        </article>
                        
                    </div>
                )
                
            })}
        </div>
     );
}
 
export default Planet;