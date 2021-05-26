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
                <input type="text" placeholder="First Name" {...register("firstname")} />
                <input type="text" placeholder="Last Name" {...register("lastname")} />
                <input type="password" placeholder="Your password" {...register("password")} />
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