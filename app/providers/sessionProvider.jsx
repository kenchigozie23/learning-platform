'use client'
import React, { Children } from "react"
import {SessionProvider} from "next-auth/react"

export default function NextAuthSessionProvider({children}){
    return <SessionProvider>{children}</SessionProvider>
}