import "./TareaStyles.css"
import image from "../../assets/images.png"
import { useState } from "react"

export default function Tarea({ task, deleteTask }) {
    const [completada, setCompletada] = useState(false)

    const handleCheckboxChange = (event) => {
        setCompletada(event.target.checked)
    }

    return (
        <li className={completada ? "container-tarea-completada" : "container-tarea"}>
            <div className="tarea-div">
                <input
                    id="completar"
                    type="checkbox"
                    className="input-checkbox"
                    checked={completada}
                    onChange={handleCheckboxChange}
                />
                <h2 className={completada ? "completada" : "noCompletada"}>{task.task}</h2>
            </div>

            <h3 onClick={() => deleteTask(task.id)} className="button-48">
                <img className="img-trash" src={image} alt="boton" />
            </h3>
        </li>
    )
}
