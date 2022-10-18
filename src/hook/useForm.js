import { useMemo } from "react";
import { useEffect, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  //estado inicial del formulario
  const [formState, setFormState] = useState(initialForm);
  //estado de validacion
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  const isFormValid = useMemo(() => {
    //validar formulario
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }
    return true; //form valido
  }, [formValidation]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckendValues = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage = "Este campo es requerido"] =
        formValidations[formField];

      formCheckendValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }
    setFormValidation(formCheckendValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation,
    isFormValid,
  };
};
