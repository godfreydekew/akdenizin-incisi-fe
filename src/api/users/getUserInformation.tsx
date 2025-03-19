import api from "../api";

const getUserInformation = async () => {
  try {
    const response = await api.get("/user-information");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getUserInformation;
