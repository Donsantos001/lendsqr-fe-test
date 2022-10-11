export const statusList = [
  {
    color: "blue",
    text: "Inactive",
  },
  {
    color: "red",
    text: "Blacklisted",
  },
  {
    color: "yellow",
    text: "Pending",
  },
  {
    color: "green",
    text: "Active",
  },
];

export const randomStatus = () => {
  return statusList[Math.floor(Math.random() * 4)];
};
