import dotenv from "dotenv";
import { FortyTwoAPI } from "./src/api";
dotenv.config();

if (!process.env.UID || !process.env.SECRET) {
  throw new Error("Please provide UID and SECRET in .env file");
}
const api = new FortyTwoAPI({
  uid: process.env.UID,
  secret: process.env.SECRET,
  logRequests: true,
  baseUrl: "https://api.intra.42.fr/v2",
});

(async () => {
  try {
    await api.init();
    const campusUsers = await api.coalition.getCoalitionUsers("377");
    console.log(campusUsers);

    // const userData = await api.getUserData(userId);
    // console.log(userData.partnerships.splice(0, 5));
  } catch (error) {
    console.error(error);
  }
})();
