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
  height: 110px;
`

const Thumbnail = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  margin-left: 24px;
  border-style: solid;
  border-width: medium;
  background-color: ${colors.bgSecondary};
  /* object-fit: contain; */
`

function RankingItem({ item }) {
  const [imgUrl, setImgUrl] = useState('')
  useEffect(() => {
    const getUrl = async () => {
      getDownloadURL(ref(storage, item.imgUrl))
        .then((url) => {
          setImgUrl(url)
        })
        .catch((error) => {
          // Handle any errors
        })
    }

    if (item.imgUrl !== '') {
      getUrl()
    }
  }, [item])
  return (
    <CollectionInfo>
      {imgUrl !== '' ? <Thumbnail src={imgUrl} /> : null}
      <Stack direction="row" spacing={1} style={{ marginLeft: '10px' }}>
        {item.nickName !== '' ? (
          <Chip
            label={item.nickName}
            style={{
              fontFamily: 'HBIOS-SYS',
              fontWeight: 500,
              fontSize: '30px',
            }}
          />
        ) : null}
        {item.url !== '' ? (
          <Chip
            label={item.url}
            style={{
              fontFamily: 'HBIOS-SYS',
              fontWeight: 500,
              fontSize: '30px',
            }}
          />
        ) : null}
        {item.comment !== '' ? (
          <Chip
            label={item.comment}
            style={{
              fontFamily: 'HBIOS-SYS',
              fontWeight: 500,
              fontSize: '30px',
            }}
          />
        ) : null}
      </Stack>
    </CollectionInfo>
  )
}

export default RankingItem
