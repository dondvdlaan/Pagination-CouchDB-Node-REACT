// import {axios} from 'axios';

let i =0;

const addCity = (counter)=>{

    const path ='addCity';

    const data = {name: `City ${counter}`,
    country: `Country ${counter}`,
    founded: Date,
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
            
            axios(config).then((response) => {
                console.log('res: ', response);
                // return callback(response.data);
            });
}


const init=() =>{
    const knopje = document.querySelector('button');
    // Eventlistner
    knopje.addEventListener('click', () =>addCity(i++));
}


init();