"use client"
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function ProtectedLayout({ children }) {
    const router = useRouter();
    const isAuth = useSelector(state => state.authReducer.isAuth);
    if (!isAuth) {
        router.push("/");
        return null;
    } else {
        return children;
    }
}
