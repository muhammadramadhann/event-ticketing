import React from "react";
import Button from "@/Components/Partials/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import { Head, useForm } from "@inertiajs/inertia-react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <Guest>
            <Head title="Forgot Password" />

            <div className="mb-4">
                Forgot your password? No problem. Just let us know your email
                address and <br /> we will email you a password reset link that
                will allow you to choose a new one.
            </div>

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div className="row">
                    <div className="col-md-4">
                        <Input
                            type="text"
                            name="email"
                            value={data.email}
                            className="form-control"
                            placeholder="Enter your registered email"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                    </div>
                </div>

                <InputError message={errors.email} className="mt-2" />

                <div className="flex items-center justify-end mt-4">
                    <Button
                        className="btn btn-main-blue"
                        processing={processing}
                    >
                        Send Reset Link
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
