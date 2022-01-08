import { Bgimg4, Container, Title,Box, Space } from "../../css/global";
import Button from "../../components/Button";

const Body4 = () =>{

    
    const whatsapp =() =>{
        window.location.href="https://api.whatsapp.com/send?phone=5566984018920&text=ol%C3%A1%20%2C%20tudo%20bem%3F%20quero%20saber%20mais%20sobre%20o%20m%C3%A9todo%20de%20ingl%C3%AAs"

    

    }
 return(
     <Bgimg4 row height={250} className="bgbody4">
        <Container paddingTop={40} paddingLeft={20} width={70} data-aos="fade-left" className="containertitlebody4">
            <Box  className="Boxtitlebody4">
               <Title className="titlebody4" color="blueescure" bold size={20}>
               Gostou?<br/> <span className="red" >Entre em contato</span>
               </Title>
            </Box>
        </Container>

        <Container width={100} paddingTop={30} paddingLeft={10}data-aos="fade-right"className="containerinputbody4" >
           <Box>
               <Box row>
                   <Box>
                       <input required="true" className='inputf'  placeholder='Seu nome'/>
                   </Box>
                   <Box paddingLeft={10}>
                       <input required="true" className='inputf' placeholder='Seu melhor telefone'  />
                   </Box>
               </Box>
                   <Box width={400}  paddingTop={10} className="boxinputf2" >
                   <input required="true" className='inputf2' placeholder='Seu melhor email'  />
                   </Box>
                   <Box width={400}  paddingTop={10} className="boxinputf2">
                   <input required="true" className='inputf3' placeholder='Seu melhor email'  />
                   </Box>
           </Box>
           <Space/>
           <div onClick={whatsapp} >
         <Button color="blueescure" textcolor="white" name="btnfooter"  />
           </div>

       </Container>
     </Bgimg4>
 )
}

export default Body4;