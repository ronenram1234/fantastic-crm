import { FunctionComponent } from "react";
import Modal from "react-bootstrap/Modal";
import Login from "./Login";
// import Button from "react-bootstrap/Button";
// import { Product } from "../interfaces/Product";
// import UpdateAdd from "./UpdateAdd";

interface ModalLoginRegProps {
  show: boolean;
  //   setModalShow:React.Dispatch<React.SetStateAction<boolean>>;
  onHide: any;
  // modalAction: string;
  // selectedProduct:Product;
  // isProductChange: boolean;
  // setIsProductChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalLoginReg: FunctionComponent<ModalLoginRegProps> = ({
  show,
  //   setModalShow,
  onHide,
  // modalAction,
}) => {
  function handleModalUpdate() {
    // setModalShow(false)
    console.log("handle");
    onHide();
  }

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {/* {modalAction === "add" ? "Add New Product" : "Update Product"} */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalLoginReg;
