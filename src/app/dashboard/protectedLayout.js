"use client"
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function ProtectedLayout({ children }) {
    const isAuth = useSelector(state => state.authReducer.isAuth);
    if (!isAuth) {
        redirect("/")
    } else {
        return children;
    }
}
