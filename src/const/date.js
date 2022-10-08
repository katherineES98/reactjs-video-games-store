import { DateTime } from "luxon";

export const getDate = (date) => {
  return DateTime.fromJSDate(date).toFormat("dd-MM-yyyy");
};
