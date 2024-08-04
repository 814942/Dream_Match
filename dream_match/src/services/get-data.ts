import axios from "axios"

export const getData = async () => {
  try {
    const { data } = await axios.get("/api")

    return data
  } catch (error) {
    throw error
  }
}