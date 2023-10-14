"use client"
import { protect } from "@/lib/protect";
import { useRouter } from "next/navigation";

export default function ProtectedLayout({ children }) {
    const router = useRouter();
    if (!protect()) {
        router.push("/");
        return null;
    } else {
        return { children };
    }
}
