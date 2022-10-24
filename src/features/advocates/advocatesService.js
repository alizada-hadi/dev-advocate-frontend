import axios from "axios";

const fetchAdvocates = async () => {
  const response = await axios.get("https://cados.up.railway.app/advocates/");
  return response.data;
};

const advocatesService = {
  fetchAdvocates,
};

export default advocatesService;
