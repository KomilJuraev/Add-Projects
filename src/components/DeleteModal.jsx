import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const DeleteModal = forwardRef(function DeleteModal({ onConfirm, onCancel }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog ref={dialog}>
            <h2>
                Are you sure, you want to delete this project?
            </h2>
            <form className="dialog-form" method="dialog">
                <button type="button" class="btn btn-primary" onClick={onConfirm}>Confirm</button>
                <button type="button" class="btn btn-secondary" onClick={onCancel}>Cancel</button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    )
})

export default DeleteModal;