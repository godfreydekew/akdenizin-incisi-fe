import axios from "axios";

export const BASE_URL = "http://localhost:3001"

export const loginUser = async (email: string, password: string) => {
    try {
      const payload = {
        email,
        password,
      }
      const response = await axios.post(`${BASE_URL}/login`, payload, {
        withCredentials: false,
      })
      return response.data 
    } catch (error) {
      console.error('Error during registration:', error)
      throw error 
    }
  }
  