import React from 'react';
import { Alert } from './index';

export default {
  title: 'Components/Alert',
  component: Alert,
};

export const Warning = () => (
  <Alert type="warning" description="This is a warning message" />
);
