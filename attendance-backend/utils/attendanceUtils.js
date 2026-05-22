const calculateAttendance = (present, total) => {
  const percentage = total === 0 ? 0 : (present / total) * 100;

  let status = "Safe";
  if (percentage < 75 && percentage >= 60) status = "Warning";
  if (percentage < 60) status = "Critical";

  return {
    percentage: percentage.toFixed(2),
    status
  };
};

const classesNeeded = (present, total) => {
  if (total === 0) return 0;
  if (present / total >= 0.75) return 0;

  return Math.ceil((0.75 * total - present) / 0.25);
};

module.exports = { calculateAttendance, classesNeeded };