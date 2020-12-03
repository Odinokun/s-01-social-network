import React from "react";
import s from "./Form.module.css";

const Form = () => {
  return (
    <form className={s.form}>
      <textarea className={s.textarea} cols="30" rows="10"></textarea>
      <input className={s.submit} type="submit" value="Отправить!" />
    </form>
  );
};

export default Form;
