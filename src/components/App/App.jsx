import { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import defaultContactsList from '../../contacts.json';

const App = () => {
  const [contacts, setContacts] = useState(defaultContactsList);
  const [filter, setFilter] = useState('');

  // const updContacts = nameContact => {
  //   setContacts({
  //     ...contacts,
  //     [nameContact]: contacts[nameContact],
  //   });
  // };

  // const contactFilter = value => {
  //   setFilter();
  // };

  // const addContact = newContact => {};

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList value={filterContacts} />
    </div>
  );
};

export default App;
