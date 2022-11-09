import { Button, Modal } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ModalShow = ({visible,setVisible}) => {
  return (
    
    <React.Fragment>
      <Modal
    show={visible}
    size="md"
    popup={true}
    onClose={()=> setVisible(false)}
  >
    <Modal.Header>
      Login Required
    </Modal.Header>
    <Modal.Body>
      <div className="space-y-6">
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
         To add review you have to logIn first!
        </p>
    
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Link to='/login'>
      <Button >
        Login Now?
      </Button>
      </Link>
      <Button
      onClick={()=>setVisible(false)}
        color="gray"
      >
        Cancel
      </Button>
    </Modal.Footer>
  </Modal>
    </React.Fragment>

  )
}

export default ModalShow