import Reacr from 'react';
import './form.css';
export default function Form() {
  return (
    <div className="FormCont">
      <label>Name</label>
      <br></br>
      <input type="text"></input>
      <br></br>
      <label>Email Address</label>
      <br></br>
      <input type="text"></input>
      <br></br>
      <label>Message</label>
      <br></br>
      <textarea></textarea>
      <br></br>
      <button id="submit_btn">Submit</button>
    </div>
  );
}
