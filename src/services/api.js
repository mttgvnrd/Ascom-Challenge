import axios from "axios";
//import patients from "../mockData/patients.json";

const API_URL = "https://mobile.digistat.it/CandidateApi";
const auth = {
  username: "test",
  password: "TestMePlease!",
};


/*export const fetchPatients = async () => {
  // Simula un ritardo per imitare l'API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(patients);
    }, 500); // 500ms di ritardo
  });
};*/



// Ottieni lista pazienti dall'API
export const fetchPatients = async () => {
  try {
    const response = await axios.get(`${API_URL}/Patient/GetList`, { auth });
    return response.data;
  } catch (error) {
    console.error("Errore durante il fetch dei pazienti:", error);
    throw error;
  }
};


export const updatePatient = async (patient) => {
  try {
    const response = await axios.post(`${API_URL}/Patient/Update`, patient, { auth });
    return response.data;
  } catch (error) {
    console.error("Errore durante l'aggiornamento:", error);
    throw error;
  }
};