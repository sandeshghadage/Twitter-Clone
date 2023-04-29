import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function DateSelector() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // handle change event for date selection
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // handle change event for month selection
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  // handle change event for year selection
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <FormControl variant="filled" sx={{ backgroundColor: "transparent" }}>
        <InputLabel>Month</InputLabel>
        <Select
          style={{ width: "160px" }}
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          <MenuItem value="">
            <em>--Select Month--</em>
          </MenuItem>
          <MenuItem value="01">January</MenuItem>
          <MenuItem value="02">February</MenuItem>
          <MenuItem value="03">March</MenuItem>
          <MenuItem value="04">April</MenuItem>
          <MenuItem value="05">May</MenuItem>
          <MenuItem value="06">June</MenuItem>
          <MenuItem value="07">July</MenuItem>
          <MenuItem value="08">August</MenuItem>
          <MenuItem value="09">September</MenuItem>
          <MenuItem value="10">October</MenuItem>
          <MenuItem value="11">November</MenuItem>
          <MenuItem value="12">December</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="filled" sx={{ backgroundColor: "transparent" }}>
        <InputLabel>Day</InputLabel>
        <Select
          style={{ width: "80px" }}
          value={selectedDate}
          onChange={handleDateChange}
        >
          <MenuItem value="">
            <em>--Select Date--</em>
          </MenuItem>
          {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
            <MenuItem key={date} value={date}>
              {date}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="filled" sx={{ backgroundColor: "transparent" }}>
        <InputLabel>Year</InputLabel>
        <Select
          style={{ width: "100px" }}
          value={selectedYear}
          onChange={handleYearChange}
        >
          <MenuItem value="">
            <em>--Select Year--</em>
          </MenuItem>
          {Array.from(
            { length: 100 },
            (_, i) => new Date().getFullYear() - i
          ).map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default DateSelector;
