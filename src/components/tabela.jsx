import {FaEdit, FaWindowClose} from 'react-icons/fa'

export default function Tabela(props) {

    return (

      <ul className={props.className}>
      {props.tarefas.map((item, index) => {
        return <li key={index} >
          <div>
            {item}
          </div>
          <div>
            <FaEdit onClick={() => props.handleEdit(index)} />
            <FaWindowClose onClick={() => props.handleDelete(index)} />
          </div>
        </li>
      }

      )
      }
    </ul>

    )

}
