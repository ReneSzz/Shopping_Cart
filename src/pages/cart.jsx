import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";
export function Cart({itemsinCart}) {

    return( 
        <> 
      
        <Container fluid>
   <Row> 
   
   
   
   
       
          { itemsinCart.map((items) =>{
          
            return (
             <Col xs> 
             <Card bg="dark" text="light" className="cardFix" style={{ width: '12rem' }}>
             <Card.Img variant="top" src={items.image} width={12} height={180} />
             <Card.Body>
               <Card.Title variant="light" className="cardTitleFix">{items.title}</Card.Title>
               <Card.Text>
                 ${items.price}
               </Card.Text>

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