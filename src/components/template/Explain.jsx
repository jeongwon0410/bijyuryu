import { Button } from '@mui/material'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 648px;
  background-color: blue;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`
const TextArea = styled.div`
  width: 80%;
  color: white;
  font-family: HBIOS-SYS;
  font-size: 20px;
  line-height: 2;
`

const ButtonArea = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`

const ButtonCustom = styled.button`
  cursor: pointer;
  width: 200px;
  height: 100px;
  background-color: beige;
  font-family: HBIOS-SYS;
  border-color: beige;
  border-radius: 5px;
  font-size: 50px;
  margin-right: 100px;
  margin-left: 100px;
`

function Explain() {
  return (
    <Container>
      <TextArea>
        대부분의 사람들은 대중적인것을 쫓습니다. 유명한 책, 유명한 음악, 단지
        유명하다는 이유로 많은 사람들이 그것을 옹호하고 좋아하는 경우를 많이
        봅니다. 여러분들은 그런적이 없으셨나요? 나다움을 나타낼수있는 공간, 내
        이야기를 하는것처럼 나를 위로해주는 노래, 스스로 솔직하게 쓸수있는
        일기와 나만의 그림들 일반적이지 않은것들에게 마음이 가게 되는 경우
        말입니다. 시밀레는 그런 알려지지 않은 자신만의 것을 함께 나누는
        공간입니다
      </TextArea>
      {/* <ButtonArea>
        <ButtonCustom>백서</ButtonCustom>
        <ButtonCustom>Discord</ButtonCustom>
      </ButtonArea> */}
    </Container>
  )
}

export default Explain