import React from "react";
import { useState } from 'react';
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom"

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
    method: 'POST', 
    body: JSON.stringify(form),
    headers: {"Content-Type": "application/json"}
    }) .then(response => response.json())
    .then(data => console.log(data)) 
    .catch(error => console.error(error))

 
  navigate('/tasks');
      }

  return (
    <div>
      <NavBar/>
      <h1>To-do</h1>

      <form onSubmit={onSubmit}>

      <div>
      <label>
          <div>Day:</div>
          <select 
            onChange={onChange} 
            name="day">
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
            name="tasks" 
            value ={form.tasks}>
          </textarea>
        </label>


        <div>
          <label>
            <div>
              Complete?
                <div>
                  <input 
                    type="checkbox" 
                    onChange={onChange} 
                    name="complete" 
                    value={form.complete}>
                  </input>Yes
                </div>
            </div>
          </label>
        </div>

        <div>
          <button>Submit</button>
        </div>

      </form>
    </div>
  )
}

export default Form;