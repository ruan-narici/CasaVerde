import styles from './InputEmail.module.scss';

function InputEmail() {
  return (
    <form className={ styles.form } method="POST">
      <input 
        className={ styles.form__input } 
        type="text" 
        placeholder="Insira seu e-mail" />
      <button className={ styles.form__button }>Assinar newsletter</button>
    </form>
  );
}

export default InputEmail;