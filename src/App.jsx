import { useState } from 'react';
import './App.css'
import AgregarTarea from './components/AgregarTarea/AgregarTarea'
import Tarea from './components/Tarea/Tarea'


function App() {

  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const handleChange = e => {
    setTask(e.target.value)
  }

  const addTask = e => {
    e.preventDefault()
    if (task.trim() === '') {
      alert("Debes agregar una tarea")
      return;
    }

    const newTask = {
      id: Date.now(),
      task,
      completada: false
    }

    setTasks(prevTasks => [newTask, ...prevTasks]);
    setTask('');
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };



  return (
    <>

      <div className='div-main'>
        <h1>LISTA DE TAREAS</h1>
        <div className='div-input'>
          <AgregarTarea
            handleChange={handleChange}
            addTask={addTask}
            task={task}
          />
        </div>
        <div className='div-tareas'>
          {tasks.map((task) => (
            <Tarea key={task.id} task={task} deleteTask={deleteTask} />
          ))}

        </div>
      </div >

    </>
  )
}

export default App
