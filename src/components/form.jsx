import { FaPlus } from 'react-icons/fa'
import '../App.css';


export default function Form(props) {
  return (
    <form onSubmit={props.onSubmit} action="#" method="">
      <div className="tarefas">
        <input onChange={props.onChange} type={props.type} value={props.value} />
        <button type={props.buttonType}><FaPlus /></button>
      </div>
    </form>
  )
}
