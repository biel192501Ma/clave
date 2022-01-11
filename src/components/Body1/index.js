import { useState } from "react";
import { Box, Container, Space, SubTitle, Title, Bgimg2, Bgimg5 , Bgimg6,Bgimg7 } from "../../css/global";

import mousebody1 from '../../Assents/mousebody1.svg'


const Body1= () =>{

const[imgs ,Setimgs] = useState(false)

return(
    <>
    
<Container  color="blue" height={400} width={524} data-aos="fade-down" className="containerbody1" >
    <Box    paddingLeft={100} paddingTop={30}className="boxtitlebody" >
        <Title size={23} className="titlebody1" >Conheça nossa <span className="spanMetodologia" >Metodologia</span></Title>
    </Box>
    <Space id="metodologia" />
  <Box paddingLeft={180} className="Boxquadradowhite"  >
    <Box className="quadradowhite"   color="white" height={10} width={100} >
    </Box>

  </Box>
  <Space/>
  <Box paddingLeft={110} >

  <Box  width={324}className="Boxsubtitlebody1" >
      <SubTitle size={13} className="subtitlebody1" >
      Com uma Solução de Ensino pensada exclusivamente para o seu negócio, a Clever School atende diferentes segmentos, atuando para ajudar você a aumentar a satisfação e a 
      </SubTitle>
      <SubTitle size={13} className="subtitle2body1">fluência de seus alunos.</SubTitle>
  </Box>
  </Box>
        
  <Space/>
  <Space/>
<Container  paddingLeft={10} row className="containerlgeralline">

<Container paddingTop={80} className="containerline1" >

<Box color="gray" height={1} width={160}  className={imgs === false ? 'line1' : 'lineaimation'}></Box>
</Container>


<Container  paddingLeft={30} className="containerimgbody1" >

  
   
<Bgimg2  left={20} height={150} width={100} className={imgs === false ? 'bgimg' : 'bgimganimation'}  >
  <div  className="backgroundbody1"  onClick={()=> Setimgs(true )} >
       
        <img  src={mousebody1} className={imgs === false ? 'imgbody1' : ' imgnone'} />
          <Title className={imgs === false ? 'titlebgbody1' : ' titleanimation'} >{imgs === false ? 'Clique para conhecer' : ' FOCO NO SPEAKING! '}</Title>   
          <SubTitle opacity={1} className={imgs === false ? '' : ' subtitleanimation'}  >{imgs === false ? '' : 'Com nossa ferramenta inovadora de avaliação de pronúncia, seus alunos perdem o medo de falar inglês e aperfeiçoam o speaking em uma velocidade surpreendente!'} </SubTitle>   

        
         
  </div>


</Bgimg2>
    


<Bgimg5 left={20} height={150} width={100} className={imgs === false ? 'bgimg2' : 'bgimganimation2'}  >
  <div  className="backgroundbody1"   >

          <img  src={mousebody1} className={imgs === false ? 'imgbody1' : ' imgnone'}/>
          <Title className={imgs === false ? 'titlebgbody1' : ' titleanimation2'} >{imgs === false ? 'Clice para conhecer' : ' CERTIFICAÇÃO'}</Title>   
          <SubTitle opacity={1} className={imgs === false ? '' : ' subtitleanimation2'}  >{imgs === false ? '' : 'Certificado ao final de cada curso: você pode imprimir ou enviar a versão digital para seus alunos comprovarem o nível de proficiência deles na nossa plataforma.'} </SubTitle>   

        
         
  </div>


</Bgimg5>
    

<Bgimg6 left={20} height={150} width={100} className={imgs === false ? 'bgimg3' : 'bgimganimation3'}  >
  <div  className="backgroundbody1"  onClick={()=> Setimgs(true )} >

          <img  src={mousebody1} className={imgs === false ? 'imgbody1' : ' imgnone'}/>
          <Title className={imgs === false ? 'titlebgbody1' : ' titleanimation3'}>{imgs === false ? 'Clice para conhecer' : ' Ensino Personalizado'}</Title>   
          <SubTitle opacity={1} className={imgs === false ? '' : ' subtitleanimation5'}  >{imgs === false ? '' : 'Analise os dados de desempenho dos seus alunos, identifique suas dificuldades e direcione suas aulas.'} </SubTitle>   

        
         
  </div>


</Bgimg6>
    

<Bgimg7 left={20} height={150} width={100} className={imgs === false ? 'bgimg4' : 'bgimganimation4'}  >
  <div  className="backgroundbody1"  onClick={()=> Setimgs(true )} >

          <img  src={mousebody1} className={imgs === false ? 'imgbody1' : ' imgnone'}  />
          <Title  className={imgs === false ? 'titlebgbody1' : ' titleanimation4'}  >{imgs === false ? 'Clice para conhecer' : 'ENSINO '} </Title> 
          <Title  className={imgs === false ? 'titlebgbody1' : ' titleanimation5'}  >{imgs === false ? 'Clice para conhecer' : '100% DIGITAL '} </Title> 
          <SubTitle opacity={1} className={imgs === false ? '' : ' subtitleanimation5'}  >{imgs === false ? '' : 'Que tal trabalhar com um material didático digital que possui uma trilha de aprendizagem completa para suas aulas particulares?'} </SubTitle>   

        
         
  </div>


</Bgimg7>
    



       
      

</Container>



<Container paddingTop={80} paddingLeft={30} className="containerline2" >
<Box color="gray" height={1} width={160} className={imgs === false ? 'line2' : 'lineaimation2'}></Box>

</Container>


</Container>

</Container>

</>
)
}

export default Body1;