import styled from 'styled-components'
import image1 from '@assets/images/image1.png'
import image2 from '@assets/images/image2.png'
import image3 from '@assets/images/image3.png'
const Container = styled.div`
  width: 100%;
  height: 700px;
  /* margin-top: 10px; */
  background-color: black;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageArea = styled.div`
  /* margin-top: 50px; */
  width: 80%;
  /* height: 70%; */
  /* height: 200px; */
  display: grid;
  /* background-color: red; */
  grid-template-columns: repeat(3, 1fr);
  gap: 10%;
  margin-top: 50px;
`

const ImageCustom = styled.img`
  width: 100%;
  height: 400px;
`

const TextArea = styled.div`
  font-family: HBIOS-SYS;
  font-size: 100px;
  /* margin-top: 100px; */
  color: white;
`
const ImgText = styled.div`
  font-family: HBIOS-SYS;
  font-size: 50px;
  /* margin-top: 100px; */
  color: white;
`

function ManagementTeam() {
  return (
    <Container>
      <TextArea>운영진</TextArea>
      <ImageArea>
        <div>
          <ImageCustom src={image1} />
          <ImgText>
            0 <br />
            어드바이저
          </ImgText>
        </div>
        <div>
          <ImageCustom src={image2} />
          <ImgText>
            LEE
            <br /> 디자인
          </ImgText>
        </div>
        <div>
          <ImageCustom src={image3} />
          <ImgText>
            ONE <br /> 개발자
          </ImgText>
        </div>
      </ImageArea>
    </Container>
  )
}

export default ManagementTeam
