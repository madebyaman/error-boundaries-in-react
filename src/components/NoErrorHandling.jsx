import React from 'react';

const YourName = ({ name }) => {
  if (name === 'error') {
    throw new Error('Error 💣');
  }
  return <p>Hi {name}</p>;
};

export default function NoErrorHandling() {
  const [name, setName] = React.useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
    <h2>No error handling</h2>
      <input
        type="text"
        id="pokemon"
        value={name}
        onChange={handleInputChange}
      />
      <YourName name={name} />
      </>
  )
}
