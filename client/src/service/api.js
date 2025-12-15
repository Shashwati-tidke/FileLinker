import axios from 'axios';
const API_URL = 'http://localhost:8000';

export const uploadFile = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/upload`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    }
        catch (error) {
        console.error("Error uploading file:", error);
    }

};