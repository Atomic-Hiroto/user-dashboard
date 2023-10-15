"use client";
import { gql, useMutation } from "@apollo/client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../store/slices/authSlice";
import NavBar from "@/components/NavBar";

const SIGNIN_MUTATION = gql`
    mutation Signin($email: String!, $password: String!) {
        signIn(input: { email: $email, password: $password }) {
            token
            user {
                id
                username
            }
        }
    }
`;

export default function Home() {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [signIn, { loading, error }] = useMutation(SIGNIN_MUTATION);
    const isAuth = useSelector((state) => state.authReducer.isAuth);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            // jwt graphql logic
        }
    }, []);
    useEffect(() => {
        if (isAuth) {
            redirect("/dashboard");
        }
    }, [isAuth]);

    async function handleLogin() {
        try {
            const response = await signIn({
                variables: {
                    email: user.email,
                    password: user.password,
                },
            });
            localStorage.setItem("token", response.data.signIn.token);
            dispatch(logIn(response.data.signIn.user.username));
        } catch (error) {
            console.log(error);
        }
    }

    return (<>
        <NavBar />
        <main
            className={
                "d-flex justify-content-center flex-column align-items-center gap-5"
            }
        >
            <div>
                Welcome to User Dashboard! Kindly Login or{" "}
                <Link href="/signup">Signup</Link> to access the dashboard.
            </div>
            <div className="d-flex flex-column gap-2">
                <label>Email</label>
                <input
                    placeholder="Enter your email"
                    type="email"
                    value={user.email}
                    onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                    }
                />
                <label>Password</label>
                <input
                    placeholder="Enter your password"
                    type="password"
                    value={user.password}
                    onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                    }
                />
                <button className="btn btn-primary" onClick={handleLogin}>
                    login
                </button>
            </div>
        </main>
        </>
    );
}
