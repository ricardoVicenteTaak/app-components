/*
  Author: Ricardo Vicente
  Email: ricardo.vicente@taak.com.br
  Last modified: 2025-04-09 11:05
*/

import React from 'react';
import * as S from './styles';
import { Card } from '../Card';
import { Button } from "../Button";

export function CardButton() {
  return (
    <Card width="100%" height="auto">
      <S.Container>
        <S.TopRow>
          <S.Text>Title</S.Text>
        </S.TopRow>
        <S.BottomRow>
          <Button
            title="Label"
            hasIcon={true}
            onPress={() => console.log('Botão pressionado')}
            alignSelf='end'
          />
        </S.BottomRow>
      </S.Container>
    </Card>
  );
}
