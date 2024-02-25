import css from './Home.module.css';

const image =require("../../../images/phone.jpg")
export default function Home() {
     return (
        <div className={css.imageContainer}>
        <img className={css.phonebookImage} src={image} alt="phonebook"></img></div>)
}