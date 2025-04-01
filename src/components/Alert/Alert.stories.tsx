import React from 'react';
import { Alert } from './index';

export default {
  title: 'Components/Alert',
  component: Alert,
};

export const Warning = () => (
  <Alert type="warning" description="This is a warning message" />
);

export const Error = () => (
  <Alert type="error" description="This is an error message" />
);

export const Informational = () => (
  <Alert type="informational" description="This is an informational message" />
);
