import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import theme from '@global/styles/theme';

type tplotOptions = {
	[key: string]: string
}

const colorButtonType: tplotOptions = {
	default: theme.colors.primary.white,
	brand: theme.colors.company.primary,
	destructive: theme.colors.company.third,
	outline: theme.colors.primary.white,
}

const colorTextType: tplotOptions = {
	default: theme.colors.company.secondary,
	brand: theme.colors.primary.white,
	destructive: theme.colors.primary.white,
	outline: theme.colors.company.secondary,
}

interface ButtonProps {
	disabled: boolean
	type: 'default' | 'brand' | 'destructive' | 'outline'
}

export const Container = styled.TouchableOpacity.attrs({
	activeOpacity: 0.5
})<ButtonProps>`
	width: 100%;
	background-color: ${({ disabled, type }: ButtonProps) =>
		disabled
			? theme.colors.primary.lightGrey
			: colorButtonType[type]
	};

	border-radius: 5px;

	${({ type }: ButtonProps) =>
		type == 'outline' &&
		css`
			border: 1px solid ${theme.colors.company.secondary};
		`
	}
`;

export const StyledButton = styled.View`
	width: 100%;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	padding: ${RFValue(1)}px ${RFValue(16)}px;
	min-height: ${RFValue(36)}px;
`;

export const Title = styled.Text.attrs({
	numberOfLines: 1,
	adjustsFontSizeToFit: true
})<ButtonProps>`
	font-size: ${RFValue(13)}px;
	font-family: ${theme.fonts.regular};

	text-align: center;

	color: ${({ type, disabled }: ButtonProps) =>
		disabled
			? theme.colors.primary.white
			: type == 'outline' ? theme.colors.company.secondary : colorTextType[type]};
`;
