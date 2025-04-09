/*
  Author: Ricardo Vicente
  Email: ricardo.vicente@taak.com.br
  Last modified: 2025-04-09 12:50
*/

import React, { ReactNode } from 'react';
import * as S from './styles';

export interface Props {
  width?: number | string;
  height?: number | string;
  children?: ReactNode;
}

export function Card({ width = 'auto', height = '400px', children }: Props): JSX.Element {
  return (
    <S.Container style={{ width, height }}>
      {children}
    </S.Container>
  );
}
