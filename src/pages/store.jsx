import { json } from "react-router-dom";
import { useEffect, useState } from 'react'

export function Store()
{
    let [check, setCheck] = useState(false);
    //change to an array of objects
    let [item, setItem] = useState({});
         
  useEffect(()=> { async function getItem(){
    //create loop to retrieve multiple items
        fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json())
        .then(json=>setItem(json))
         }
         getItem();
         setCheck(true);
}, []);

            return( 
               <>
               
            {check==true ? <img src={item.image} width={150} height={150} /> : <h2>Not Hello</h2>}
               </> 
            )
}