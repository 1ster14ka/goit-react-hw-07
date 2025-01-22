import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "../Contact/Contact.module.css";
import { deleteContacts } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const Contact = ({ data: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className={css.contactItem}>
          <FaUser />
          <h3>{name}</h3>
        </div>
        <div className={css.contactItem}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => dispatch(deleteContacts(id))}
        className={css.contactItemBtn}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
