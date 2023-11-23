import { json } from "react-router-dom";
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";
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
   for (let i = 1; i < 11; i++) {
      getItem(i).then(json=> setItem(prevState => ([...prevState, json])));
      
   }
}

function ItemsDisplay({array, props }) {
   return( 
     <> 
   
     <Container fluid>
<Row> 




    
       { array.map((items) =>{
       
         return (
          <Col xs> 
          <Card bg="dark" text="light" className="cardFix" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={items.image} width={12} height={180} />
          <Card.Body>
            <Card.Title variant="light" className="cardTitleFix">{items.title}</Card.Title>
            <Card.Text>
              ${items.price}
            </Card.Text>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
        </Col>
      
          )
        
       } 
       ) }   
       </Row>
        </Container>
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