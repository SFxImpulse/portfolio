import React from 'react';

import Button from '../components/Button';

export default {
  title: 'Navigation Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Navigation = Template.bind({});
Navigation.args = {
  primary: true,
  label: 'Button',
};
