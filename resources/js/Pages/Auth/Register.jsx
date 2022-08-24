import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import Label from "@/Components/Label";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <Guest>
            <Head title="Register" />
            <div className="row justify-content-center mb-5">
                <div className="col-lg-5 col-sm-8">
                    <form
                        onSubmit={submit}
                        className="p-lg-4 p-3 border rounded"
                    >
                        <div className="text-center mb-3">
                            <h4 className="fw-bold">Register</h4>
                        </div>
                        <div>
                            <Label
                                forInput="name"
                                value="Name"
                                className="form-label fw-bold"
                            />

                            <Input
                                type="text"
                                name="name"
                                value={data.name}
                                className="form-control"
                                autoComplete="name"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2 text-danger"
                            />
                        </div>

                        <div className="mt-3">
                            <Label
                                forInput="email"
                                value="Email"
                                className="form-label fw-bold"
                            />

                            <Input
                                type="email"
                                name="email"
                                value={data.email}
                                className="form-control"
                                autoComplete="username"
                                handleChange={onHandleChange}
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2 text-danger"
                            />
                        </div>

                        <div className="mt-3">
                            <Label
                                forInput="password"
                                value="Password"
                                className="form-label fw-bold"
                            />

                            <Input
                                type="password"
                                name="password"
                                value={data.password}
                                className="form-control"
                                autoComplete="new-password"
                                handleChange={onHandleChange}
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2 text-danger"
                            />
                        </div>

                        <div className="mt-3">
                            <Label
                                forInput="password_confirmation"
                                value="Confirm Password"
                                className="form-label fw-bold"
                            />

                            <Input
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="form-control"
                                handleChange={onHandleChange}
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2 text-danger"
                            />
                        </div>

                        <div className="d-flex flex-column align-items-center justify-content-center mt-4">
                            <div className="mb-3">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="text-decoration-none text-main-blue"
                                >
                                    Log In
                                </Link>
                            </div>
                            <Button
                                className="btn btn-main-blue w-100 fw-bold"
                                processing={processing}
                            >
                                Register
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Guest>
    );
}
