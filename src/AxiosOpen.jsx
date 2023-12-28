import axios from "axios";

const axiosOpen = axios.create({
    baseURL: 'http://localhost:5000'
})

const AxiosOpen = () => {
    return axiosOpen
};

export default AxiosOpen;