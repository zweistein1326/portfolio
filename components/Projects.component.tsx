import Grid from "@mui/system/Unstable_Grid/Grid";
import SectionTitle from "./SectionTitle";
import Styled from './styles'

const Projects = () => {
    const projects = [{
        title:'Algol',
        start:{month:'July',year:'2021'},
        end:{month: 'April', year:'2022'},
        description:'Algol is a blockchain based credential generation and verification solution. It allows an authorized party(governments, universities) to create credentials(passports, degrees) and share them with a user. A user can use this credential to verify their identity the validity of which can be checked on the blockchain.'        
    },{
        title:'Playground',
        start:{month:'July',year:'2021'},
        end:{month: 'November', year:'2021'},
        description:'Playground is a NFT wallet where users can connect their multiple blockchain accounts and import all their NFTs in one place.'
    },{
        title:'PayPhone',
        start:{month:'July',year:'2020'},
        end:{month: 'August', year:'2021'},
        description:'PayPhone is a cardless, touchless payments solution which used facial recognition solutions to facilitate transactions in convenience stores such as 7/11 and Wellcome in Hong Kong.'
    },{
        title:'Personifi',
        start:{month:'November',year:'2019'},
        end:{month: 'January', year:'2020'},
        description:'Personifi is a personal finance management solution.'        
    }];
    return (
        <Styled.Container row id='projects'>
            <SectionTitle title={"PROJECTS"} vertical/>
            <Grid container spacing={0}>
                {projects.map((project, i)=>{
                    return (
                    <Grid key={i} xs={12} sm={6}>
                        <div style={{boxShadow:'0px 0px 4px rgba(0,0,0,0.4)', borderRadius:8, margin:20, padding:0, display:'flex', flexDirection:'column', alignItems:'center', minHeight:380}}>
                            <img src={`/project${i+1}.png`} style={{height:'200px', width:'100%', objectFit:'contain', borderTopLeftRadius:8, borderTopRightRadius: 8}}/>
                            <div style={{marginTop:12, padding:'0 20px'}}>
                                <p style={{fontSize:24, fontWeight:'bold', textAlign:'center'}}>{project.title}</p>
                                <p style={{fontSize:16, fontStyle:'italic', textAlign:'center', marginBottom:8}}>{project.start.month}'{project.start.year.slice(2,4)} - {project.end.month}'{project.start.year.slice(2,4)}</p>
                                <p style={{fontSize:16, textAlign:'center', marginBottom:8}}>{project.description}</p>
                            </div>
                        </div>
                    </Grid>)}
                )}
            </Grid>
        </Styled.Container>
    )
}

export default Projects;