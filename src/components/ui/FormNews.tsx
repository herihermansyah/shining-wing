import {Button, TextField} from "@mui/material";
import React from "react";

function FormNews() {
  return (
    <div>
      <form className="flex flex-col gap-4" action="">
        <TextField
          placeholder="your email address..."
          label="Email Address"
          variant="outlined"
          size="small"
        />
        <div className="flex items-center gap-2">
          <Button variant="contained" size="small" type="submit">
            women
          </Button>
          <Button variant="contained" size="small" type="submit">
            man
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormNews;
