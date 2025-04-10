/*
  Author: Ricardo Vicente
  Email: ricardo.vicente@taak.com.br
  Last modified: 2025-04-09 10:52
*/

import React, { useState } from 'react';
import { Card } from './index';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ["autodocs"]
};

const Template = (args) => {
  return (
    <Card
      {...args}
    />
  );
};

export const CardUser = Template.bind({});
