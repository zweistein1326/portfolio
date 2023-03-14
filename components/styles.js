const { styled } = require("@mui/system");

const Header = styled('header')({
    position:'relative',
    display:'flex', 
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'space-between', 
    height:'12vh', 
    background:'#FFF', 
    borderBottom:'1px solid #000', 
    position:'absolute', 
    top:0, 
    left:0, 
    width:'100%', 
    padding:'0px 120px',
})

const Container = styled('div')(({hero, row=false})=>({
    display:'flex',
    alignItems: hero ? '' : 'center',
    flexDirection: row ? 'row' : 'column',
    paddingTop: hero ? 'calc(12vh + 40px)' : '4vh',
    paddingLeft: '180px',
    paddingRight: '180px',
    width:'100%',
    minHeight: '100vh',
}))

const InnerContainer = styled('div')((props)=>({
    display:'flex',
    alignItems:'center',
    
    flexDirection: props.row ? 'row' : 'column',
    paddingTop: props.hero ? 'calc(12vh + 40px)' : '10vh',
    width:'100%',
}))

const CTAButton = styled('button')({
    marginRight: '24px',
    minWidth: '200px',
    minHeight: '60px',
    background: '#F3B521',
    fontSize: '16px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderWidth: '0px',
    borderRadius: '40px',
    cursor:'pointer',
    transition: '0.4s all ease-in-out',
    '&:hover':{
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.50)',
        transition: '0.4s all ease-in-out'
    }
})

const Row = styled('div')({
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
})

const Sign = styled('p')({
    
})

const ValueCircle = styled('div')({
    minHeight: '200px',
    minWidth: '200px',
    borderRadius: '200px',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    fontSize:32,
    fontWeight:500,
    // boxShadow: '0px 0px 4px rgba(0,0,0,0.8)',
    background: 'linear-gradient(180deg, #FF3737 0%, #FF13A1 100%)',
})

export default {
    Container,
    CTAButton,
    Header,
    InnerContainer,
    Row,
    ValueCircle
}