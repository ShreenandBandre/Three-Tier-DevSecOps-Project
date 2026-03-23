const BASE_URL = "http://backend-service:5000";

export const getData = async () => {
  const res = await fetch(`${BASE_URL}/data`);
  return res.json();
};