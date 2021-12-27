import React from 'react';

function ErrorFallback({error}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

const YourName = ({ name }) => {
  try {
    return <p>HELLO {name.toUpperCase()}</p>
  } catch(e) {
    return <ErrorFallback error={e} />
  }
};

export default function ErrorHandlingTry() {
  const [name, setName] = React.useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
    <h2>try-catch error handling</h2>
      <input
        type="text"
        id="pokemon"
        value={name}
        onChange={handleInputChange}
        placeholder='Your Name'
      />
      <button className='outline secondary' onClick={() => setName(undefined)}>Click me to throw an error!</button>
      <YourName name={name} />
      </>
  )
}
