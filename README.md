# 🚀 Guia de Execução do Projeto com Storybook + Expo

## ✅ Pré-requisitos

- Node.js e Yarn instalados
- Expo CLI instalado globalmente:  
  ```sh
  npm install -g expo-cli
  ```

---

## 1️⃣ Instalar Dependências

Execute o seguinte comando para instalar todas as dependências do projeto:

```sh
sudo yarn install
```

---

## 2️⃣ Iniciar o Storybook

Após a instalação, inicie o Storybook com:

```sh
yarn storybook
```

---

## 3️⃣ Acessar no Mobile ou Web

### 📱 Para Mobile (Expo Go)
- Pressione `i` para abrir no iOS.
- Ou escaneie o QR Code com o app **Expo Go** (iOS ou Android).

### 🌐 Para Web
- Se estiver disponível, pressione `w` para abrir o projeto no navegador.

---

## 📦 Versão do Expo

Este projeto utiliza **Expo SDK 52.0**, garantindo compatibilidade com as últimas atualizações e a nova arquitetura do React Native.

---

## 🧩 Como Criar uma Story para um Componente

Dentro da pasta do seu componente (`src/components/SeuComponente`), crie um arquivo chamado:

```
SeuComponente.stories.tsx
```

Exemplo básico:

```tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SeuComponente from './SeuComponente';

const meta: Meta<typeof SeuComponente> = {
  title: 'Components/SeuComponente',
  component: SeuComponente,
  argTypes: {
    title: { control: 'text' },
    selected: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof SeuComponente>;

export const Default: Story = {
  args: {
    title: 'Título padrão',
    selected: false,
    size: 'medium',
  },
};
```

---

## 🧪 Testar Stories Localmente

Após criar sua story, teste no Storybook com:

```sh
sudo yarn storybook
```

Verifique se está tudo certo acessando o componente e alterando os **Controls** no painel lateral.

---

## 🚀 Publicar no Chromatic

Se tudo estiver funcionando corretamente, rode:

```sh
sudo yarn chromatic
```

Isso vai:
- Gerar os snapshots visuais
- Publicar suas stories na nuvem
- Permitir revisões e validações de UI

---

Qualquer dúvida, só chamar! 🚀 @RicardoVicente