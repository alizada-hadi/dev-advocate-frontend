import axios from "axios";

const fetchAdvocates = async (query = "") => {
  const response = await axios.get(
    `https://cados.up.railway.app/advocates/${query}`
  );
  return response.data;
};

const advocatesService = {
  fetchAdvocates,
};

export default advocatesService;
