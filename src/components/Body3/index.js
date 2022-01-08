import { Container, Title, Box, SubTitle } from "../../css/global";


import Estudantes from '../../Assents/estudantes.jpg'


const Body3 = () =>{
return(
    <Container height={350} className="containerbody3" row >
        <Container data-aos="fade-left">

        <Box paddingTop={50} paddingLeft={40} className="boxtitlebody3">

     <Title size={22} className="titlebody3" ><span className="spanMetodologia">Quem Somos e</span><br/>por que somos <br/><span className="spanMetodologia" >diferentes</span></Title>
        </Box>
        <Box  paddingTop={30} paddingLeft={30} className="boxsubtitlebody3">
            <SubTitle size={12} className="subtitlebody3">
            Com uma Solução de Ensino pensada<br/> exclusivamente para o seu negócio, a <br/> Clever School atende diferentes<br/> segmentos, atuando para ajudar você a<br/> <span className="spanMetodologia" >aumentar a satisfação e a fluência de</span><br/> <span className="spanMetodologia" >seus alunos</span>. Com Solução de Ensino<br/> pensada exclusiva para o seu negócio,<br/>a Clever School atende diferentes<br/> segmentos.
            </SubTitle>
        </Box>
        </Container>

        <Container data-aos="fade-right"  >
            {/*line*/}
            <Box className="boxlinebody3" >
            <div className="line1body3" ></div>
            <div className="line2body3" ></div>
            <div className="line3" ></div>
            <div className="quadrado" ></div>
            
            </Box  >

             {/*img*/}
             <Box paddingLeft={50} paddingTop={120} className="boximgbody3"  >
              <img src={Estudantes} className="estudantes" />
            </Box>

          {/*linedown*/}
           <Box>
           <div className="line4" ></div>
            <div className="line5" ></div>
            <div className="line6" ></div>
           </Box>

        </Container>
    </Container>
)
}

export default Body3;