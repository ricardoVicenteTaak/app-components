/*
  Author: Ricardo Vicente
  Email: ricardo.vicente@taak.com.br
  Last modified: 2025-04-09 12:50
*/

import React, { FC } from 'react';
import { ActivityIndicator, Keyboard } from 'react-native';
import * as S from './styles';
import theme from '../../styles/theme';

import IconNext from '../../icons/next.svg';
import IconNextBlack from '../../icons/nextBlack.svg';
import IconTrash from '../../icons/trash.svg';
import IconTrashRed from '../../icons/trashRed.svg';

export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'default';

interface ButtonProps {
  title: string;
  disabled?: boolean;
  type?: ButtonType;
  onPress: () => void;
  isLoading?: boolean;
  hasIcon?: boolean;
  hideText?: boolean;
  alignSelf ?: string;
}

const getIconByType = (type: ButtonType, hideText?: boolean) => {
  const iconStyle = { marginLeft: hideText ? 0 : 8 };

  if (type === 'default') return <IconTrashRed style={iconStyle} />;
  if (type === 'destructive') return <IconTrash style={iconStyle} />;
  if (type === 'tertiary' || type === 'secondary') return <IconNextBlack />;
  return <IconNext />;
};

export const Button: FC<ButtonProps> = ({
  title,
  disabled = false,
  type = 'primary',
  onPress,
  isLoading = false,
  hasIcon = false,
  hideText = false,
  alignSelf = 'center'
}) => {
  const handlePress = (e: any) => {
    if (disabled || isLoading) return;
    Keyboard.dismiss();
    e.stopPropagation();
    onPress();
  };

  return (
    <S.Container
      onPress={handlePress}
      activeOpacity={disabled || isLoading ? 1 : 0.5}
      disabled={disabled}
      type={type}
      style = {{alignSelf : alignSelf}}
    >
      <S.StyledButton>
        {isLoading ? (
          <ActivityIndicator
            color={
              type === 'default' || type === 'primary'
                ? theme.colors.company.secondary
                : theme.colors.primary.white
            }
          />
        ) : (
          <>
            {!hideText && (
              <S.Title type={type} disabled={disabled}>
                {title}
              </S.Title>
            )}
            {hasIcon && getIconByType(type, hideText)}
          </>
        )}
      </S.StyledButton>
    </S.Container>
  );
};
