import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../styles/theme";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  shadow-color: black;
  shadow-opacity: 0.1;
  shadow-radius: 6px;
  elevation: 4;
  width: 100%;
`;

export const IconContainer = styled.View`
  margin-right: 12px;
`;

export const UserInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Username = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  color: black;
`;

export const Button = styled.View`
  background-color: #007bff;
  padding: 8px 16px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;
