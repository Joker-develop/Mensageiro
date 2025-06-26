"use server"

import { auth, currentUser } from "@clerk/nextjs/server";


export const syncUser = async () => {
    const { userId } = await auth();
    const user = await currentUser();

    if ( !userId || !user ) return;

    const 
        name  = `${user.firstName || ""} ${user.lastName || ""}`,
        username = user.username ?? user.emailAddresses[0].emailAddress.split("@")[0],
        clerkId = userId,
        email = user.emailAddresses[0].emailAddress,
        profileImg = user.imageUrl,
        coverImg = user.imageUrl;

    try {
        const resp = await fetch( "http://localhost:8000/publications/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, name, username, clerkId, profileImg, coverImg }),
        });
    
        const data = await resp.json();
        if ( !resp.ok ) throw new Error(data.error || "Alguma coisa está errada");
    
        return data;
    } catch (error) {
        console.error(error);
    }
}



// export const logOut = async () => {
//     const resp = await fetch("http://localhost:8000/publications/auth/logout", {
//         method: "POST",
//     });

//     const data = await resp.json();
//     if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");

//     return data;
// }

export const getUseheck = async () => {
    const { userId } = await auth();
    const user = await currentUser();

    if ( !userId || !user ) return
    
    try {
        const username = user.username ?? user.emailAddresses[0].emailAddress.split("@")[0];
        return username;
    } catch (error) {
        console.error(error);
    }
}

export const getUserByClerkId = async () => {
    try {
        const { userId } = await auth();
        const user = await currentUser();

        if ( !userId || !user ) return;


        try {
            const username = user.username ?? user.emailAddresses[0].emailAddress.split("@")[0];

            const resp = await fetch( "http://localhost:8000/privateping", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username }),
            });

            const data = await resp.json();
            if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");
            
            return data;
        } catch (error) {
            console.error(error);
        }

    } catch (error) {
        console.error(error);
    }
}