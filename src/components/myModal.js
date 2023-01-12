import React,{useState} from 'react'
import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalFooter,
} from '@mattjennings/react-modal'
import { Text, Button } from 'theme-ui'

function MyModal(props) {
  const [open, setOpen] = useState(true)

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      {({ onClose }) => (
        <>
          <ModalTitle>
            <Text
              sx={{
                fontSize: 2,
                fontWeight: 'medium',
              }}
            >
              Welcome!
            </Text>
          </ModalTitle>
          <ModalContent>
            <Text>This is the modal example</Text>
          </ModalContent>
          <ModalFooter>
            <Button variant="pill" onClick={onClose}>
              OK
            </Button>
          </ModalFooter>
        </>
      )}
    </Modal>
  )
}
export default MyModal

