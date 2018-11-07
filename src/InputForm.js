import React from 'react';

export default function InputForm(props){
  return(
  <div className='input-form'>
    <form onSubmit={(e) => {
      e.preventDefault()
      props.onSubmit(e.target.enteredDate.value)
      }}>
      <p>Date</p>
      <input className="form-field" type="date" name="enteredDate" min='1752-10-01' />
      <p><input className="button" type="submit"/></p>
    </form>
  </div>
  );
}