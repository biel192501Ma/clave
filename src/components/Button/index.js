import { Buttons, Title } from "../../css/global";

const Button =({color, textcolor, name}) =>{
return(
    <Buttons width={314} height={25} top color={color} className={`${name}`} >
       <Title paddingTop={5}  className={`${name}`} size={10} text="center" color={textcolor} >Enviar mensagem</Title>
    </Buttons>
)
}

export default Button;