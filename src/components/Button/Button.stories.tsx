import React from 'react';
import { Button } from './index';

export default {
  title: 'Components/Button', // Título do componente no Storybook
  component: Button,
};

export const standard = () => {
  return <Button type="brand" title="Confirm" onPress={() => {}} />;
};

export const outline = () => {
  return <Button type="outline" title="Edit" onPress={() => {}} />;
};

export const destructive = () => {
    return <Button type="destructive" title="Delete" onPress={() => {}} />;
};
