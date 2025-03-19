import api from "../api";

export const signUpUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  try {
    const payload = {
      firstName,
      lastName,
      email,
      password,
      userTypeId: 2,
    };

    const response = await api.post("/register", payload);
    return response.data;
  } catch (error) {
    console.error("Error during sign up:", error);
    throw error;
  }
};
