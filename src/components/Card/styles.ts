/*
  Author: Ricardo Vicente
  Email: ricardo.vicente@taak.com.br
  Last modified: 2025-04-09 10:51
*/

import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';

export const Container = styled.View`
  align-items: center;
  background-color: ${theme.colors.primary.white};
  padding: 12px;
  border-radius: 8px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  shadow-color: black;
  shadow-offset: 0px 2px;
  elevation: 3;
`

export const IconContainer = styled.View`
  margin-right: 12px;
`;

export const UserInfo = styled.View`
  flex: 1;
`;

export const Username = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  color: black;
`;

export const Button = styled.View`
  background-color: #007bff;
  padding: 8px 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ButtonUnfollow = styled(Button)`
  background-color: red;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;

// Estilos do alerta no topo
export const alertStyle = {
  position: 'absolute',
  top: 20,
  left: 10,
  right: 10,
  padding: 12,
  borderRadius: 6,
  zIndex: 10,
  alignItems: 'center',
};

export const AlertText = styled.Text`
  color: white;
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;
