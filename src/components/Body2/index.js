


import { Bgimg3, Title, Box, Container } from "../../css/global";


import Book from '../../Assents/book.png'
import Bolwhite from '../../Assents/bolwhite.svg'
import Elipse from '../../Assents/Elipse.svg'
import Fundo from '../../Assents/fundo.svg'
import { useEffect } from "react/cjs/react.development";


const Body2 = () =>{
  
  return(
      <Bgimg3 width={654} height={320} className="bgimgbody2"  >
        <Box  paddingTop={30} paddingLeft={180} className="boxtitlebody2"  >
            <Title className="titlebody2"  data-aos="fade-left" size={20} >Um <span className="spanMetodologia"  >Certificado</span> para <br/> chamar de seu!</Title>
        </Box>
        <Container row width={154}  >
          {/*imgs*/}
          <Box>
            <img src={Elipse} className="ELipse"  />
            <img src={Book} className="ELipse"  />
            <img src={Bolwhite} className="bolwhite"  />
            <img src={Bolwhite} className="bolwhite2"  />
            <img src={Bolwhite} className="bolwhite3"  />
           <div className="fundo1" > </div>
           <div className="fundo2" > </div>

          </Box>


             {/*Text*/}
             <Box paddingLeft={250}  paddingRight={10} paddingTop={30} data-aos="fade-down" className="boxsubtitlebody2" >
                 <Title size={13} text="end" className="subtitlebody2"  >
                 Com uma Solução de Ensino<br/> pensada exclusivamente para o<br/> seu negócio, a Clever School<br/> atende diferentes segmentos,<br/> atuando para ajudar você a<br/> <span className="spanMetodologia" >aumentar a satisfação e a fluência <br/> de seus alunos.</span>.<br/>Com Solução de Ensino pensada<br/> exclusiva para o seu negócio.
                 </Title>
             </Box>
                {/*decoration*/}
                <Container paddingTop={35} className="linedecoration" >

                <Box color="white" height={140} width={5} ></Box>
                </Container>
        </Container>
      </Bgimg3>
  )
}

export default Body2;