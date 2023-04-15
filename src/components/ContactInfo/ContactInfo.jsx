import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectContacts } from "redux/contacts/selectors";
import { ContactWrapper } from "./ContactInfo.style";

export const ContactInfo = () => {
    const  { id }  = useParams();
    const contacts = useSelector(selectContacts);

    const contact = contacts.find(contact => contact.id === id);

    return (
        <ContactWrapper>
            {/* <Img src={imag} /> */}
            <p>Name: {contact.name}</p>
            <p>Phone: {contact.number}</p>
        </ContactWrapper>
    )
};
