"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminAuth() {
    const router = useRouter();

    useEffect(() => {
        router.push("/admin/auth");
    }, [router]);

    return null;
}