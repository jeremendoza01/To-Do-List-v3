import './styles.css'

export default function AgregarTarea({ handleChange, addTask, task }) {

  return (
    <div className="agregar_tarea">
      <form onSubmit={addTask} className='form'>
        <input
          type="text"
          onChange={handleChange}
          className='input-add'
          value={task}
          placeholder='Agregar una Tarea: '
        />
        <button class="button-81" type='submit' role="button">ADD</button>
      </form>
    </div>

  )
}
