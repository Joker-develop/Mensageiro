"use client";

import { Params } from "next/dist/server/request/params";
import { useParams } from "next/navigation";

export function USEROUTER() {
    const router: Params = useParams();

    return router.username;
}