import React from 'react';

import Header from '../components/Header';

export default {
  title: 'Darkmode Button',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Darkmode = Template.bind({});
Darkmode.args = {
  label: 'Darkmode Button',
  dark: false,
};