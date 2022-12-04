export async function loader() {
    const contacts = await (
        await fetch('https://jsonplaceholder.typicode.com/users')
    ).json()
    return { contacts }
}
