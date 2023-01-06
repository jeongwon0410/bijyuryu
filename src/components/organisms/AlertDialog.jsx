import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { styled } from '@mui/system'
import * as colors from '@styles/colors'

const CustomDialogTitle = styled(DialogTitle)`
  font-family: 'HBIOS-SYS';
  font-size: 30px;
`
const CustomDialogContentTextRed = styled(DialogContentText)`
  font-family: 'HBIOS-SYS';
  font-size: 20px;
  color: ${colors.redColor};
  margin-bottom: 5px;
`
const CustomDialogContentText = styled(DialogContentText)`
  font-family: 'HBIOS-SYS';
  font-size: 20px;
`

const CustomButton = styled(Button)`
  font-family: 'HBIOS-SYS';
  font-size: 20px;
  color: ${colors.greenColor};
`

function AlertDialog(props) {
  const { open, setOpen, check } = props
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog fullWidth={true} open={open} onClose={handleClose}>
      <CustomDialogTitle>{'투표'}</CustomDialogTitle>
      <DialogContent>
        {check === 0 ? (
          <CustomDialogContentText>선택해 주세요</CustomDialogContentText>
        ) : (
          <>
            <CustomDialogContentTextRed>{check}번</CustomDialogContentTextRed>
            <CustomDialogContentText>
              선택 하시겠습니까?
            </CustomDialogContentText>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <CustomButton onClick={handleClose}>Cancel</CustomButton>
        <CustomButton onClick={handleClose} autoFocus>
          OK
        </CustomButton>
      </DialogActions>
    </Dialog>
  )
}

export default AlertDialog
