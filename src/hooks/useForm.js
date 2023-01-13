import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
	const [formState, setFormState] = useState(initialForm);
	const [formValidation, setFormValidation] = useState({});
	useEffect(() => {
		createValidators();
	}, [formState]);

	const formError = useMemo(() => {
		for (const formValue of Object.keys(formValidation)) {
			if (!!formValidation[formValue]) return true;
		}
		return false;
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
		const formCheckValues = {};

		for (const formField of Object.keys(formValidations)) {
			const [fn, errorMessage = "Error"] = formValidations[formField];
			formCheckValues[`${formField}Error`] = fn(formState[formField])
				? false
				: errorMessage;
		}

		setFormValidation(formCheckValues);
	};

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
		...formValidation,
		formError,
	};
};
