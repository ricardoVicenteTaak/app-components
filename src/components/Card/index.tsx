import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import * as S from './styles';

export interface UserCardProps {
  username: string;
  onPress?: () => void;
}

export function UserCard({ username, onPress }: UserCardProps) {
  const avatarIcon = `
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="4" stroke="black" strokeWidth="2"/>
      <path d="M4 20C4 16 8 14 12 14C16 14 20 16 20 20" stroke="black" strokeWidth="2" strokeLinecap="round"/>
    </svg>`;

  return (
    <S.Container>
      <S.IconContainer>
        <SvgXml xml={avatarIcon} width={40} height={40} />
      </S.IconContainer>
      <S.UserInfo>
        <S.Username>{username}</S.Username>
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
          <S.Button>
            <S.ButtonText>Seguir</S.ButtonText>
          </S.Button>
        </TouchableOpacity>
      </S.UserInfo>
    </S.Container>
  );
}