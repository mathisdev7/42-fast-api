import { FortyTwoAPI } from "./src/api";
if (!process.env.UID || !process.env.SECRET) {
  throw new Error("Please provide UID and SECRET in .env file");
}
const api = new FortyTwoAPI({
  uid: process.env.UID,
  secret: process.env.SECRET,
  logRequests: true,
  baseUrl: "https://api.intra.42.fr",
});

(async () => {
  try {
    await api.init();
    const userId = await api.getUserIdByLogin("");
    console.log(userId);

    const userData = await api.getUserData(userId);
    console.table(userData.projects_users);
  } catch (error) {
    console.error(error);
  }
})();
