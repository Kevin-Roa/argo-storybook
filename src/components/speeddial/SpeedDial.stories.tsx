import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BasicSpeedDial from './SpeedDial';

export default {
  title: 'Navigation/SpeedDial',
  component: BasicSpeedDial,
} as ComponentMeta<typeof BasicSpeedDial>;

const Template: ComponentStory<typeof BasicSpeedDial> = () => <BasicSpeedDial />;

export const Default = Template.bind({});
