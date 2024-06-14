const BASE_URL = 'http://localhost:3000/api/todos'

export const fetchTodos = async () => {

    try {
        const response = await fetch(BASE_URL);
        const todos = await response.json();
        return todos

    } catch (error) {
        console.log(error)
    }
}

export const addTodo = async (payload) => {

    try {
        const response = await fetch(BASE_URL, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        const data = await response.json();
        if (data.status === 'error')
            throw new Error(data.message)
        return data;

    } catch (error) {
        console.log(error)
    }
}
export const deleteTodo = async (id) => {

    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE",

            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        if (data.status === 'error')
            throw new Error(data.message)

        return data;

    } catch (error) {
        console.log('Error', error)
    }
}
export const updateTodo = async (todo, id) => {

    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "PUT",

            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ task: todo }),

        });
        const data = await response.json();
        if (data.status === 'error')
            throw new Error(data.message)

        return data;

    } catch (error) {
        console.log('Error', error)
    }
}