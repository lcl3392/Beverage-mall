import { useDispatch } from "react-redux";
import { removeCart } from "../store/modules/cartSlice";

const CartItem = ({ item }) => {
  const { id, image,title, description, price} = item 
  const dispatch = useDispatch()
  
    return (
        <article className="cart-ltem">          
          <img src={image}  alt="" />
          <div className="cart-tit">
            <h3>
              {title}
            </h3>
            <span> {price} 원</span>
          </div>
          <button onClick={ () => dispatch( removeCart(id))}> 삭제 </button>        
        </article>
    );
};

export default CartItem;