import styled from 'styled-components'
import * as colors from '@styles/colors'
import MetaMaskImg from '@assets/images/metamask.png'
import DiscordImg from '@assets/images/discord.png'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import Alert from '@mui/material/Alert'
import SettingsIcon from '@mui/icons-material/Settings'
import { owner, contract } from '@components/atoms/common'
import AdminDialog from '@components/organisms/AdminDialog'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@components/atoms/firebase'
// import useAuth from '@hooks/useAuth'

const Container = styled.header`
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0px;
  display: flex;
  padding: 0px 16px;
  align-items: center;
  z-index: 999;
  background-color: red;
`

const GrayRoundBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  /* background-color: ${colors.bgSecondary}; */
`

const WalletBox = styled(GrayRoundBox)`
  /* margin-left: auto; */
  background-color: ${colors.darkslategray};
  margin-right: ${(props) => (props.setting ? 8 : 30)}px;
  cursor: pointer;
`

const DiscordBox = styled(GrayRoundBox)`
  margin-left: auto;
  background-color: ${colors.mediumblue};
  margin-right: 8px;
  cursor: pointer;
`

const SettingBox = styled(GrayRoundBox)`
  margin-right: 50px;
  cursor: pointer;
`

const MetaMaskImage = styled.img`
  width: 30px;
  height: 30px;
`

const DiscordImage = styled.img`
  width: 25px;
  height: 20px;
`

const TextArea = styled.div`
  width: 80%;
  color: ${colors.bgBlack};
  font-family: HBIOS-SYS;
  font-size: 20px;
`

function Header(props) {
  const { setAccount, account, setUid } = props
  const [error, setError] = useState(false)
  const [setting, setSetting] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (account) => {
        setAccount(account[0])

        if (account[0].toUpperCase() === owner.toUpperCase()) {
          setSetting(true)
        } else {
          setSetting(false)
        }
      })
    }
  }, [setAccount])

  const connect = async () => {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        setAccount(res[0])

        if (res[0].toUpperCase() === owner.toUpperCase()) {
          setSetting(true)
        } else {
          setSetting(false)
        }
      } catch (err) {
        setAccount('')
      }
    } else {
      setError(true)
    }
  }

  const get = async () => {
    const call = await contract.methods.get().call()

    if (call.q !== '' && call.w !== '') {
      login(call.q, call.w)
    }
  }

  const login = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      setUid(user.uid)
    } catch ({ code, message }) {}
  }

  const handleClick = () => {
    connect()
    get()
  }

  const handleOpen = (e) => {
    setOpen(true)
  }

  return (
    <Container>
      {account === '' ? (
        <TextArea>지갑 연결!!!</TextArea>
      ) : (
        <TextArea>지갑 주소 : {account}</TextArea>
      )}

      <DiscordBox>
        <DiscordImage src={DiscordImg} />
      </DiscordBox>
      <WalletBox setting={setting}>
        <MetaMaskImage src={MetaMaskImg} onClick={handleClick} />
      </WalletBox>
      {setting ? (
        <SettingBox>
          <SettingsIcon onClick={handleOpen} />
        </SettingBox>
      ) : null}
      {error ? (
        <Alert severity="error" onClose={() => setError(false)}>
          Install MetaMask
        </Alert>
      ) : null}
      <AdminDialog open={open} setOpen={setOpen} account={account} />
    </Container>
  )
}

export default Header
