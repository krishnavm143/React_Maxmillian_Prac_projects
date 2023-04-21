import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [error, setError] = useState(false)

  const inputSubmitHandler = (e) => {
    e.preventDefault()
    if (enteredName.trim() === "") {
      setError(true)
      return
    }
    console.log(enteredName)
    setEnteredName('')
  }
  const nameInputClasses = !error ? 'form-control' : 'form-control invalid'
  return (
    <form onSubmit={inputSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} onChange={(e) => {
          setError(false)
          setEnteredName(e.target.value)
        }} type='text' id='name' />
        {error && <p className="error-text">Please Enter some value</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
