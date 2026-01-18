"use client";
import dynamic from "next/dynamic";

const StoreMap = dynamic(() => import("@/components/layout/StoreMap"), {
    ssr: false,
});

export default function ClientStoreMap() {
    return <StoreMap />;
}
