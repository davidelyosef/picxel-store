import axios from "axios";

export const getToken = async () => {
  const token = await axios.get("/api/auth").then((t) => t.data.token);
  return token;
};

export const addEmail = async (email) => {
  getToken()
    .then(async (token) => {
      axios.defaults.headers.post["x-auth-token"] = token;
      await axios.post("/api/emails", { email: email });
    })
    .catch((err) => console.error(err.message));

  // await axios.post("/api/emails", email);
};

export const addContactDetails = async (contact) => {
  getToken()
    .then(async (token) => {
      axios.defaults.headers.post["x-auth-token"] = token;
      await axios.post("/api/contacts", contact);
    })
    .catch((err) => console.error(err.message));
};
