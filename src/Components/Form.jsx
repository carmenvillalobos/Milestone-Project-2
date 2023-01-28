import React from "react";
import NavBar from "./NavBar"
import './Form.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import "./Form.css"

function Form (){
  const [form, setForm] = useState({
    day: '',
    tasks: '',
    complete: false
  });

  let navigate = useNavigate();

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

    fetch('http://localhost:3000/api/tasks', { 
      method:'POST', 
      body: JSON.stringify(form),
      headers:{"Content-Type": "application/json"}
      }).then(response => response.json())
      .then(data => console.log(data)) 
      .catch(error => console.error(error))
      navigate('/tasks');
  }

  return (
    <div>
      <h1>Create A Task</h1>
      <NavBar/>
      <form onSubmit={onSubmit}>
      <div>
      <label>
          <div className="day">Day:</div>
          <select 
            onChange={onChange}
            className="round" 
            name="day">
              <option disabled selected value> - Select An Option - </option>
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
          </select>
        </label>
        </div>

        <label>
          <div>Task:</div>
          <textarea 
            onChange={onChange} 
            className="task"
            name="tasks" 
            value ={form.tasks}>
          </textarea>
        </label>

        <div className="check">
          <label>
            <div>
              Task Completed?
                <div>
                  <input 
                    type="checkbox"
                    className="comp" 
                    onChange={onChange} 
                    name="complete" 
                    value={form.complete}>
                  </input> Yes
                </div>
            </div>
          </label>
        </div>
        <Button 
          size="sm" 
          type='submit'
          className="delete">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default Form;