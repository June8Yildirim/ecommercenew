import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8080/api/v1";

const customAxios = axios.create({
  baseURL: baseURL,
});

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await generateRefreshToken();
        return customAxios(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export const generateRefreshToken = async () => {
  try {
    await customAxios.get(`/generate-token`, {
      withCredentials: true,
    });
  } catch (error) {
    console.error(error);
  }
};
