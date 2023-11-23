import { json } from "react-router-dom";
import { useEffect, useState } from 'react'
export function Store()
{
    let [check, setCheck] = useState(false);
    //change to an array of objects
    let [item, setItem] = useState([]);
      
    
    async function getItem(num)
    {
      let response = await fetch('https://fakestoreapi.com/products/'+ num);
      if (response.ok){
        return await response.json();
      } else {
        return Promise.reject();
      }
    }

function createArray()
{
   for (let i = 1; i < 8; i++) {
      getItem(i).then(json=> setItem(prevState => ([...prevState, json])));
      
   }
}
//   useEffect(()=> { async function getItem(){
//     //create loop to retrieve multiple items
//         fetch('https://fakestoreapi.com/products/1')
//         .then(res=>res.json())
//         .then(json=>setItem(prevState =>([...prevState, json])))
//         .then(setCheck(true));
        
//         }
//         getItem();
// }, []);
useEffect(() => {
   const timer = setTimeout(() => {
     createArray()
   }, 100);
   return () => clearTimeout(timer);
 }, []);

            return( 
               <>
            {item[0] != undefined ?<img src={item[0].image} width={150} height={150}/> : <h2>Not Hello</h2>}
            <button type="button" onClick={()=> console.log(item)}>Button</button>
               </> 
            )
}