import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Link } from "react-router-dom";

export default function SelectorCard() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="secondary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      className="mt-[-90px]"
    >
      <ToggleButton value="all">
        <Link to="/"> All </Link>
      </ToggleButton>
      <ToggleButton value="3d">
        <Link to="/category/stl"> 3D Stl </Link>
      </ToggleButton>
      <ToggleButton value="services">
        <Link to="/category/services"> Services </Link>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
