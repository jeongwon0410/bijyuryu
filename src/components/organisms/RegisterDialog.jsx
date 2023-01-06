import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { styled } from '@mui/system'
import * as colors from '@styles/colors'
import Grid from '@mui/material/Grid'
import { useState } from 'react'
import { contract } from '@components/atoms/common'
import Alert from '@mui/material/Alert'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '@components/atoms/firebase'
const CustomDialogTitle = styled(DialogTitle)`
  font-family: 'HBIOS-SYS';
  font-size: 30px;
`
const CustomButtonWhite = styled(Button)`
  font-family: 'HBIOS-SYS';
  font-size: 20px;
  color: ${colors.textPrimary};
  margin-top: 20px;
`
const CustomDialogContentText = styled(DialogContentText)`
  font-family: 'HBIOS-SYS';
  font-size: 20px;
  margin-top: 15px;
`

const CustomButton = styled(Button)`
  font-family: 'HBIOS-SYS';
  font-size: 20px;
  color: ${colors.greenColor};
`

const ImgWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  img {
    width: 500px;
    height: 200px;
  }
`
function RegisterDialog(props) {
  const { open, setOpen, account } = props
  const [nickName, setNickName] = useState('')
  const [url, setUrl] = useState('')
  const [comment, setComment] = useState('')
  const [error, setError] = useState(false)

  // const [imgUrl, setImgUrl] = useState('')
  const [isUploading, setUploading] = useState(false) // 업로드 상태
  const [progress, setProgress] = useState(0) // 업로드 진행상태

  const [image, setImage] = useState({
    image_file: '',
    preview_URL: '',
  })
  let inputRef

  const handleClose = () => {
    setOpen(false)
    setNickName('')
    setUrl('')
    setComment('')
    setError(false)
    setImage({
      image_file: '',
      preview_URL: '',
    })
  }

  const saveImage = (e) => {
    e.preventDefault()
    const fileReader = new FileReader()

    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0])
    }
    fileReader.onload = () => {
      setImage({
        image_file: e.target.files[0],
        preview_URL: fileReader.result,
      })
    }
  }

  const setCandidate = async () => {
    if (account === '') {
      setError(true)
    } else {
      handleClose()

      await contract.methods
        .setCandidata(nickName, url, comment, `userImages/${nickName}`)
        .send({ from: account })
      handleImageUpload(image.image_file)
    }
  }

  // 업로드시 호출될 함수
  const handleImageUpload = async (file) => {
    try {
      setUploading(true)
      const storageRef = ref(storage, `userImages/${nickName}`)

      await uploadBytesResumable(storageRef, file)

      alert('성공적으로 업로드 되었습니다')
    } catch (err) {
      console.error(err)
    }
    setUploading(false)
  }
  return (
    <Dialog fullWidth={true} open={open} onClose={handleClose}>
      <CustomDialogTitle>후보자 등록</CustomDialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <CustomDialogContentText>닉네임</CustomDialogContentText>
          </Grid>
          <Grid item xs={9}>
            <TextField
              autoFocus
              margin="dense"
              color="success"
              fullWidth
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
            />
          </Grid>
        </Grid>
        {/* <Grid container spacing={2}>
            <Grid item xs={3}>
              <CustomDialogContentText>지갑 주소</CustomDialogContentText>
            </Grid>
            <Grid item xs={9}>
              <TextField margin="dense" id="name" color="success" fullWidth />
            </Grid>
          </Grid> */}
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <CustomDialogContentText>URL</CustomDialogContentText>
          </Grid>
          <Grid item xs={9}>
            <TextField
              margin="dense"
              id="name"
              color="success"
              fullWidth
              vlaue={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <CustomDialogContentText>하고 싶은 말</CustomDialogContentText>
          </Grid>
          <Grid item xs={9}>
            <TextField
              margin="dense"
              id="name"
              color="success"
              fullWidth
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid>
          <input
            type="file"
            accept="image/*"
            onChange={saveImage}
            onClick={(e) => (e.target.value = null)}
            ref={(refParam) => (inputRef = refParam)}
            style={{ display: 'none' }}
          />
          <CustomButtonWhite
            variant="contained"
            color="success"
            onClick={() => inputRef.click()}
          >
            이미지 등록
          </CustomButtonWhite>
        </Grid>
        <ImgWrapper>
          {image.preview_URL === '' ? null : <img src={image.preview_URL} />}
        </ImgWrapper>
      </DialogContent>
      <DialogActions>
        <CustomButton onClick={handleClose}>Cancel</CustomButton>
        <CustomButton onClick={setCandidate}>Register</CustomButton>
      </DialogActions>
      {error ? <Alert severity="error">지갑 연결!!</Alert> : null}
    </Dialog>
  )
}

export default RegisterDialog
