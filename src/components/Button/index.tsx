// REACT
import { ActivityIndicator, Keyboard } from 'react-native';
import React from 'react';

// STYLE
import theme from '../../styles/theme';
import * as S from './styles';

export type ButtonType = 'default' | 'brand' | 'destructive' | 'outline';

interface ButtonProps {
	title: string
	disabled?: boolean
	type?: ButtonType
	color?: 'standard' | 'blue' | 'red' | 'black'
	onPress: () => void
	isLoading?: boolean
}

export function Button({
	title,
	disabled,
	onPress,
	type = 'default',
	color = 'standard',
	isLoading
}: ButtonProps) {
	return (
		<S.Container
			onPress={(e: any) => {
				if (disabled || isLoading) return;
				Keyboard.dismiss();
				e.stopPropagation();
				onPress();
			}}
			activeOpacity={(disabled || isLoading) ? 1 : 0.5}
			disabled={disabled}
			color={color}
			type={type}
		>
			<S.StyledButton type={type} enabled={!disabled || !isLoading} >
				{isLoading
					?
					<ActivityIndicator color={(type == 'default' || type == 'outline')
						? theme.colors.company.secondary
						: theme.colors.primary.white} />
					:
					<S.Title
						type={type}
						enabled={!disabled}
					>
						{title}
					</S.Title>
				}
			</S.StyledButton>
		</S.Container>
	)
}
