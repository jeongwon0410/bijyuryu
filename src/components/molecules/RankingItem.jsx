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
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { useEffect } from 'react'
import { ref, getDownloadURL, listAll } from 'firebase/storage'
import { storage } from '@components/atoms/firebase'

const CollectionInfo = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-left: 24px;

  background-color: ${colors.bgSecondary};
  object-fit: contain;
`

function RankingItem({ item }) {
  console.log(item.imgUrl)
  const [imgUrl, setImgUrl] = useState('')
  // useEffect(() => {
  //   getDownloadURL(ref(storage, ))
  //     .then((url) => {
  //       setImgUrl(url)
  //     })
  //     .catch((error) => {
  //       // Handle any errors
  //     })
  // }, [item])
  return (
    <CollectionInfo>
      <Thumbnail src={imgUrl} />

      <Stack direction="row" spacing={1}>
        <Chip
          label={item.nickName}
          style={{
            fontFamily: 'HBIOS-SYS',
            fontWeight: 500,
            fontSize: '30px',
          }}
        />
        <Chip
          label={item.url}
          style={{
            fontFamily: 'HBIOS-SYS',
            fontWeight: 500,
            fontSize: '30px',
          }}
        />
        <Chip
          label={item.comment}
          style={{
            fontFamily: 'HBIOS-SYS',
            fontWeight: 500,
            fontSize: '30px',
          }}
        />
      </Stack>
    </CollectionInfo>
  )
}

export default RankingItem
