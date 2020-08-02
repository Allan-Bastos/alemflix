import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }
  function handleChange(InfosDoEvento) {
    setValue(InfosDoEvento.target.getAttribute('name'),
      InfosDoEvento.target.value);
  }
  function clearForm() {
    setValues(valoresIniciais);
  }
  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
