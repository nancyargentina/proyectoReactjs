import * as Yup from 'yup'

export const checkoutSchema = Yup.object().shape({
    name: Yup.string()
		.required('El nombre es obligatorio')
		.min(7, 'Deben ser 7 caracteres o más')
		.max(50, 'Demasiado largo'),
	tel: Yup.string()
		.required('El teléfono es obligatorio')
		.min(6,'Deben ser 6 caracteres o más')
		.max(12, 'Deben ser 12 caracteres o menos'),
	email: Yup.string()
		.email('Correo inválido')
		.required('El correo es obligatorio'),
	emailConfirm: Yup.string()
		.email('Correo inválido')
		.when("email", {
			is: val => (val && val.length > 0 ? true : false),
			then: Yup.string().oneOf(
				[Yup.ref("email")],
				"ambos correos deben ser iguales"
			)
		})
})

