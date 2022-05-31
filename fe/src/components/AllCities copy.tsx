import React from 'react';
import { useApi } from "../shared/API";
import { City } from "../types/City";


export const AllCities = () => {

const [cities, setCities] = useApi<City[]>('allCities'); 

// Wait till cities is there
if(!cities){
  return (<p>Lade....</p>)}
  
  return (
    <div className="m-3">
    < div className="container">
    <>
        <div className="row p-3 mb-2 bg-primary text-white">
        <div className="col-sm">
          <h3 >City</h3>
        </div>
        <div className="col-sm">
          <h3>Country</h3>
        </div>
        <div className="col-sm">
          <h3>Founded</h3>
        </div>
        <div className="col-sm">
          <h3>Citizens</h3>
        </div>
        </div>
        </>
        {cities.map((city, index)=>  
          <>
        <div key={index} className="row p-3 mb-1 bg-light text-dark">
        <div className="col-sm ">
          <p  >{city.name}</p>
        </div>
        <div className="col-sm">
          <p>{city.country}</p>
        </div>
        <div className="col-sm">
          <p>{new Date(city.founded).toLocaleDateString()}</p>
        </div>
        <div className="col-sm">
          <p>{city.habitants}</p>
        </div>
        </div>
        </>
        )} 
    </div>
    </div>
  );
}