

export const getProfileByUsername = async (username : string) => {
    try {

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
}

export const getUserPosts = async (userId: string) => {
    try {
        const resp = await fetch( `http://localhost:8000/publications/user/${userId}/posts?page=1`);

        const data = await resp.json();
        if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");
        
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const getUserLikedPosts = async (userId: string) => {
    try {
        const resp = await fetch( `http://localhost:8000/publications/user/${userId}/likes`);

        const data = await resp.json();
        if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");
        
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const getFollowUserPosts = async (userId: string) => {
    try {
        const resp = await fetch( `http://localhost:8000/publications/user/${userId}/following`);

        const data = await resp.json();
        if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");
        
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const isFollowing = async (username: string, userId: string) => {
    try {
        const 
            correntUserId = await getProfileByUsername(username),
            authId = correntUserId.id;

        if (!correntUserId) return false;

        const resp = await fetch( `http://localhost:8000/publications/user/${userId}/isfollowing`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ authId }),
        });

        const data = await resp.json();
        if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");
        
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const updateProfile = async (username: string, formData: FormData) => {

    try {

        const 
        correntUserId = await getProfileByUsername(username),
        authId = correntUserId.id;

        if (!correntUserId) return false;

        console.log({authId})

        const name = formData.get("name") as string;
        const bio = formData.get("bio") as string;
        const location = formData.get("location") as string;
        const website = formData.get("website") as string;

        console.log({name, bio, location, website})
        const resp = await fetch( `http://localhost:8000/publications/user/${authId}/update`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, bio, location, website}),
        });

        const data = await resp.json();
        if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");
        
        
        return data;
    } catch (error) {
        console.error("Error updating profile:", error);
        return { success: false, error: "Failed to update profile" };
    }
}