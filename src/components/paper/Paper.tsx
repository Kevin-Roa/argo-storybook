import { PaperProps } from "@mui/material";
import { Paper as MuiPaper } from "@mui/material";

const Paper = (props: PaperProps) => {
  return <MuiPaper {...props} />;
};

export default Paper;
