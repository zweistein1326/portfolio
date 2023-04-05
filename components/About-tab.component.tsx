import { styled } from "@mui/material";

interface Props {
    setCategory: (cat: 'professional' | 'personal')=>void;
    category: string;
}

const AboutTab = ({setCategory, category}: Props) => {
    return (
        // @ts-ignore
        <Container category={category}>
            <Overlay />
            {/* @ts-ignore */}
            <Tab onClick={()=>{setCategory('personal')}}><Title selected={category == 'personal'}>Personal</Title></Tab>
            {/* @ts-ignore */}
            <Tab onClick={()=>{setCategory('professional')}}><Title selected={category == 'professional'}>Professional</Title></Tab>
        </Container>
    )
}

const Container = styled('div')((props: any)=>({
    width:'100%',
    background: props.category == 'personal' ? 'url(/background-1.jpeg)' : 'url(/background-2.jpeg)',
    objectFit:'contain',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    position:'relative',
}))

const Overlay = styled('div')({
    position:'absolute',
    width:'100%',
    height:'100%',
    zIndex:9999
})

const Tab = styled('div')((props)=>({
    cursor:'pointer',
    width:'50%',
    textAlign:'center',
    padding:20,
    zIndex:99999,
}))

const Title = styled('p')(({selected}: any) => ({
    fontSize: 16,
    fontWeight: 700,
    color: '#FFF',
    textDecoration: selected ? 'underline' : 'none',
    textUnderlineOffset: 12,
}))

export default AboutTab;