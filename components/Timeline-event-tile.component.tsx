import { styled } from '@mui/material';
import Styled from './timeline.styles';

interface Props {
    event: any;
    border: boolean
}

const EventTile = ({event, border}: Props) => {
    return (
        <Tile>
            {/* @ts-ignore */}
            <TimeContainer border={border}>
                <Time>{event.start?.month ?? ''} {event.start?.year ?? ''} {event.start && event.end ? '-' : ''} {event.end?.month ?? ''} {event.end?.year ?? ''}</Time>
                <Dot />
            </TimeContainer>
            <InfoContainer>
                <Image src={event.img}/>
                <Col>
                    <Title>{event.title}</Title>
                    <Subtitle>{event.subtitle}</Subtitle>
                    <Row>
                        {event.remarkIcon}
                        <Subtitle style={{fontStyle:'italic'}}>{event.remark}</Subtitle>
                    </Row>
                </Col>
            </InfoContainer>
        </Tile>
    )
}

const Col = styled('div')({
    height:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
})

const Row = styled('div')({
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
})

const Image = styled('img')({
    objectFit:'contain',
    marginRight:40,
    height: 120,
    width: 120,
    borderRadius:80,
    boxShadow:'0px 0px 4px rgba(0,0,0,0.8)'    
})

const Title = styled('p')({
    fontSize: '20px',
    fontWeight:600,
})

const Subtitle = styled('p')({
    fontSize: '16px',
})

const Tile = styled('div')({
    minHeight: 200,
    width:'100%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
})

const Time = styled('p')({
    fontSize:'16px',
    fontWeight:500,
    maxWidth:''
})

const TimeContainer = styled('div')((props:any)=>({
    width:'300px',
    height:'200px',
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'flex-end',
    borderRight: props.border ? '' : '3px solid #000',
}))

const InfoContainer = styled('div')({
    flex:1,
    height:'150px',
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingLeft:'40px',
    transform: 'translateY(-90px)'
})

const Dot = styled('div')({
    transform:'translateX(11px)',
    width:20,
    height:20,
    borderRadius:40,
    background:'#000',
    marginLeft: 20
})

export default EventTile;