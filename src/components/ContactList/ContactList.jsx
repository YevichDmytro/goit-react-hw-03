import Contact from '../Contact/Contact';
import style from './ContactList.module.css';

const ContactList = ({ value }) => {
  return (
    <ul className={style.list}>
      {value.map(contact => {
        return (
          <li key={contact.id} className={style.item}>
            <Contact
              contactName={contact.name}
              contactNumber={contact.number}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
