"use client";
import NavBar from "@/components/NavBar";
import { logIn } from "@/store/slices/authSlice";
import { gql, useMutation } from "@apollo/client";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SIGNUP_MUTATION = gql`
    mutation Signup(
        $email: String!
        $password: String!
        $firstName: String!
        $lastName: String!
        $username: String!
        $phoneNumber: String!
    ) {
        signUp(
            input: {
                email: $email
                password: $password
                firstName: $firstName
                lastName: $lastName
                username: $username
                phoneNumber: $phoneNumber
            }
        ) {
            token
            user {
                id
                username
            }
        }
    }
`;

export default function SignUp() {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        username: "",
        phoneNumber: "",
        email: "",
        password: "",
    });
    const isAuth = useSelector((state) => state.authReducer.isAuth);
    useEffect(() => {
        if (isAuth) {
            redirect("/dashboard");
        }
    }, [isAuth]);
    const [signIn, { loading, error }] = useMutation(SIGNUP_MUTATION);
    async function handleSignUp() {
        try {
            const response = await signIn({
                variables: {
                    email: user.email,
                    password: user.password,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    username: user.username,
                    phoneNumber: user.phoneNumber,
                },
            });
            console.log(response);
            localStorage.setItem("token", response.data.signUp.token);
            dispatch(logIn(response.data.signUp.user.username));
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
            <div>SignUp Form</div>
            <div className="d-flex flex-column gap-2">
                <label>First Name</label>
                <input
                    placeholder="Enter your first name"
                    value={user.firstName}
                    onChange={(e) => {
                        setUser({ ...user, firstName: e.target.value });
                    }}
                />
                <label>Last Name</label>
                <input
                    placeholder="Enter your last name"
                    value={user.lastName}
                    onChange={(e) => {
                        setUser({ ...user, lastName: e.target.value });
                    }}
                />
                <label>Username</label>
                <input
                    placeholder="Enter your username"
                    value={user.username}
                    onChange={(e) => {
                        setUser({ ...user, username: e.target.value });
                    }}
                />
                <label>Phone Number</label>
                <input
                    placeholder="Enter your phone number"
                    type="number"
                    value={user.phoneNumber}
                    onChange={(e) => {
                        setUser({ ...user, phoneNumber: e.target.value });
                    }}
                />
                <label>Email</label>
                <input
                    placeholder="Enter your email"
                    type="email"
                    value={user.email}
                    onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                    }}
                />
                <label>Password</label>
                <input
                    placeholder="Enter your password"
                    type="password"
                    value={user.password}
                    onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                    }}
                />
                <button className="btn btn-primary" onClick={handleSignUp}>
                    Sign Up
                </button>
            </div>
        </main>
        </>
    );
}
