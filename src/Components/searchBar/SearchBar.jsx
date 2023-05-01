import { Autocomplete, TextField } from "@mui/material";

const options = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
];

const style = {
  width: "20rem",
  borderRadiua: "20rem",
  backgroundColor: "white",
  marginTop: "1rem",
  "@media (max-width: 1075px)": {
    width: "17rem",
  },
};

export default function SearchBar() {
  return (
    <div>
      <Autocomplete
        sx={{ ...style }}
        options={options}
        renderInput={(params) => (
          <TextField {...params} label="Search Twitter" variant="filled" />
        )}
      />
    </div>
  );
}
