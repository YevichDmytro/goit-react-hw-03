import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Contact = ({ contactName, contactNumber }) => {
  return (
    <>
      <div>
        <p>{contactName}</p>
        <p>{contactNumber}</p>
      </div>
      <Button variant='outlined' startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </>
  );
};

export default Contact;
