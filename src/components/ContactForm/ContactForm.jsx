import style from './ContactForm.module.css';
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import { Button } from '@mui/material';
import * as Yup from 'yup';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
});

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (e, actions) => {
    // e.preventDefault();
    // onAdd({
    //   id: nanoid(),
    //   name: e.target.elements.username.value,
    //   number: e.target.elements.usernumber.value,
    // });
    // actions.resetForm();
    console.log(e.target.elements.username.value);
  };

  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  return (
    <Formik onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form className={style.form}>
        <label htmlFor='{nameFieldId}'>Name</label>
        <Field
          type='text'
          name='username'
          id={nameFieldId}
          className={style.field}
        />

        <label htmlFor='{numberFieldId}'>Number</label>
        <Field
          type='text'
          name='usernumber'
          id={numberFieldId}
          className={style.field}
        />

        <Button variant='contained' color='success' type='submit'>
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
