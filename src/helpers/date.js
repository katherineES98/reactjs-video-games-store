
export const getDate = (date) => {
  const dateGames = new Date(date * 1000).toLocaleDateString("en-US");
  return dateGames;
};
// import { DateTime } from "luxon";

// export const getDate = (date) => {
//   return DateTime.fromJSDate(date).toFormat("dd-MM-yyyy");
// };
