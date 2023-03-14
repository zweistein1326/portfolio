import { Done, Start } from '@mui/icons-material';
import { styled } from '@mui/material';
import SectionTitle from './SectionTitle';
import Styled from './styles';
import EventTile from './Timeline-event-tile.component';

const Timeline = () => {
    const events = [
        {
            img:'parallelchain-logo.jpeg',
            start:{month:'June', year:2022},
            end:{month:'Present', year:null},
            title: 'ParallelChain Lab',
            subtitle: 'Staff Engineer',
        },
        {
            img:'hku-logo.jpeg',
            start:{month:'June', year:2022},
            title: 'The University of Hong Kong',
            subtitle: 'Bachelor\'s in Computer Science Egineering',
            remarkIcon: <Done />,
            remark: 'Graduate'
        },
        {
            img:'roju-logo.jpeg',
            start:{month:'June', year:2021},
            end:{month:'February', year:2022},
            title: 'ROJU Limited',
            subtitle: 'Lead full-stack Engineer',
        },
        {
            img:'payphone-logo.png',
            start:{month:'June', year:2020},
            end:{month:'December', year:2021},
            title: 'PayPhone Co.',
            subtitle: 'Co-founder & CTO',
        },
        // {
        //     img:'hacksoc-logo.jpeg',
        //     start:{month:'April', year:2020},
        //     end:{month:'September', year:2021},
        //     title: 'Hackathon Society',
        //     subtitle: 'Co-founder & President',
        // },
        {
            img:'fca-logo.jpeg',
            start:{month:'June', year:2019},
            end:{month:'August', year:2019},
            title: 'First Code Academy',
            subtitle: 'Coding & STEM tutor',
        },
        {
            img:'hku-logo.jpeg',
            start:{month:'September', year:2018},
            title: 'The University of Hong Kong',
            subtitle: 'Bachelor\'s in Computer Science Egineering',
            remarkIcon: <Start/>,
            remark: 'Commence'
        },
        // {
        //     img:'thapar-logo.jpeg',
        //     start:{month:'August', year:2017},
        //     end:{month:'April', year:2018},
        //     title: 'Thapar Institute',
        //     subtitle: 'Research assistant',
        // },
        {
            img:'dps-logo.png',
            start:{month:'May', year:2015},
            end:{month:'April', year:2017},
            title: 'Delhi Public School R.K Puram',
            subtitle: 'High School',
            remarks:'Among top 1% of India'
        },
        // {
        //     img:'dps-logo.png',
        //     start:{month:'', year: null},
        //     end:{month:'April', year:2015},
        //     title: 'Delhi Public School, Noida',
        // },
        {
            img: 'baby.png',
            start:{month:'26 August', year:1999},
            title: 'Born',
        },

    ];
    return (
    <Styled.Container row style={{marginTop:'120px'}}>
        <SectionTitle title="Timeline" vertical/>
        <div style={{height:'100%', width:'100%'}}>
            <div>
                {events.map((event, index)=><EventTile key={index} border={index == events.length - 1} event={event}/>)}
            </div>
        </div>
    </Styled.Container>
    )
}

export default Timeline;