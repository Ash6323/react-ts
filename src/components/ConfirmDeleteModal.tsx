import React, { useState } from 'react';
import {Modal} from 'react-bootstrap';
import axios from 'axios';

const baseURL = "https://localhost:7087/api/Customer";

const ConfirmDeleteModal: React.FC<any> = ({deletionCustomerId}) => {

    const [isShow, invokeModal] = useState<boolean>();
    const closeModal = () => invokeModal(false);

    const handleDeleteClick = () => {
        axios.delete(`${baseURL}/${deletionCustomerId}`)
            .then(() => 
            {
                console.log("Deleted");
            });
        closeModal();
    }

    return (
        <div>
            <Modal.Header closeButton onClick={closeModal}>
                <Modal.Title>Delete Data?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>Are You Sure?</div>
                <div>
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={handleDeleteClick}>
                        Delete
                    </button>
                </div>
            </Modal.Body>
        </div>
    )
}
export default ConfirmDeleteModal;