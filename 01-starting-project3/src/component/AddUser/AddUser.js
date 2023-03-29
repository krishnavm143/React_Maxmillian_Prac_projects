import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from './AddUser.module.css'

const AddUser = (props) => {
    const[enteredUsername,setEnteredUsername]=useState('')
    const[enteredAge,setEnteredAge]=useState('')
    const [error,setError]=useState('')
    const addUserHandler = (event) => {
        event.preventDefault()
        if(enteredUsername.trim().length===0  || enteredAge.trim().length===0){
            setError({
                title:'Invalid Input',
                message:'please ener a valid username and age (non-empty value)'
            })
            return
        }
        if(+enteredAge<1){
            setError({
                title:'Invalid Age',
                message:'please ener a valid age (>0) '
            })
            return
        }
        // console.log(enteredUsername,enteredAge)
        props.onAddUser(enteredUsername,enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }
    const usernameChangeHandler=(event)=>{
        setEnteredUsername(event.target.value)
    }
    const ageChangeHandler=(event)=>{
        setEnteredAge(event.target.value)
    }

    return (
        <>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={()=>setError(null)}/>}
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler}/>
                <label htmlFor="age">age(Years)</label>
                <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </>
    )
}

export default AddUser