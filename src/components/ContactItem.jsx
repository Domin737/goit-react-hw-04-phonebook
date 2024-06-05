import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 5px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cc0000;
  }
`;

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <Item>
    {name}: {number}
    <Button onClick={() => onDeleteContact(id)}>Delete</Button>
  </Item>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
