import Image from 'next/image';
import Modal from 'react-bootstrap/Modal';

export default function RulesModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName='p-4'
      >
        <Modal.Header className='p-0 border-0' closeButton>
          <Modal.Title as='h2' id="contained-modal-title-vcenter">
            RULES
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{position:'relative', height:'50vh'}} className='d-flex justify-content-center'>
          <Image fill style={{objectFit:'contain'}} src={props.rule}/>
        </Modal.Body>
      </Modal>
    );
  }
