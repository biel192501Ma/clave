

import { Bgimg, Box, Container, MenuContainer, Space, SubTitle, Title } from '../../css/global.js'
import Button from '../Button/index.js';

import logo from '../../Assents/logo.png'


const Header = () =>{


    const whatsapp =() =>{
        window.location.href="https://api.whatsapp.com/send?phone=5566984018920&text=ol%C3%A1%20%2C%20tudo%20bem%3F%20quero%20saber%20mais%20sobre%20o%20m%C3%A9todo%20de%20ingl%C3%AAs"

    

    }
 
   
   
   return(
      <Bgimg width={564} height={432} className="bgheader"  >
       <MenuContainer row  >
          <Container row paddingLeft={50} paddingTop={15} className='containertitlemenu' >

            <Title className='titlemenu' size={10}  pointer >Home</Title>
            <Title onClick={()=> window.location.href='#metodologia'} className='titlemenu' size={10} color="gray" pointer paddingLeft={15}> Metodologia</Title>
            <Title onClick={()=>  window.location.href='#certificado'}  className='titlemenu' size={10} color="gray" pointer paddingLeft={15} >Certificado</Title>
          </Container>
          <Box paddingLeft={9} className='containertiltemenu2' >
             

            <div className='logoheader' >
                <Title className='titlelogoheader' > Clever School</Title>
           
              </div>
              

              
          </Box>
          <Container row paddingTop={15}  className='containertiltemenu2' >
          <Title onClick={()=>     window.location.href='#quemsomos'} className='titlemenu'  size={10} color="gray" pointer paddingLeft={15}  >Quem somos</Title>
            <Title onClick={()=>     window.location.href='#contato'} className='titlemenu' size={10} color="gray" pointer  paddingLeft={15} >Contato</Title>
            <Title onClick={()=>   window.location.href="https://student.flexge.com/"}  className='titlemenu'size={10} color="gray" pointer  paddingLeft={15}  >Login</Title>
</Container>
       </MenuContainer>
      
      <Container paddingTop={20} className='containertitleheader' >
          <Title className='titleheader' text="center" size={18} data-aos="fade-left">
          Welcome to Clever School
          </Title>
          <Box paddingLeft={100} width={400} className='boxsubtitle'>

          <SubTitle className='subtitleheader'  size={10} paddingTop={20}  text="center" data-aos="fade-right" >
         Uma escola 100% digital focada em formar alunos capazes de entender um outro idioma baseado no quadro comum europeu, aqui o seu conhecimento é construído de forma intuitiva capaz de formar o aluno de maneira definitiva
          </SubTitle>
          </Box>
      </Container>
       {/*Inputs*/}
       <Container width={500} paddingTop={30} paddingLeft={110} data-aos="fade-down" className='containerinput' >
           <Box>
               <Box row>
                   <Box>
                      

                       <input required className='input'  placeholder='Seu nome' name="name" />
                      
                   </Box>
                   <Box paddingLeft={10}>
                       <input type='number' required className='input' placeholder='Seu melhor telefone'  />
                   </Box>
               </Box>
                   <Box width={400}  paddingTop={10} className='boxinput2'   >
                   <input type='email' required className='input2' placeholder='Seu melhor email'  name="email"  />
                   </Box>
                   <Box width={400}  paddingTop={10} className='boxinput3' >
                   <input required className='input3' placeholder='Digite sua mensagem'  />
                   </Box>
           </Box>
           <Space/>
           <div  onClick={whatsapp}>

         <Button textcolor="dark" name="btnheader textbtnheader " />
           </div>

       </Container>
      </Bgimg>
   )

}

export default Header;