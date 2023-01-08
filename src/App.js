import GlobalStyle from './GlobalStyle'
import styled from 'styled-components'
import TopBanner from '@components/template/TopBanner'
import Explain from '@components/template/Explain'
import ManagementTeam from '@components/template/ManagementTeam'
import GalleryNFT from '@components/template/GalleryNFT'
import Header from './components/template/Header'
import { useEffect } from 'react'
import { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Backdrop from '@mui/material/Backdrop'
import { Button } from '@mui/material'
import Footer from '@components/template/Footer'

const Title = styled.div`
  font-family: HBIOS-SYS;
  font-size: 30px;
  margin-top: 20px;
  margin-left: 20px;
`
function App() {
  const [account, setAccount] = useState('')
  const [loading, setLoading] = useState(false)
  const [uid, setUid] = useState('')
  return (
    <>
      <GlobalStyle />

      <Header account={account} setAccount={setAccount} setUid={setUid} />

      <TopBanner />
      <GalleryNFT account={account} setLoading={setLoading} uid={uid} />
      {/* <Ranking /> */}
      <Explain />

      <ManagementTeam />
      <Footer />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        // onClick={handleClose}
      >
        <center>
          <CircularProgress
            color="error"
            style={{ width: '100px', height: '100px' }}
          />
          <Title>waiting...</Title>
        </center>
      </Backdrop>
    </>
  )
}

export default App
