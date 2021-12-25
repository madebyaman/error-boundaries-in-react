import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Reset Error</button>
    </div>
  );
}

const YourName = ({ name }) => {
  return <p>HELLO {name.toUpperCase()}</p>;
};

export default function ErrorHandlingErrorBoundaries() {
  const [name, setName] = React.useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h2>Error handling with React Error Boundaries</h2>
      <input
        type="text"
        id="pokemon"
        value={name}
        onChange={handleInputChange}
        placeholder="Your Name"
      />
      <button className="outline secondary" onClick={() => setName(undefined)}>
        Click me to throw an error!
      </button>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setName('')}
        resetKeys={[name]}
      >
        <YourName name={name} />
      </ErrorBoundary>
    </>
  );
}
