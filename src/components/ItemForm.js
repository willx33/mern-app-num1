import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = () => {
  const [name, setName] = useState('');

  const onSubmit = async e => {
    e.preventDefault();

    try {
      await axios.post('/api/items', { name });
      setName('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ItemForm;
