import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Stats from "./Stats";

const ContactForm = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState();
    const onSubmit = (data) => {
        setData(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text"
                    placeholder="First Name"
                    {
                    ...register("firstname", {
                        required: "Please enter your first name",
                    })
                    }
                />
                {errors.firstname && <p className="error-warning">{errors.firstname.message}</p>}

                <input type="text" placeholder="Last Name"

                    {...register("lastname", {
                        required: "Please enter your last name",
                    })} />
                {errors.lastname && <p className="error-warning">{errors.lastname.message}</p>}

                <input type="password"
                    placeholder="Your password"
                    {...register("password",
                        {
                            required: "Please enter your password",
                            minLength: { value: 8, message: "Too short" }
                        })}
                />
                {errors.password && <p className="error-warning">{errors.password.message}</p>}
                <input type="submit" />
            </form>

            {data && (
                <Stats
                    Firstname={data.firstname}
                    Lastname={data.lastname}
                    Password={data.password}
                />
            )}
        </>
    )
};

export default ContactForm;