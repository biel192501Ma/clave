import styled from 'styled-components'
import theme from '../Assents/theme.json'

import prof1 from '../Assents/prof1.png'
import prof2 from '../Assents/prof2.jpg'
import direitora from '../Assents/direitora.jpg'
import bg4 from '../Assents/bg4.jpg'


export  const Container = styled.div`
background-color:${({color}) => theme.colors[color || 'primary']  };
 width :${({width}) =>  width ? width : 'auto'   }%;
 height :${({height}) =>  height ? height : 'auto'   }px;
 margin-Left: ${({left}) =>  left ? left : 0  }%;
 margin-right: ${({right}) =>  right ? right : 0   }%;
 margin-top: ${({top}) =>  top ? top : 0  }%;
 padding-top: ${({paddingTop}) =>  paddingTop ? paddingTop : 0  }px;
 padding-left: ${({paddingLeft}) =>  paddingLeft ? paddingLeft : 0  }px;
 display:${({row}) =>  row ? 'flex' : 'colum'  } ;
 justify-content:${({justify}) =>  justify ? justify : ""  } ;
`;
export  const Quadrado = styled.div`
background-color:${({color}) => theme.colors[color || 'dark']  };
 width :${({width}) =>  width ? width : 'auto'   }px;
 height :${({height}) =>  height ? height : 'auto'   }px;
 margin-Left: ${({left}) =>  left ? left : 0  }%;
 margin-top: ${({top}) =>  top ? top : 0  }%;
 margin-right: ${({right}) =>  right ? right : 0   }%;
 padding-top: ${({paddingTop}) =>  paddingTop ? paddingTop : 0  }px;
 display:${({row}) =>  row ? "flex" : "colum"  } ;
 justify-content:${({justify}) =>  justify ? justify : ""  } ;
 align-items:${({aling}) =>  aling ? aling : ""  } ;
 border: 1px solid #f3f3f3;
 opacity: 0.5;
 
 transition: 0.9s  ease;
 
 z-index: ${({index}) =>  index ? index : ''   } ;
`;

export const Bgimg= styled.div`
 width :${({width}) =>  width ? width : 'auto'   }px;
 height :${({height}) =>  height ? height : 'auto'   }px;
 margin-top: ${({top}) =>  top ? top : 0  }%;
background-image: url(${prof1}) ;
 background-size: cover;

`;
export const Bgimg2= styled.div`
 padding-left: ${({paddingLeft}) =>  paddingLeft ? paddingLeft : 0  }px;
 margin-left: ${({left}) =>  left ? left : 0  }%;

 width :${({width}) =>  width ? width : 'auto'   }px;
 height :${({height}) =>  height ? height : 'auto'   }px;
 margin-top: ${({top}) =>  top ? top : 0  }%;
background-image: url(${direitora}) ;
 background-size: cover;

`;
export const Bgimg3= styled.div`
 padding-left: ${({paddingLeft}) =>  paddingLeft ? paddingLeft : 0  }px;
 margin-left: ${({left}) =>  left ? left : 0  }%;

 width :${({width}) =>  width ? width : 'auto'   }px;
 height :${({height}) =>  height ? height : 'auto'   }px;
 margin-top: ${({top}) =>  top ? top : 0  }%;
background-image: url(${prof2}) ;
 background-size: cover;

`;

export const Bgimg4= styled.div`
 padding-left: ${({paddingLeft}) =>  paddingLeft ? paddingLeft : 0  }px;
 margin-left: ${({left}) =>  left ? left : 0  }%;
 display:${({row}) =>  row ? "flex" : "colum"  } ;
 width :${({width}) =>  width ? width : 'auto'   }px;
 height :${({height}) =>  height ? height : 'auto'   }px;
 margin-top: ${({top}) =>  top ? top : 0  }%;
background-image: url(${bg4}) ;
 background-size: cover;

`;


