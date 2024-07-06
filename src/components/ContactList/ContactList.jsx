import Contact from '../Contact/Contact';
import style from './ContactList.module.css';

const ContactList = ({ value, onDelete }) => {
  return (
    <ul className={style.list}>
      {value.length ? (
        value.map(contact => {
          return (
            <li key={contact.id} className={style.item}>
              <Contact
                contactName={contact.name}
                contactNumber={contact.number}
                contactId={contact.id}
                onDelete={onDelete}
              />
            </li>
          );
        })
      ) : (
        <span className={style.emptyList}>No one contact yet</span>
      )}
    </ul>
  );
};

export default ContactList;
