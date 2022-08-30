import React, { useEffect } from "react";
import Button from "@/Components/Partials/Button";
import Checkbox from "@/Components/Partials/Checkbox";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Partials/Input";
import InputError from "@/Components/Partials/InputError";
import Label from "@/Components/Partials/Label";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Login({ canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Guest>
            <Head title="Log in" />
            <div className="row justify-content-center mb-5">
                <div className="col-lg-5 col-sm-8">
                    <form
                        onSubmit={submit}
                        className="p-lg-4 p-3 border rounded"
                    >
                        <div className="text-center mb-3">
                            <h4 className="fw-bold">Login</h4>
                            <div className="mt-3">
                                Have no account?{" "}
                                <Link
                                    href="/register"
                                    className="text-decoration-none text-main-blue"
                                >
                                    Register
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Label
                                forInput="email"
                                value="Email"
                                className="form-label fw-bold"
                            />

                            <Input
                                type="text"
                                name="email"
                                value={data.email}
                                className="form-control"
                                autoComplete="username"
                                isFocused={true}
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
                                autoComplete="current-password"
                                handleChange={onHandleChange}
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2 text-danger"
                            />
                        </div>

                        <div className="form-check mt-4">
                            <Checkbox
                                id="remember-me"
                                name="remember"
                                value={data.remember}
                                handleChange={onHandleChange}
                            />
                            <label
                                htmlFor="remember-me"
                                className="form-check-label"
                            >
                                Remember me
                            </label>
                        </div>

                        <div className="d-flex flex-column align-items-center justify-content-center mt-4">
                            <div className="mb-3">
                                {canResetPassword && (
                                    <Link
                                        href={route("password.request")}
                                        className="text-decoration-none text-main-blue"
                                    >
                                        Forgot your password?
                                    </Link>
                                )}
                            </div>

                            <Button
                                className="btn btn-main-blue fw-bold w-100"
                                processing={processing}
                            >
                                Log in
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Guest>
    );
}
