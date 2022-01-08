import {useEffect} from 'react'

import { Space } from '../../css/global';
import Aos from 'aos'
import 'aos/dist/aos.css'

import Body1 from '../../components/Body1';
import Header from '../../components/Header'
import Body2 from '../../components/Body2';
import Body3 from '../../components/Body3';
import Body4 from '../../components/Body4';
import Footer from '../../components/Footer';



const Home =() =>{
    useEffect(()=>{
        Aos.init({duration:3000, })

    },[])
 return(
     <>
     <Header/>
     
    <Body1  />
    <Body2/>
    <Body3/>
     <Body4/>
     <Footer/>
     </>
 )
}

export default Home;