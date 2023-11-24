import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';
import { CartContext, TotalContext } from "../App";
import { useContext } from 'react';
export function Home() {
  const [total,setTotal] = useContext(TotalContext);
  const [Cart,setCart] = useContext(CartContext);
return(
<> 


{ console.log(total,Cart) }


</>
)

}