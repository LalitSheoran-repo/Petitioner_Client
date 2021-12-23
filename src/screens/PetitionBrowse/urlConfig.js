const baseUrl = "http://localhost:5000";

export const generatePublicUrl = (fileName) => {
    return `${baseUrl}/public/images/${fileName}`
}