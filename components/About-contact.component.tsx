import SectionTitle from "./SectionTitle";
import Styled from './styles';

interface Props {
    contacts: any[]
}

const Contact = ({contacts}:Props) => {
    return (
        <Styled.InnerContainer id='contact'>
            <SectionTitle title={"CONTACT"}/>
            <div>
                {contacts.map((contact, index) => <a target={'_blank'} key={index} href={contact.url} style={{margin:'0px 20px'}}>{contact.logo}</a>)}
            </div>
        </Styled.InnerContainer>
    )
}

export default Contact;