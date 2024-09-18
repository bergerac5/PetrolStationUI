import axios from "axios"

class UserService{
    static BASE_URL = "http://localhost:8081";

    static async login (userEmail,userPassword){
        try {
            const response = await axios.post(`${UserService.BASE_URL}/auth/login`, {userEmail, userPassword})
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async register (userData,token){
        try {
            const response = await axios.post(`${UserService.BASE_URL}/auth/saveUser`, userData,{
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async getAllUsers (token){
        try {
            const response = await axios.get(`${UserService.BASE_URL}/auth/displayUser`, {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async getUserById (UserId,token){
        try {
            const response = await axios.get(`${UserService.BASE_URL}/auth/getUser/${UserId}`, {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async deleteUser (userData,token){
        try {
            const response = await axios.delete(`${UserService.BASE_URL}/auth/deleteUser`, userData,{
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async updateUser (userData){
        try {
            const response = await axios.put(`${UserService.BASE_URL}/auth/updateUser`, userData,{
                
            })
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('userRole')
    }

    static isAuthenticated(){
        const token = localStorage.getItem('token')
        return !!token
    }

    static isAdmin(){
        const role = localStorage.getItem('userRole')
        return role === 'ADMIN'
    }

    static isUser(){
        const role = localStorage.getItem('userRole')
        return role === 'USER'
    }

    static adminOnly(){
        return this.isAuthenticated() && this.isAdmin()
    }
    static userOnly(){
        return this.isAuthenticated() && this.isUser()
    }
}

export default UserService
