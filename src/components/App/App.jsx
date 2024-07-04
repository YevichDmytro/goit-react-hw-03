import { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import defaultContactsList from '../../contacts.json';
import { nanoid } from "nanoid";

const App = () => {
  const [contacts, setContacts] = useState(defaultContactsList);
  const [filter, setFilter] = useState('');

  // const updContacts = nameContact => {
  //   setContacts({
  //     ...contacts,
  //     [nameContact]: contacts[nameContact],
  //   });
  // };

  const addContact = values => {
     values.id = nanoid();
    setContacts((prevContacts) => {
      return [...prevContacts, values];
    });
  };

  // const deleteContact = () => {
  //   setContacts()
  // }

  const contactFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList value={contactFilter} />
    </div>
  );
};

export default App;
