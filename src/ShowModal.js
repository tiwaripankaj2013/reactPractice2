import React from "react";
import {useState} from "react";
import Modal1 from "./component/Modal";


const ShowModal = () => {
    const [openModal,setOpenModal] = useState(false)
    
    return(
        <React.Fragment>
           <button className='btn btn-outline-warning' onClick ={() => {setOpenModal(true);}}>
                Open Modal
            </button>
            {openModal && (<Modal1 props={setOpenModal}/>) }
        </React.Fragment>
    )
}

export default ShowModal;