export  const MenuContainer = styled.div`
 background-image: linear-gradient(to bottom, #18193a, rgba(24, 25, 58, 0.73) 49%, rgba(24, 25, 58, 0));
 width :${({width}) =>  width ? width : 'auto'   }%;
 height :${({height}) =>  height ? height : 'auto'   }px;
 margin-Left: ${({left}) =>  left ? 8 : 0  }%;
 margin-right: ${({right}) =>  right ? 8 : 0   }%;
 margin-top: ${({top}) =>  top ? top : 0  }%;
 padding-top: ${({paddingTop}) =>  paddingTop ? paddingTop : 0  }px;
 display:${({row}) =>  row ? "flex" : "colum"  } ;
 justify-content:${({justify}) =>  justify ? justify : ""  } ;
`;


export  const Box = styled.div`
background-color:${({color}) => theme.colors[color || 'primary']  };
 width :${({width}) =>  width ? width : 'auto'   }px;
 height :${({height}) =>  height ? height : 'auto'   }px;
 margin-Left: ${({left}) =>  left ? left : 0  }px;
 padding-right: ${({paddingRight}) =>  paddingRight ? paddingRight : 0  }px;

 margin-top: ${({margintop}) =>  margintop ? margintop : 0  }%;
 margin-right: ${({right}) =>  right ? right : 0   }%;
 padding-top: ${({paddingTop}) =>  paddingTop ? paddingTop : 0  }px;
 padding-left: ${({paddingLeft}) =>  paddingLeft ? paddingLeft : 0  }px;

 display:${({row}) =>  row ? "flex" : "colum"  };
 justify-content:${({justify}) =>  justify ? justify : ""  } ;
 align-items:${({aling}) =>  aling ? aling : ""  } ;
 transition: 0.9s  ease;
 
 z-index: ${({index}) =>  index ? index : ''   } ;
`;
export const Title = styled.h1`
padding-top: ${({paddingTop}) =>  paddingTop ? paddingTop : 0  }px;
 font-weight: ${({bold}) =>  bold ? 'bold' : 'lighter'  };
color:${({color}) => theme.colors[color || 'white']  };
font-size:${({size}) =>  size ? size : ''   }px; 
padding-left: ${({paddingLeft}) =>  paddingLeft ? paddingLeft : 0  }px;
font-family:'Ubuntu';
margin-Left: ${({left}) =>  left ? left : 0  }%;
text-align:${({text}) =>  text ? text : ""  } ;
cursor: ${({pointer}) =>  pointer ? 'pointer' : ''  } ;

`;
export const SubTitle = styled.h5`
 padding-left: ${({paddingLeft}) =>  paddingLeft ? paddingLeft : 0  }px;
 padding-right: ${({paddingRight}) =>  paddingRight ? paddingRight : 0  }px;
 font-weight: ${({bold}) =>  bold ? 'bold' : 'lighter'  };
 width :${({width}) =>  width ? width : 'auto'   }px;
opacity: 0.5;
color:${({color}) => theme.colors[color || 'white']  };
font-size:${({size}) =>  size ? size : ''   }px; 
font-family:'Ubuntu ', Arial ;
margin-Left: ${({left}) =>  left ? left : 0  }%;
margin-top: ${({top}) =>  top ? top : 0  }%;
padding-top: ${({paddingTop}) =>  paddingTop ? paddingTop : 0  }px;
text-align:${({text}) =>  text ? text : ""  } ;

`;
export const Buttons = styled.div`

 width :${({width}) =>  width ? width : 'auto'   }px;
 margin-top: ${({top}) =>  top ? 5 : 0  }%;
 padding-top: ${({paddingTop}) =>  paddingTop ? paddingTop : 0  }px;
overflow: hidden;

 height :${({height}) =>  height ? height : 'auto'   }px;
background-color:${({color}) => theme.colors[color || 'white']  }; ;
border: none;
outline: none;

margin-Left: ${({left}) =>  left ? left : 0  }%;
margin-top: ${({top}) =>  top ? top : 0  }%;
cursor: pointer;

`;
export const Space = styled.div`
height: 20px;
`;