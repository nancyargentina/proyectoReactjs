import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { checkoutSchema } from './checkoutSchema'
import { BsExclamationTriangle, BsCheckCircleFill } from "react-icons/bs";
import { cartContext } from '../../context/cartContext';
import { generarOrden} from "../../helpers/GenerarOrden"


export const CheckoutForm=()=>{
    const { cart, totalCart,clear }=useContext(cartContext)
	
    const initialValues = {
		name: '',
		tel: '',
		email: '',
		emailConfirm: '',
	}

    return(
		<div className="container mx-auto p-2">
			<h3>Completa los datos para confirmar la compra</h3>
			<hr/>
        	<Formik initialValues={initialValues} validationSchema={checkoutSchema} onSubmit={(values) => {	generarOrden(values, cart, totalCart, clear)}}>
				{(formik) => (
					<Form className='container mx-auto col-6'>
						<div className="form-group row">
							<label htmlFor="name" className='col-form-label'>Nombre </label>
							<Field className={(formik.errors.name && formik.touched.name) ? 'form-control is-invalid' : 'form-control'}
							type="text"	id="name" name="name" placeholder="Escribe aquí tu nombre"/>
							<ErrorMessage name="name">{msg => <span className="invalid-feedback"><BsExclamationTriangle/>{msg}</span>}</ErrorMessage> 
						</div>
						<div className="form-group row">
							<label htmlFor="tel" className='col-form-label'>Teléfono </label>
							<Field className={(formik.errors.tel && formik.touched.tel) ? 'form-control is-invalid' : 'form-control'} type="text" id="tel" name="tel" placeholder="Escribe aquí tu teléfono"/>
							<ErrorMessage name="tel">{msg => <span className="invalid-feedback"><BsExclamationTriangle/>{msg}</span>}</ErrorMessage>
						</div>
						<div className="form-group row">
							<label htmlFor="email" className='col-form-label'>Correo electrónico </label>
							<Field className={(formik.errors.email && formik.touched.email) ? 'form-control is-invalid' : 'form-control'} type="email" id="email" name="email" placeholder="correo electrónico" />
							<ErrorMessage name="email">{msg => <span className="invalid-feedback"><BsExclamationTriangle/>{msg}</span>}</ErrorMessage>
						</div>
						<div className="form-group row">
							<label htmlFor="emailConfirm" className='col-form-label'>Confirme correo electrónico </label>
							<Field className={(formik.errors.emailConfirm && formik.touched.emailConfirm) ? 'form-control is-invalid' : 'form-control'} type="email" id="emailConfirm" name="emailConfirm" placeholder="correo electrónico nuevamente"/>
							<ErrorMessage name="emailConfirm">{msg => <span className="invalid-feedback"><BsExclamationTriangle/>{msg}</span>}</ErrorMessage>
						</div>
                        <div className="hstack p-2">
                            <Link to="/cart"className="btn btn-primary indigo">Volver</Link>
                            <button type="submit" className="btn btn-primary indigo ms-auto">Confirmar <BsCheckCircleFill/></button>
                        </div>
					</Form>
				)}
			</Formik>
		</div>
    )
}