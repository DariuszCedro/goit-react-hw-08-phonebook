import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import css from './List.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../../redux/operations';
import { useEffect } from 'react';
import {
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from '../../../redux/selectors';

export const List = () => {
  const dispatch = useDispatch();

  //Selectors--

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  //-----

  const contacts = useSelector(selectFilteredContacts);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}

      <ul>
        {contacts.map(contact => (
          <li className={css.listContact} key={contact.id}>
            {contact.name} : {contact.number}
            <button
              type="button"
              className={css.buttonRemove}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

List.propTypes = {
  showFiltered: PropTypes.array,
  removeContact: PropTypes.func,
};
