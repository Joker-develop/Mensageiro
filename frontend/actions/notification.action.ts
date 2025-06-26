export  const getNotifications = async (username: string) => {
    try {
        const resp = await fetch( `http://localhost:8000/publications/user/${username}/notifications`);
        const data = await resp.json();
        if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");
        
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const markNotificationsAsRead = async (username: string) => {
    try {
        const resp = await fetch( `http://localhost:8000/publications/user/${username}/notificationsAsRead`);
        const data = await resp.json();
        if ( !resp.ok ) throw new Error( data.error ||"Alguma coisa está errada");
        
        return data;
    } catch (error) {
        console.error(error);
    }
}