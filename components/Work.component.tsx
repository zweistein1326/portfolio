import Grid from "@mui/system/Unstable_Grid/Grid";
import SectionTitle from "./SectionTitle";
import Styled from './styles';

const Work = () => {
    const works = [
        {logo:'parallelchain-logo', title: 'ParallelChain Lab', start:{month:'', year:''}, end:{month:'', year:''}, designation:'Staff Engineer'},
        {logo:'roju-logo', title: 'Roju Limited', start:{month:'', year:''}, end:{month:'', year:''}, designation:'Staff Engineer'},
        {logo:'fca-logo', title: 'First Code Academy', start:{month:'', year:''}, end:{month:'', year:''}, designation:'Staff Engineer'},
        {logo:'hollo-logo', title: 'Hollo', start:{month:'', year:''}, end:{month:'', year:''}, designation:'Staff Engineer'},
    ];
    return (
        <Styled.Container row id='work'>
            <SectionTitle title={"WORK"} vertical/>
            <Grid container spacing={2}>
                {works.map((work, i)=>{
                    return (<Grid key={i} xs={12} sm={6}>
                        <img src={`/${work.logo}.jpeg`} style={{height:200, width:200, borderRadius:200, border:'1px solid #000'}}/>
                    </Grid>)}
                )}
            </Grid>
        </Styled.Container>
    )
}

export default Work;