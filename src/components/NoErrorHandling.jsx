import React from 'react';

const YourName = ({ name }) => {
    return <p>HELLO {name.toUpperCase()}</p>
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
        placeholder='Your Name'
      />
      <button className='outline secondary' onClick={() => setName(undefined)}>Click me to throw an error!</button>
      <YourName name={name}/>
      </>
  )
}
