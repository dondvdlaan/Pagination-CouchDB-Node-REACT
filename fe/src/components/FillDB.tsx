import { useState } from "react";
import { Api } from "../shared/API";


export const FillDB = () =>{

// ----Constants -----
const [counter, setCounter] = useState<number>(0);
const [dbToggle, setLoadDBToggle] = useState<Boolean>(true);

const nrOfRecords: number = 20;
const i = 0;

console.log('App counter: ', counter);



if (dbToggle){

  if (counter >= nrOfRecords -1) setLoadDBToggle(false);

  const params ={
    method: "post",
    path: 'addCity',
    callBack: setCounter(counter=>counter +  1),
    data: {name: `City ${counter}`,
    country: `Country ${counter}`,
    founded: Date,
    habitants: counter * 1000
  }
  }

  Api("POST",params.path,setCounter(counter=>counter),params.data)

}
return(
    <p>Now Loading DB</p>
)
}