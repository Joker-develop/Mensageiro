export const getFeddPosts = async () => {

    try {
        const resp = await fetch( "http://localhost:8000/publications/feed");
        const data = await resp.json();
        if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");
        
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const toggleLike  = async (userId: string, postId: string) => {
    try {
        const resp = await fetch( `http://localhost:8000/publications/post/${postId}/like`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId }),
        });
        const data = await resp.json();
        if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");
        
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const createComment = async (authorId: string, postId: string, content: string) => {
    try {
        const resp = await fetch( `http://localhost:8000/publications/post/${postId}/comment`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ authorId, content }),
        });
        const data = await resp.json();
        if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");
        
        return { success: true, data };
    } catch (error) {
        console.error(error);
    }
}

export const deletePost = async (authorId: string, postId: string) => {
    try {
        const resp = await fetch( `http://localhost:8000/publications/post/${postId}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ authorId }),
        });
        const data = await resp.json();
        if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");
        
        return { success: true, data };
    } catch (error) {
        console.error(error);
        return { success: false, error: "Falha ao deletar o post" };
    }
}; 

export const deleteComment = async (authorId: string, commentId: string, postId: string) => {
    try {
        const resp = await fetch( `http://localhost:8000/publications/post/${postId}/comment/${commentId}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ authorId }),
        });
        const data = await resp.json();
        if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");
        
        return { success: true, data };
    } catch (error) {
        console.error(error);
        return { success: false, error: "Falha ao deletar o comentário" };
    }
}; 