import { Box, Container, Space, SubTitle, Title, Bgimg2 } from "../../css/global";

import mousebody1 from '../../Assents/mousebody1.svg'

const Body1= () =>{


    const whatsapp =() =>{
        window.location.href="https://api.whatsapp.com/send?phone=5566984018920&text=ol%C3%A1%20%2C%20tudo%20bem%3F%20quero%20saber%20mais%20sobre%20o%20m%C3%A9todo%20de%20ingl%C3%AAs"

    

    }

return(
    <>
    
<Container color="blue" height={400} width={524} data-aos="fade-down" className="containerbody1" >
    <Box paddingLeft={100} paddingTop={30}className="boxtitlebody" >
        <Title size={23} className="titlebody1" >Conheça nossa <span className="spanMetodologia" >Metodologia</span></Title>
    </Box>
    <Space/>
  <Box paddingLeft={180} className="Boxquadradowhite"  >
    <Box className="quadradowhite"   color="white" height={10} width={100} >
    </Box>

  </Box>
  <Space/>
  <Box paddingLeft={110} >

  <Box  width={324}className="Boxsubtitlebody1" >
      <SubTitle size={13} className="subtitlebody1" >
      Com uma Solução de Ensino pensada exclusivamente para o seu negócio, a Clever School atende diferentes segmentos, atuando para ajudar você a aumentar a satisfação e a fluência de seus alunos.
      </SubTitle>
  </Box>
  </Box>
        
  <Space/>
  <Space/>
<Container paddingLeft={10} row className="containerlgeralline">

<Container paddingTop={80} className="containerline1" >

<Box color="gray" height={1} width={160}  className="line1" ></Box>
</Container>


<Container  paddingLeft={30} className="containerimgbody1" >
<Bgimg2 left={20} height={150} width={100} className="bgimg"  >
  <div  className="backgroundbody1" onClick={whatsapp} >
  <img  src={mousebody1} className="imgbody1" />
  <Title className="titlebgbody1" >Clice para conhecer</Title>

  </div>
</Bgimg2>

</Container>



<Container paddingTop={80} paddingLeft={30} className="containerline2" >
<Box color="gray" height={1} width={160} className="line2"></Box>

</Container>


</Container>

</Container>

</>
)
}

export default Body1;