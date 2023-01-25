import React from "react";
import { useState } from 'react';

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
    showData();
    e.preventDefault();
  }

  return (
    <div>
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
          <button>Submit</button>
        </div>

      </form>
    </div>
  )
}

export default Form;