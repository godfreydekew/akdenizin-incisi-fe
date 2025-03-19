import api from "../api";

export const loginUser = async (email: string, password: string) => {
  try {
    const payload = {
      email,
      password,
    };
    const response = await api.post("/login", payload);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
