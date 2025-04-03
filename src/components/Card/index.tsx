import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Animated } from 'react-native';
// import { SvgXml } from 'react-native-svg';
import * as S from './styles';
import { Alert } from '../Alert/index';

export interface UserCardProps {
  username: string;
  onPress?: () => void;
  isFollow: boolean;
  theme?: string;
}

export function UserCard({ username, onPress, isFollow, theme }: UserCardProps) {
  const [currentFollowState, setCurrentFollowState] = useState(isFollow);
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');
  const [alertMessage, setAlertMessage] = useState('');
  const slideAnim = useState(new Animated.Value(-50))[0];
  const fadeAnim = useState(new Animated.Value(0))[0];

  const handlePress = () => {
    const newFollowState = !currentFollowState;
    setCurrentFollowState(newFollowState);

    if (newFollowState) {
      setAlertType('success');
      setAlertMessage('Seguido com sucesso');
    } else {
      setAlertType('error');
      setAlertMessage('Removido com sucesso');
    }

    // Animação de exibição do alerta
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    // Ocultar alerta após 3 segundos
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: -50,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }, 3000);

    if (onPress) onPress();
  };

  const avatarIcon = `
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="4" stroke="${theme === 'dark' ? 'white' : 'black'}" strokeWidth="2"/>
      <path d="M4 20C4 16 8 14 12 14C16 14 20 16 20 20" stroke="${theme === 'dark' ? 'white' : 'black'}" strokeWidth="2" strokeLinecap="round"/>
    </svg>`;

  const themeBackground = theme === 'dark' ? '#1C1C1C' : '#FFF';
  const themeTextColor = theme === 'dark' ? '#FFF' : '#1C1C1C';

  return (
    <>
      {/* Alerta no topo */}
      <Animated.View
        style={[
          S.alertStyle,
          { transform: [{ translateY: slideAnim }], opacity: fadeAnim },
        ]}
      >
        <Alert type={alertType} description={alertMessage} />
      </Animated.View>

      <S.Container style={{ backgroundColor: themeBackground }}>
        <S.IconContainer>
          {/* <SvgXml xml={avatarIcon} width={40} height={40} /> */}
        </S.IconContainer>
        <S.UserInfo>
          <S.Username style={{ color: themeTextColor }} numberOfLines={1} ellipsizeMode="tail">
            {username}
          </S.Username>
        </S.UserInfo>
        <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
          {currentFollowState ? (
            <S.ButtonUnfollow>
              <S.ButtonText>Remover</S.ButtonText>
            </S.ButtonUnfollow>
          ) : (
            <S.Button>
              <S.ButtonText>Seguir</S.ButtonText>
            </S.Button>
          )}
        </TouchableOpacity>
      </S.Container>
    </>
  );
}
