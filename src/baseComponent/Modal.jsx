import React,{memo} from 'react';
const Modal = memo(({modalId, modalTittle, modalBody,handleClear,handleSubmit}) => {
    return (
        <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog modal-lg d-flex justify-content-center align-items-center">
                <div className="modal-content text-decoration-none border-0">
                    {modalTittle &&
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{modalTittle}</h5>
                            <button type="button" className={`btn-close text-white modal-close ${modalId}`} data-bs-dismiss="modal" id="modal-close" aria-label="Close" onClick={handleClear}></button>
                        </div>
                    }
                    <div className="modal-body">
                        {
                            modalBody
                        }
                    </div>
                    <div className='d-flex justify-content-end'>
                        <div className='m-2'>
                            <button onClick={handleClear} className ="btn btn-primary">Clear</button>
                        </div>
                        <div className='m-2'>
                            <button onClick={(e)=>handleSubmit(e,modalId)} data-objective={modalTittle} className ="btn btn-success">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})


export default Modal;
