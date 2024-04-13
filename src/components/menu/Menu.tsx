import * as React from "react";
import {
  Box,
  MenuItem,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import MUIMenu from "@mui/material/Menu";
import RadioButton from "../radiobutton/RadioButton";
import Checkbox from "../checkbox/Checkbox";
import Toggle from "../toggle/Toggle";

export interface MenuProps {
  variant?: "default" | "checkmenu" | "radiomenu" | "togglemenu";
  options: string[];
  open?: boolean;
  close?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => any;
  componentColor?: string;
  anchorEl?: HTMLElement | null;
}

function MenuHandler(
  variant: string,
  options: string[],
  open: boolean,
  close: (event: {}, reason: "backdropClick" | "escapeKeyDown") => {},
  componentColor: string,
  anchorEl: HTMLElement | null
) {
  const handleClick = () => {
    if (variant === "default") {
      close({}, "backdropClick");
    }
  };

  if (variant === "radiomenu") {
    return (
      <Box>
        <MUIMenu
          open={open}
          onClose={close}
          anchorEl={anchorEl}
          keepMounted={false}
        >
          <FormControl>
            <RadioGroup>
              {options.map((option) => (
                <MenuItem key={option}>
                  <FormControlLabel
                    value={option}
                    control={
                      <RadioButton value={option} color={componentColor} />
                    }
                    label={option}
                  />
                </MenuItem>
              ))}
            </RadioGroup>
          </FormControl>
        </MUIMenu>
      </Box>
    );
  } else {
    return (
      <Box>
        <MUIMenu open={open} onClose={close} anchorEl={anchorEl}>
          {options.map((option) => (
            <MenuItem key={option} onClick={handleClick}>
              {variant === "default" ? <div>{option}</div> : null}
              {variant === "checkmenu" ? (
                <Checkbox label={option} color={componentColor} />
              ) : null}
              {variant === "togglemenu" ? (
                <div>
                  <Toggle />
                  {option}
                </div>
              ) : null}
            </MenuItem>
          ))}
        </MUIMenu>
      </Box>
    );
  }
}

const Menu = ({
  variant = "default",
  options = [],
  open = true,
  close = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {},
  componentColor = "blue",
  anchorEl = null,
  ...props
}: MenuProps) => {
  return (
    <Box>
      {MenuHandler(variant, options, open, close, componentColor, anchorEl)}
    </Box>
  );
};

export default Menu;
