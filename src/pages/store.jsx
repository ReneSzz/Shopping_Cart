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

function ItemsDisplay({array, props }) {
   return( 
     <> 
   
     
       { array.map((items) =>{
       
         return (
 
          
         
         <img src={items.image} width={150} height={150}></img>
      
          )
        
       } 
       ) }   
     </>
    
       );
       
 }



useEffect(() => {
   const timer = setTimeout(() => {
     createArray()
   }, 100);
   return () => clearTimeout(timer);
 }, []);

            return( 
               <>
            {item[6] != undefined ? <ItemsDisplay array={item}/> : <h1></h1>}
            <button type="button" onClick={()=> console.log(item)}>Button</button>
               </> 
            )
}