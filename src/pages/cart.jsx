import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";
import { useEffect, useState, createContext, useContext } from 'react'
import { TotalContext, CartContext } from "../App";
export function Cart({itemsinCart, setcartNum}) {
  const [total, setTotal] = useContext(TotalContext);
  let [cart, setCart] = useContext(CartContext);
    return( 
        <> 
      
        <Container fluid>
   <Row className="justify-content-md-center"> 

   <h1>Total: ${total}</h1>
   <h3>Cart:</h3>
          { itemsinCart.map((items) =>{
          
            return (
            
             <Card bg="dark" text="light" className="cardFix" style={{ width: '9rem', height:'8rem', flexDirection:'row'}}>
             <Card.Img variant="top" src={items.image} style={{ width: '3rem', height:'50px'}} />
             <Card.Body>
               <Card.Title variant="light" className="cardTitleFix" style={{ fontSize:'0.8rem'}}>{items.title}</Card.Title>
               <Card.Text>
                 ${items.price}
               </Card.Text>

             </Card.Body>
           </Card>

         
             )
           
          } 
          ) }   
          
          </Row>
          <button onClick={() => {setCart([]) 
          setTotal(0) 
          setcartNum(0)}
          }>Check out</button>
           </Container>
        </>
       
          );

}