/*
  Author: Ricardo Vicente
  Email: ricardo.vicente@taak.com.br
  Last modified: 2025-04-09 12:50
*/

import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'default';

type ButtonProps = {
  disabled: boolean;
  type: ButtonType;
};

const colorButtonType = {
  default: '#fff',
  tertiary: '#FFF',
  destructive: '#D71969',
  primary: '#1D1D1D',
  secondary: '#FFF',
};

const colorBorderType = {
  default: '#D71969',
  tertiary: 'transparent',
  destructive: 'transparent',
  primary: 'transparent',
  secondary: '#1D1D1D',
};

const colorTextType = {
  default: '#D71969',
  tertiary: '#1D1D1D',
  destructive: theme.colors.primary.white,
  primary: '#FFF',
  secondary: '#1D1D1D',
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})<ButtonProps>`
  justify-content: center;
  border-radius: 46px;
  padding: 12px;
  border: ${({ type }) => colorBorderType[type]};
  background-color: ${({ disabled, type }) =>
    disabled ? theme.colors.salesforce.neutral90 : colorButtonType[type]};
`;

export const StyledButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
  adjustsFontSizeToFit: true,
})<ButtonProps>`
  font-size: ${RFValue(8)}px;
  font-family: ${theme.fonts.regular};
  color: ${({ type, disabled }) =>
    disabled ? theme.colors.primary.white : colorTextType[type]};
  text-align: center;
`;
