import { useForm } from "react-hook-form";
import "../styles/styles.css";

function Form() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="container">

            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Login Form</h1>

                <div className="ui-form">
                    <div className="field">
                        <label>Username</label>
                        <input
                            type="text"
                            {...register("username", {required: 'Username is required'})}
                            placeholder="Username"
                        />
                        {errors.username && <p>{errors.username.message}</p>}
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input
                            type="email"
                            {...register("email", {required: 'Email is required', pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Email is Invalid'
                            }})}
                            placeholder="Email"
                        />
                         {errors.email && <p>{errors.email.message}</p>}
                    </div>

                    <div className="field">
                        <label>Password</label>
                        <input
                            type="password"
                            {...register("password", {required: 'Password is required', minLength: {
                                value: 7,
                                message: 'Password must contain atleast 7 character'
                            }})}
                            placeholder="Password"
                        />
                         {errors.password && <p>{errors.password.message}</p>}
                    </div>

                    <button type="submit" className="button">Submit</button>

                </div>
            </form>
        </div>
    );
}

export default Form;