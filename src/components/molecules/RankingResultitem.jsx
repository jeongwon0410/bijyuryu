// NFT에 랭킹 시스템을 도입
// 웹 사이트에서 지갑을 연결하고
// 연결된 지갑의 갯수를 사이트에서 파악하고 투표할 수 있는 권환을 준다
// 권환 확인만 하기에 트렌젝션 가스거래는 발생하지 않고
// 실시간으로 투표를 할 수있다
// 랭킹 기능은 매달 초기화 되며 매달 새롭게 다시 투표 할 수있다

import styled from 'styled-components'
import * as colors from '@styles/colors'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useState } from 'react'

const CollectionItem = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid ${colors.borderSecondary};
`

const CollectionInfo = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
`

const RankText = styled.div`
  font-family: HBIOS-SYS;
  font-size: 14px;
`

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-left: 24px;

  background-color: ${colors.bgSecondary};
  object-fit: contain;
`

const CollectionName = styled.span`
  font-weight: 500;
  margin-left: 12px;
  font-family: HBIOS-SYS;
`

const Title = styled.div`
  font-family: HBIOS-SYS;
  font-size: 30px;
  margin-top: 20px;
  margin-left: 20px;
`

function RankingResultitem({ item, index }) {
  return (
    <CollectionItem>
      <CollectionInfo>
        <RankText>{index + 1}</RankText>
        <Thumbnail src={item.url} />
        <CollectionName>{'aaa'}</CollectionName>
      </CollectionInfo>
    </CollectionItem>
  )
}

export default RankingResultitem
