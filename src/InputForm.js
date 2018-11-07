import React from 'react';

export default function InputForm(props){
  return(
  <div className='input-form'>
    <form onSubmit={(e) => {
      e.preventDefault()
      props.onSubmit(e.target.enteredDate.value)
      }}>
      Date:
      <input type="date" name="enteredDate" min='1752-10-01' />
      <input type="submit" 
      />
    </form>
  </div>
  );
}