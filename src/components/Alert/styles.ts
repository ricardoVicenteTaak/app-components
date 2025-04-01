import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../styles/theme";

import { Props } from "./index";

type typeOptionsData = {
	[key: string]: string
}

const typeOptions: typeOptionsData = {
	warning: theme.colors.salesforce.orange65,
	error: theme.colors.company.third,
	informational: theme.colors.company.secondary,
}

export const Container = styled.View<{ type: 'warning' | 'error' | 'informational' }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ type }) => typeOptions[type]};
  padding: 12px;

  gap: ${RFValue(12)}px;

  border-radius: 4px;
`;


export const Description = styled.Text`
	flex: 1;
	font-size: ${RFValue(12)}px;
	color: ${theme.colors.primary.white};
	font-family: ${theme.fonts.regular};
`