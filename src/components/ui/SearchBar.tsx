"use client";

import { IconButton, TextField, InputAdornment } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

type SearchBarProps = {
  inputClass?: string;
};

function SearchBar({ inputClass }: SearchBarProps) {
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim() !== "") {
      router.push(`/shop?search=${encodeURIComponent(query.trim())}`);
      setShow(false);
    }
  };

  return (
    <div>
      {show ? (
        <div className={inputClass}>
          <TextField
            variant="outlined"
            placeholder="Cari produk..."
            size="small"
            autoFocus
            fullWidth
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
            onBlur={() => setShow(false)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton disabled>
                    <IoSearch />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: "white",
              borderRadius: "20px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "grey.300",
                },
                "&:hover fieldset": {
                  borderColor: "grey.400",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "grey.500",
                },
              },
            }}
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
