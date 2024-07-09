/**
 * Spread Operator: JSX
 * 
 * Demonstrates the use of the spread operator in JSX.
 */

// This code is for a React app, you need to have a basic understanding of React first.

export function Profile({ name, age }) {
    return (
      <div>
        <h1>{name}</h1>
        <p>{age}</p>
      </div>
    );
  }
  
  // This would be the entry point of your React app.
  export function App() {
    const person = { name: "John", age: 30 };
    return <Profile {...person} />;
  }
  
  /**
   * Summary:
   * 
   * The spread operator can simplify passing props to components in React.
   */
  