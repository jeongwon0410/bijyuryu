import styled from 'styled-components'
import image1 from '@assets/images/image1.png'
import image2 from '@assets/images/image2.png'
import image3 from '@assets/images/image3.png'
const Container = styled.div`
  width: 100%;
  height: 700px;
  /* background-color: teal; */
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageArea = styled.div`
  /* margin-top: 50px; */
  width: 80%;

  /* height: 200px; */
  display: grid;
  /* background-color: red; */
  grid-template-columns: repeat(3, 1fr);
  gap: 10%;
  margin-top: 50px;
`

const ImageCustom = styled.img`
  width: 100%;
  height: 70%;
`

const TextArea = styled.div`
  font-family: HBIOS-SYS;
  font-size: 100px;
  margin-top: 100px;
`

function ManagementTeam() {
  return (
    <Container>
      <TextArea>운영진</TextArea>
      <ImageArea>
        <ImageCustom src={image1} />
        <ImageCustom src={image2} />
        <ImageCustom src={image3} />
      </ImageArea>
    </Container>
  )
}

export default ManagementTeam
