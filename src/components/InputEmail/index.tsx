import useSetEmail from 'state/hooks/useSetEmail';
import styles from './InputEmail.module.scss';
import { ChangeEvent, FormEvent, useState } from 'react';
import useEmail from 'state/hooks/useEmail';

function InputEmail() {
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const setEmail = useSetEmail();
  const email = useEmail();

  function onChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    const isValidEmail = validateEmail(email);
    setValidEmail(isValidEmail);
  }

  function onSubmitSubscriber(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert('Obrigado pela sua assinatura, você receberá nossas novidades no e-mail [' + email + '].');
    event.currentTarget.reset();
  }

  function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <form onSubmit={ onSubmitSubscriber } className={ styles.form } method="POST">
      <input 
        onChange={ onChangeEmail }
        className={ styles.form__input } 
        type="email" 
        placeholder="Insira seu e-mail" />
      <button disabled={ !validEmail } className={ styles.form__button }>Assinar newsletter</button>
    </form>
  );
}

export default InputEmail;