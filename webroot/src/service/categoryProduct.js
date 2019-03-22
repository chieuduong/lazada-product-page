import axios from 'axios';
const url = window.location.protocol + "//" + window.location.hostname;
export const categoryService = {
    getCategoryProduct,
};

function getCategoryProduct() {
    return axios.get(`${url}:8081/products`).then(response => {
        return response;
    });
}