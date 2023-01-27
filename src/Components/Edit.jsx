import { useNavigate, useParams } from "react-router-dom"
import React from "react";
import { useState, useEffect } from 'react';
import NavBar from "./NavBar";

function EditTask(){
    const [form, setForm] = useState({
      tasks: '',
      complete: false
    });
    let {id} = useParams();
    let navigate = useNavigate();
  
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/api/tasks/${id}`)
            const resData = await response.json()
            setForm(resData)
        }
        fetchData()
    }, [])

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
  
        fetch(`http://localhost:3000/api/tasks/${id}`, { 
            method: 'PUT', 
            body: JSON.stringify(form),
            headers: {"Content-Type": "application/json"}
            }) .then(response => response.json())
            .then(data => console.log(data)) 
            .catch(error => console.error(error))
            console.log("Edited: ", id)
  
   
    navigate('/tasks');
        }
  
    return (
      <div>
        <NavBar/>
        <h1>To-do</h1>
  
        <form onSubmit={onSubmit}>
  
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
                      value={form.complete}
                      checked={form.complete}>
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
  
  export default EditTask;
