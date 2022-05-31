// import {axios} from 'axios';


const addCities = ()=>{
   
        const path ='addCities';

        const baseUrl = "http://localhost:2000/";

                const config ={
                    method: "GET",
                    url: `${baseUrl}${path}`,
                    // callback: console.log('data: ',data),
                    // data,
                } ;
        
                console.log('API config:',config);
                
            axios(config);
    }  


const init=() =>{
    const knopje = document.querySelector('button');
    // Eventlistner
    knopje.addEventListener('click', () =>addCities());
}


init();