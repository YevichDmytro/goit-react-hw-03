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

const initialValues = {
  username: "",
  usertel: ""
};

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    onAdd(values);
    actions.resetForm();
  };

  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form className={style.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          type='text'
          name='username'
          id={nameFieldId}
          className={style.field}
        />

        <label htmlFor={numberFieldId}>Number</label>
        <Field
          type='text'
          name='usertel'
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