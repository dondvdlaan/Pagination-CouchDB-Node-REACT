// import {axios} from 'axios';

const nrOfCities = 20000;

const addCity = ()=>{
    const requestTasks = [];

    for (let counter = 0; counter < nrOfCities; counter++) {
        
        const path ='addCity';

        const data = {name: `City ${counter}`,
        country: `Country ${counter}`,
        founded: new Date(),
        habitants: counter * 1000
        }
        
        const baseUrl = "http://localhost:2000/";

                const config ={
                    method: "POST",
                    url: `${baseUrl}${path}`,
                    callback: console.log('data: ',data),
                    data,
                } ;
        
                console.log('API config:',config);
                
            requestTasks.push(axios(config));
    }  

    try {
        const state = Promise.all(requestTasks)
        .then(values => console.log('State/values Promise.all',state, values));
    } catch (error) {
        console.log('Error in Promise.all', error);
    }        
}


const init=() =>{
    const knopje = document.querySelector('button');
    // Eventlistner
    knopje.addEventListener('click', () =>addCity());
}


init();