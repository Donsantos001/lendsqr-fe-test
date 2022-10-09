import { ColDef } from "ag-grid-community";

export const formatNum = (num: string | number) => {
  return (num + "").replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatTime = (d: Date | string) => {
  const date = new Date(d);
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let ampm = hrs >= 12 ? "PM" : "AM";
  hrs = hrs % 12;
  hrs = hrs ? hrs : 12; // the hour '0' should be '12'
  const minutes = mins < 10 ? "0" + mins : mins;
  const hours = hrs < 10 ? "0" + hrs : hrs;
  return `${hours} : ${minutes} ${ampm}`;
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const formatDate = (d: string | Date) => {
  if (!d) return "";
  const date = new Date(d);

  const year = date.getFullYear();
  const dateNum = date.getDate();
  const monthName = months[date.getMonth()];
  const time = formatTime(date);
  return `${monthName} ${dateNum}, ${year} ${time}`;
};

export const colData = (rowData: {}[], options?: { [key: string]: ColDef }) => {
  return Object.keys(rowData[0] || []).map((item) => {
    if (options && options[item]) {
      return {
        ...options[item],
        field: item,
      };
    }
    return { field: item };
  });
};
