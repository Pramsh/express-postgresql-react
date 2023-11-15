import React,{Fragment, useState, useEffect} from "react"
import Form from "./InputForm"
const ListTodo = () => {

    const [todos, setTodos] = useState([])
    // const [description, setDescription ] = useState("")
    
    const getTodo = () => {
        fetch("http://localhost:5000/todos", {
            method:"GET",
            headers:{"Content-Type":"application/json"}
        })
        .then((data) => data.json())
        .then((data) => setTodos(data))
    }

    const onSubmitForm = async(desc, oldDesc) => {
        try {
            if(desc !== oldDesc){
                const id = todos.find((el) => el.description === oldDesc).todo_id
                fetch("http://localhost:5000/todos/"+id, {
                    method:"PUT",
                    headers:{ "Content-Type":"application/json"},
                    body:JSON.stringify({description:desc})
                })
                .then((data) => data.json)
                .then((data) => console.log(data))
            }
            console.log(desc);
                
            // }
        } catch (error) {
            
        }

    }

    useEffect(() => {
        getTodo()
    }, [])

    return(
        <Fragment>
            {
            todos.length > 0 && todos.map((el, index) => (
                <Form
                    buttonTitle={"Edit"}
                    onSubmitForm={onSubmitForm}
                    desc={el.description}
                    // setDescription={setDescription}
                    key={el.todo_id}
                />
                // <form className="d-flex mt-5" onSubmit={""}>
                //     <input type="text" className="form-control" key={el.todo_id} value={el.description}/>
                //     <button className="btn btn-success">Edit</button>
                // </form>
            )
                
                
            )
            }
        </Fragment>
    )
}

export default ListTodo