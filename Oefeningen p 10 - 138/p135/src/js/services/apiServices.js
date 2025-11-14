export async function fetchUser(id) {
    const res = await
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) throw new Error("API probleem");
    return await res.json();
}

export async function fetchUsers(id) {
    const res = await
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) throw new Error("API probleem");
    return await res.json();
}
