// REACT
import React from 'react'

// STYLE
 import Info from '@icons/info.svg';
import theme from '../../styles/theme'
import * as S from './styles'

export interface Props {
    type: 'warning' | 'error' | 'informational'
    description: string
}

export function Alert({
    type,
    description
}: Props) {
    return (
		<S.Container type={type}>
			{/* <Info width={24} style={{color: theme.colors.primary.white}} /> */}
			<S.Description>{description}</S.Description>
		</S.Container>
	);
}
