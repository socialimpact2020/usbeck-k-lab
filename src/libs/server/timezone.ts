import moment from "moment-timezone";

export const replaceWithTimezone = (date: Date) => {
  const localtz = moment.tz.guess(true);

  const dateOnTimeZone = moment.utc(date).tz(localtz);

  const formattedDate = dateOnTimeZone.format("YYYY-MM-DD");
  return formattedDate;
};
