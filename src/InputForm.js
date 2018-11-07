import React from 'react';

export default function InputForm(props){
  return(
    <form action="/action_page.php" onSubmit={(e) => {
      e.preventDefault()
      props.onSubmit(e.target.enteredDate.value)
      }}>
      Date:
      <input type="date" name="enteredDate" />
      <input type="submit" 
      />
    </form>
  );
}