import axios from "axios";

export default axios.create({
    baseURL: 'https://localhost:7039',
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
    }
})