import axios from "axios";




export const getAllPosts = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return res.data
    } catch (err) {
        return err
    }
}




export const getAllUsers = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        return res.data
    } catch (err) {
        return err
    }
}



export const getAllComments = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/comments')
        return res.data
    } catch (err) {
        return err
    }
}

