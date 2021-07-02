
import './Buttom.css';

const Button=({primary, children, handleClick})=> {
  const bgColor = primary? "#468264" : "#C0625E";
  return (
    
  <button className="add-button" type="button" style={{backgroundColor:bgColor}} onClick={handleClick}>{children}</button>
   
  );
}

export default Button;
