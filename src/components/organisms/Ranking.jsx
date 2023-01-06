import Items from '@components/organisms/Items'
import RankingItems from '@components/organisms/RankingItems'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { useState } from 'react'
import styled from 'styled-components'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import AlertDialog from './AlertDialog'
import * as colors from '@styles/colors'
import RankingResultItems from '@components/organisms/RankingResultItems'
import { contract } from '@components/atoms/common'
import { useEffect } from 'react'
import { ref, getDownloadURL, listAll } from 'firebase/storage'
import { storage } from '@components/atoms/firebase'

const Container = styled.div`
  width: 100%;
  /* height:590px;  */
  height: ${(props) => (props.flag ? 1300 : 590)}px;
  background-color: ${colors.dodgerblueColor};
`

const Title = styled.div`
  font-family: HBIOS-SYS;
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 10px;
`

const Button = styled.button`
  margin-top: 10px;
  width: 100px;
  height: 50px;
  margin-left: 30px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${colors.greenColor};
  font-family: HBIOS-SYS;
  font-size: 15px;
`

function Ranking(props) {
  const {
    on,
    setOn,
    setOpen,
    setRegisterOpen,
    check,
    setCheck,
    account,
  } = props

  const [result, setResult] = useState(false)
  const [text, setText] = useState('결과')
  const [admin, setAdmin] = useState(false)
  const [list, setList] = useState([])

  useEffect(() => {
    const getAdmin = async () => {
      const admin = await contract.methods.getAdmin().call()
      let flag = false
      for (const iterator of admin) {
        if (iterator.toUpperCase() === account.toUpperCase()) {
          setAdmin(true)
          flag = true
        }
      }
      if (flag === false) {
        setAdmin(false)
      }
    }

    getAdmin()
  }, [account])

  useEffect(() => {
    const getCandidate = async () => {
      setList(await contract.methods.getCandidate().call())
    }
    getCandidate()
  }, [])

  const handleChange = () => {
    if (list.length > 0) {
      setOn(!on)
    }
  }

  const handleButtonClick = (e) => {
    e.stopPropagation()
    setOpen(true)
    // setResult(false)
  }

  const handleButtonRegisterClick = (e) => {
    e.stopPropagation()
    setRegisterOpen(true)
  }

  const handleButtonResultClick = (e) => {
    e.stopPropagation()
    if (result === true) {
      setResult(false)
      setText('결과')
    } else {
      setResult(true)
      setText('투표')
    }
  }

  // const handleClose = () => {
  //   setOpen(false)
  // }

  return (
    <Accordion
      style={{ backgroundColor: `${colors.dodgerblueColor}` }}
      expanded={on === true}
      onChange={handleChange}
    >
      <AccordionSummary
        expandIcon={
          <ArrowForwardIosIcon style={{ width: '20px', height: '20px' }} />
        }
      >
        <Title>랭킹</Title>
        {result === true ? null : (
          <Button onClick={handleButtonClick}>투표하기</Button>
        )}
        {admin === true ? (
          <>
            <Button onClick={handleButtonResultClick}>{text}</Button>
            <Button onClick={handleButtonRegisterClick}>후보자 등록</Button>
          </>
        ) : null}
      </AccordionSummary>
      <AccordionDetails>
        {result === true ? (
          <RankingResultItems />
        ) : (
          <RankingItems check={check} setCheck={setCheck} list={list} />
        )}
      </AccordionDetails>
    </Accordion>
  )
}

export default Ranking
