import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BasicBreadcrumbs from './Breadcrumbs';

export default {
  title: 'Navigation/Breadcrumbs',
  component: BasicBreadcrumbs,
} as ComponentMeta<typeof BasicBreadcrumbs>;

const Template: ComponentStory<typeof BasicBreadcrumbs> = () => <BasicBreadcrumbs />;

export const Default = Template.bind({});
