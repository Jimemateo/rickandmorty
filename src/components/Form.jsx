import styles from "./form.module.css"
import { useState} from "react";
import validation from "../Validation";
import style from "./validation.module.css"


const Form = ({login}) => {

    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email:'',
        password:''
    })

const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))

  }
const handleOnSubmit = (event) => {
    event.preventDefault();
    login(userData);

 }
    return (
        <form className={styles.formStyle} onSubmit={handleOnSubmit}>
            <div className={styles.emailStyle}>

            <label htmlFor="email">Email: </label>
            <input className={styles.inputStyle}
            name="email"
            type="email"
            placeholder="Your email goes here"
            value={userData.email}
            onChange={handleChange}></input>
            {errors.email && <p className={style.errorStyle}>{errors.email}</p>}

            <label htmlFor="password">Password: </label>
            <input className={styles.inputStyle}
            name="password"
            type="password"
            placeholder="Your password goes here"
            value={userData.password}
            onChange={handleChange}></input>
            {errors.password && <p className={style.errorStyle}>{errors.password}</p>}

            <p>&nbsp;</p>

            <button className={styles.formButton}>Submit</button>
            </div>
        </form>

    )
}

export default Form;