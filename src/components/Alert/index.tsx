import React from 'react';
import { SvgXml } from 'react-native-svg';
import theme from '../../styles/theme';
import * as S from './styles';

export interface Props {
  type: 'warning' | 'error' | 'informational' | 'success';
  description: string;
}

export function Alert({
  type,
  description,
}: Props) {
  const infoIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Info">
      <path id="Icon" fill-rule="evenodd" clip-rule="evenodd" d="M12.0008 0.923096C5.86229 0.923096 0.923828 5.86156 0.923828 12C0.923828 18.1385 5.86229 23.0769 12.0008 23.0769C18.1392 23.0769 23.0777 18.1385 23.0777 12C23.0777 5.86156 18.1392 0.923096 12.0008 0.923096ZM12.001 6.50774C12.7856 6.50774 13.3856 7.10774 13.3856 7.89236C13.3856 8.67698 12.7856 9.27697 12.001 9.27697C11.2164 9.27697 10.6164 8.67698 10.6164 7.89236C10.6164 7.10774 11.2164 6.50774 12.001 6.50774ZM14.3085 16.2C14.3085 16.4308 14.1239 16.6154 13.847 16.6154H10.1547C9.92389 16.6154 9.69312 16.477 9.69312 16.2V15.277C9.69312 15.0462 9.87773 14.7693 10.1547 14.7693C10.3854 14.7693 10.6162 14.6308 10.6162 14.3539V12.5077C10.6162 12.277 10.4316 12 10.1547 12C9.92389 12 9.69312 11.8616 9.69312 11.5846V10.6616C9.69312 10.4308 9.87773 10.1539 10.1547 10.1539H12.9239C13.1547 10.1539 13.3854 10.3846 13.3854 10.6616V14.3539C13.3854 14.5846 13.57 14.7693 13.847 14.7693C14.0777 14.7693 14.3085 15 14.3085 15.277V16.2Z" fill="currentColor"/>
    </g>
  </svg>`;

  return (
    <S.Container type={type}>
      <SvgXml xml={infoIcon} width={24} style={{ color: theme.colors.primary.white }} />
      <S.Description>{description}</S.Description>
    </S.Container>
  );
}
