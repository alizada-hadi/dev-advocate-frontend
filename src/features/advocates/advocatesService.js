import axios from "axios";

const fetchAdvocates = async (query = "") => {
  const response = await axios.get(
    `https://cados.up.railway.app/advocates/${query}`
  );
  return response.data;
};

const advocateDetail = async (username) => {
  const response = await axios.get(
    `https://cados.up.railway.app/advocates/${username}/`
  );
  return response.data;
};

const fetchCompanies = async () => {
  const response = await axios.get(`https://cados.up.railway.app/companies/`);
  return response.data;
};

const advocatesService = {
  fetchAdvocates,
  advocateDetail,
  fetchCompanies,
};

export default advocatesService;
