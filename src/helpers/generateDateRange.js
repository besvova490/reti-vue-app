import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  addDays,
  isBefore,
  isAfter,
  isToday as isTodayFn
} from "date-fns";

function generateDateRange (month) {
  const monthDate = new Date(month);
  const firstDay = startOfWeek(startOfMonth(monthDate));
  const lastDay = endOfWeek(endOfMonth(monthDate));

  const dates = [];
  for (let currentDate = firstDay; currentDate <= lastDay; currentDate = addDays(currentDate, 1)) {
    dates.push({
      isPrevMonth: isBefore(currentDate, startOfMonth(monthDate)),
      date: new Date(currentDate),
      isNextMonth: isAfter(currentDate, endOfMonth(monthDate)),
      isToday: isTodayFn(currentDate)
    });
  }
  return dates;
}

export default generateDateRange;
