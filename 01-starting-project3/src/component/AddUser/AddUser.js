import React, { useState,useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from './AddUser.module.css'

const AddUser = (props) => {
   const nameInputRef= useRef()
   const ageInputRef= useRef()
    // const[enteredUsername,setEnteredUsername]=useState('')
    // const[enteredAge,setEnteredAge]=useState('')
    const [error,setError]=useState('')
    const enteredUserName=nameInputRef.current.value;
    const enteredUserAge=ageInputRef.current.value
    const addUserHandler = (event) => {
        event.preventDefault()
        if(enteredUserName.trim().length===0  || enteredUserAge.trim().length===0){
            setError({
                title:'Invalid Input',
                message:'please ener a valid username and age (non-empty value)'
            })
            return
        }
        if(+enteredUserAge<1){
            setError({
                title:'Invalid Age',
                message:'please ener a valid age (>0) '
            })
            return
        }
        // console.log(enteredUsername,enteredAge)
        props.onAddUser(enteredUserName,enteredUserAge)
        // setEnteredUsername('')
        // setEnteredAge('')
        nameInputRef.current.value='';
        ageInputRef.current.value=''
    }
    // const usernameChangeHandler=(event)=>{
    //     setEnteredUsername(event.target.value)
    // }
    // const ageChangeHandler=(event)=>{
    //     setEnteredAge(event.target.value)
    // }

    return (
        <>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={()=>setError(null)}/>}
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" ref={nameInputRef}/>
                <label htmlFor="age">age(Years)</label>
                <input type="number" id="age" ref={ageInputRef}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </>
    )
}

export default AddUser