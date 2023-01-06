import GlobalStyle from './GlobalStyle'
import styled from 'styled-components'
import TopBanner from '@components/template/TopBanner'
import Explain from '@components/template/Explain'
import ManagementTeam from '@components/template/ManagementTeam'
import GalleryNFT from '@components/template/GalleryNFT'
import Header from './components/template/Header'
import { useEffect } from 'react'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@components/atoms/firebase'
import { aaa, bbb } from '@components/atoms/common'
const Footer = styled.footer`
  height: 100px;
  width: 100%;
  background-color: black;
  /* margin-top: 100px; */
`
function App() {
  const [account, setAccount] = useState('')

  useEffect(() => {
    const login = async (email, password) => {
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch ({ code, message }) {}
    }

    login(bbb, aaa)
  }, [])

  return (
    <>
      <GlobalStyle />
      <Header account={account} setAccount={setAccount} />

      <TopBanner />
      <GalleryNFT account={account} />
      {/* <Ranking /> */}
      <Explain />

      <ManagementTeam />
      <Footer />
    </>
  )
}

export default App
