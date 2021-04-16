import style from '../styles/login/Login.module.scss'
import NumberField from '../components/common/NumberField'
import { useRouter } from 'next/router'
import Layout from '../components/common/Layout'
import MetaComponent from '../components/common/MetaComponent'
import Link from 'next/link'
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form'
const Login = (props) => {
    const param = useRouter().query.pathParam
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const NumberErrorRef = useRef(false);
    // const NumberErrorMssg = useRef(null)
    const [formError, setFormError] = useState({error: false, message: null})

    const submitForm = (formValues) => {
        console.log(formValues)
    }
    console.log(errors)

    return(
        <>
        <MetaComponent title="Login" description="Login page" name="Login Page" url="http://0.0.0.0:3000/login"/>
        <Layout mobileNav={props.mobileNav}>
        <div className={style.form_container}>
            <div className={style.innerContainer}>
            {param === "signup" ? <div className="ui green message small">Account Created Sucessfully. You can Login Now</div> : ""}
                <h1>Login To Corecare</h1>
                        <form className={style.login_form + " ui big form"} onSubmit={handleSubmit(submitForm)}>
                            <div>
                                <NumberField input={null} label="Mobile Number" meta={null} register={register}/>
                                <div className="field">
                                    <label>Password</label>
                                    <input placeholder="password" type="password" className={style.password_field} {...register("password", {required: true, minLength: {value: 8, message: "Password should be greater then 8 characters"}})}/>
                                </div>
                                <Link href="/login/forgot_password">
                                    <a className="forgot-password">Forgot passowrd</a>
                                </Link>
                                <div style={{textAlign: 'right'}}>
                                    <button className="ui secondary button" onClick={() => props.openSignup()} type="button">
                                        Signup
                                    </button>
                                    <button className="ui positive right labeled icon button" type="submit">
                                        Login
                                        <i className="checkmark icon"></i>
                                    </button>
                            </div>
                            </div>
                            <div className={`ui message red ${errors.number || errors.password ? "visible" : "hidden"}`}>
                                <p>{errors?.number?.message || errors?.password?.message}</p>
                            </div>
                        </form>
                </div>
        </div>
        </Layout>
        </>
    )
}

// export default connect(null, { login, openSignup })(Login)
export default Login