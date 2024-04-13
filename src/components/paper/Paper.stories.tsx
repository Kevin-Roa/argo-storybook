import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Paper from "./Paper";
import { Box } from "@mui/system";

export default {
  title: "Surfaces/Paper",
  component: Paper,
} as ComponentMeta<typeof Paper>;

const Template: ComponentStory<typeof Paper> = (args) => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      "& > :not(style)": {
        m: 1,
        width: 128,
        height: 128,
      },
    }}
  >
    <Paper {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {};

export const samplePaper = Template.bind({});
samplePaper.args = {
  children: "I am elevated",
  elevation: 12,
  variant: "elevation",
};
