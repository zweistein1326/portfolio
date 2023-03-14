import { styled } from "@mui/material";

interface Props {
    setCategory: (cat: 'professional' | 'personal')=>void;
    category: string;
}

const AboutTab = ({setCategory, category}: Props) => {
    return (
        <Container>
            {/* @ts-ignore */}
            <Tab onClick={()=>{setCategory('professional')}}><Title selected={category == 'professional'}>Professional</Title></Tab>
            {/* @ts-ignore */}
            <Tab onClick={()=>{setCategory('personal')}}><Title selected={category == 'personal'}>Personal</Title></Tab>
        </Container>
    )
}

const Container = styled('div')({
    position:'absolute',
    width:'100%',
    background: 'green',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
})

const Tab = styled('div')((props)=>({
    cursor:'pointer',
    width:'50%',
    textAlign:'center',
    padding:20
}))

const Title = styled('p')(({selected}: any) => ({
    fontSize: 20,
    fontWeight: 500,
    color: '#FFF',
    textDecoration: selected ? 'underline' : 'none',
    textUnderlineOffset: 12,
}))

export default AboutTab;