import axios from "axios";

const API_URL = "http://localhost:5000";

async function httpGetPlanets() {
  try {
    const response = await axios.get(`${API_URL}/planets`);

    return response.data;
  } catch {
    return [];
  }
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  try {
    const response = await axios.get(`${API_URL}/launches`);

    const sortedData = response.data.sort((a, b) => {
      return a.fligtNumber - b.fligtNumber;
    });

    return sortedData;
  } catch {
    return [];
  }
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  try {
    const response = await axios.post(`${API_URL}/launches`, launch);
    return response;
  } catch {
    console.log("Error with httpSubmitLaunch");
  }

  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  try {
    const response = await axios.delete(`${API_URL}/launches/${id}`);
    return response;
  } catch {
    console.log(`Couldnt delete launch with id: ${id}`);
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
