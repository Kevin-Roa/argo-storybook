import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Pagination from "./Pagination";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import PaginationItem from '@mui/material/PaginationItem';
import StarIcon from '@mui/icons-material/Star';

export default {
  title: "Inputs/Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;


const customTheme = createTheme({
  components: {
    MuiPaginationItem: {
      defaultProps: {
        // Apply custom shapes or styles here
      },
    },
  },
});

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

// const Template: ComponentStory<typeof Pagination> = (args) => (
//   <Pagination
//     {...args}
//     sx={{
//       "& .MuiPaginationItem-root": {
//         color: '#3050F8', // Color for the text
//       },
//       "& .MuiPaginationItem-root.Mui-selected": {
//         backgroundColor: '#3050F8', // Background color for selected item
//         color: '#ffffff', // Text color for selected item
//       },
//     }}
//   />
// );

export const Default = Template.bind({});
Default.args = {};

//add stories

// Adjusting the Template to include state management for demonstration
const InteractiveTemplate: ComponentStory<typeof Pagination> = (args) => {
  const [page, setPage] = useState(1); // Initializing state to track current page
  
  return (
    <Pagination
      {...args}
      page={page} // Using state for the current page
      onChange={(event, newPage) => setPage(newPage)} // Updating state when page changes
    />
  );
};

// GPT Generated Stories...

export const GPTRandomPagination = InteractiveTemplate.bind({});
GPTRandomPagination.args = {
  count: 10, // Total number of pages
  page: 1, // Current page
  color: 'primary', // Pagination color
  variant: 'outlined', // Pagination variant
  shape: 'rounded', // Shape of the pagination items
  size: 'large', // Size of the pagination
  renderItem: (item) => (
    <PaginationItem
      components={{ previous: StarIcon, next: StarIcon }}
      {...item}
      sx= {{
        "& .MuiPaginationItem-root": {
          color: '#2962FF', // ARGO's secondary color for text
        },
        "& .MuiPaginationItem-root.Mui-selected": {
          backgroundColor: '#2962FF', // ARGO's secondary color for the background of the selected item
          color: '#ffffff', // Text color for selected item
        },
        "& .MuiPaginationItem-root:hover": {
          backgroundColor: '#ECF1FF', // ARGO's hover light color for hover background
        },
      }}
    />
  ),
};

export const ArgoPagination2 = InteractiveTemplate.bind({});
ArgoPagination2.args = {
  count: 6, // Total number of pages
  renderItem: (item) => (
    <PaginationItem
      {...item}
      sx={{
        // Applying ARGO's brand colors
        "&.Mui-selected": {
          backgroundColor: '#01579B', // ARGO Primary Color for the selected item
          color: '#ffffff', // Ensuring text color is white for selected item
          '&:hover': {
            backgroundColor: '#2962FF', // ARGO Secondary Color on hover for the selected item
          },
        },
        '&:hover': {
          backgroundColor: '#ECF1FF', // ARGO Hover Light Color for the background on hover for non-selected items
        },
        '.MuiPaginationItem-icon': {
          // This applies only if you are using icons
          color: '#2962FF', // ARGO Secondary Color for the icons
        }
      }}
    />
  ),
};
