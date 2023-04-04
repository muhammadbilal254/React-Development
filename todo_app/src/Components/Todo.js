import React, { useEffect, useState } from 'react'
import "./style.css";


// Retireve Data from local Storage

const getLocalData = () => {
    const lists = localStorage.getItem("todos");

    if (lists) {
        return JSON.parse(lists);
    } else {
        return [];
    }
};




const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditable, setIsEditable] = useState("")
    const [toggle, setToggle] = useState(false)



    // Add Todos Items
    const addItems = () => {
        if (!inputData) {
            alert("plz fill the input")
        } else if (inputData && toggle) {
            setItems(
                items.map((elem) => {
                    if (elem.id === isEditable) {
                        return { ...elem, todo: inputData };
                    } else {
                        return elem
                    }
                })
            );
            setInputData("")
            setIsEditable(null)
            setToggle(false)
        }
        else {
            const newInputData = {
                id: new Date().getTime().toString(),
                todo: inputData
            }
            setItems([...items, newInputData]);
            setInputData("");
        }
    }


    // Delete Function
    const deleteItem = (index) => {
        const updatedItems = items.filter((curElem) => {
            return curElem.id !== index;
        });
        setItems(updatedItems);
    };

    // const deleteItem = (index) => {
    //     const deleteItems = items.filter((elem) => {
    //         return elem.id !== index;
    //     })
    //     setItems(deleteItems)
    // }
    // Delete all Elements
    const deleteAll = () => {
        setItems([])
    }


    // Edit Function
    const editTodo = (index) => {
        const edit_todo = items.find((curElem) => {
            return curElem.id === index;
        });
        setInputData(edit_todo.todo)
        setIsEditable(index)
        setToggle(true)
    }

    // Add data to Local Storage using useEffect
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(items))
    }, [items])


    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="Todo Images icon" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>
                    {/* Add Todo Input bar */}
                    <div className="addItems">
                        <input type="text" placeholder='✍ Add Todo' className="form-control" value={inputData} onChange={(event) => { setInputData(event.target.value) }} />

                        {toggle ? <i className="far fa-edit add-btn" onClick={addItems}></i> :

                            <i className="fa fa-plus add-btn" onClick={addItems}></i>
                        }
                    </div>
                    {/* Show Todo Item */}
                    <div className="showItems">
                        {

                            items.map((curElem) => {
                                return (
                                    <div className="eachItem" key={curElem.id}>
                                        <h3>{curElem.todo}</h3>
                                        <div className="todo-btn">
                                            <i
                                                className="far fa-edit add-btn" onClick={() => { editTodo(curElem.id) }}></i>
                                            <i
                                                className="far fa-trash-alt add-btn" onClick={() => { deleteItem(curElem.id) }}></i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* Delete all todos btn */}
                    <div className="showItems">
                        <button
                            className="btn effect04"
                            onClick={deleteAll}
                            data-sm-link-text="Remove All">
                            <span> CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
