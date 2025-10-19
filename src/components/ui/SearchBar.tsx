"use client";
import {IconButton, TextField} from "@mui/material";
import React, {useState} from "react";
import {IoSearch} from "react-icons/io5";

type SearchBarProps = {
  inputClass?: string;
};

function SearchBar({inputClass}: SearchBarProps) {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show ? (
        <div className={inputClass}>
          <TextField
            variant="outlined"
            placeholder="search..."
            size="small"
            autoFocus
            fullWidth
            onBlur={() => setShow(false)}
          />
        </div>
      ) : (
        <IconButton onClick={() => setShow((prev) => !prev)}>
          <IoSearch />
        </IconButton>
      )}
    </div>
  );
}

export default SearchBar;
