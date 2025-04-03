import React, { useState } from 'react';
import { UserCard } from './index';

export default {
  title: 'Components/UserCard',
  component: UserCard,
  parameters: {
    docs: {
      description: {
        component: 'Componente de Card de Usuário, exibindo nome, status de seguimento e botão de ação.',
      },
    },
  },
  argTypes: {
    username: {
      control: 'text',
      defaultValue: 'Ricardo Vicente',
      description: 'Nome do usuário (máximo de 20 caracteres).',
      table: {
        category: 'Props',
      },
    },
    isFollow: {
      control: 'boolean',
      defaultValue: true,
      description: 'Define se o usuário está sendo seguido.',
      table: {
        category: 'Props',
      },
    },
    onPress: {
      action: 'clicked',
      description: 'Função chamada ao pressionar o botão de seguir/remover.',
      table: {
        category: 'Events',
      },
    },
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
      defaultValue: 'light',
      description: 'Tema do card (claro ou escuro).',
      table: {
        category: 'Props',
      },
    },
  },
};

const Template = (args) => {
  const [isFollow, setIsFollow] = useState(args.isFollow);

  const handlePress = () => {
    setIsFollow((prev) => !prev);
    args.onPress();
  };

  return (
    <UserCard
      {...args}
      username={args.username.substring(0, 20)}
      isFollow={isFollow}
      onPress={handlePress}
    />
  );
};

export const CardUser = Template.bind({});

CardUser.args = {
  username: 'Ricardo Vicente',
  isFollow: true,
  theme: 'light',
};