import React from 'react';
import { UserCard } from './index';

export default {
    title: 'Components/Card',
    component: UserCard,
};

export const CardUser = () => (
    <UserCard username={'Ricardo Vicente'} />
);