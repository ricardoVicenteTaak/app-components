/*
  Author: Ricardo Vicente
  Email: ricardo.vicente@taak.com.br
  Last modified: 2025-04-09 10:52
*/

import React, { useState } from 'react';
import { CardButton } from './index';

export default {
  title: 'Components/CardButton',
  component: CardButton,
  tags: ["autodocs"]
};

const Template = (args) => {
  return (
    <CardButton
      {...args}
    />
  );
};

export const CardUser = Template.bind({});
