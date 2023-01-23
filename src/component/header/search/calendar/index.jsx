import * as React from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

export default function BasicDateRangePicker() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: "Check-in", end: "Check-out" }}
    >
      <DateRangePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField
              sx={{ "& fieldset": { border: "none" } }}
              {...startProps}
            />
            <Box sx={{ mx: 2 }}> </Box>
            <TextField
              sx={{ "& fieldset": { border: "none" } }}
              {...endProps}
            />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
