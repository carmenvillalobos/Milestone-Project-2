import React from "react";
import NavBar from "./NavBar"
import { useState } from 'react';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import Homepage from "./Homepage";

function Form (){
  const [form, setForm] = useState({
    task: '',
    completion: false
  });

  const onChange = (e) => {
    const { value, name, type, checked } = e.target;

    setForm((state) => ({
      ...state,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  const showData = () => {
    console.log('Form: ', form);
  }

  const onSubmit = (e) => {
      e.preventDefault();
      showData();
      }

  return (
    <div>
      <NavBar/>
      <h1>To-do</h1>

      <form onSubmit={onSubmit}>

        <label>
          <div>Task:</div>
          <textarea onChange={onChange} name="task" value ={form.task}></textarea>
        </label>

        <div>
          <label>
            <div>
              Complete?
                <div>
                  <input type="checkbox" onChange={onChange} name="completion" value ={form.completion}></input>Yes
                </div>
            </div>
          </label>
        </div>
        <div>
        <Link to="/tasks">
          <button>Submit</button>
        </Link>
        </div>
      </form>
    </div>
  )
}

export default Form;