import { useRef } from 'react';

import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Form({ onSelect, onSave }) {

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(event) {
        event.preventDefault();
        onSave(title.current.value, description.current.value, dueDate.current.value);
    }

    return (
        <div className="main-page-div">
            <form onSubmit={handleSave}>
                <div className='form-input-container'>
                    <label className='form-label'><h4>Title</h4></label>
                    <input ref={title} type="text" required />
                </div>
                <div className='form-input-container'>
                    <label className='form-label'><h4>Description</h4></label>
                    <input ref={description} type="text" required />
                </div>
                <div className='form-input-container'>
                    <label className='form-label'><h4>Due Date</h4></label>
                    <input ref={dueDate} type="date" required />
                </div>
                <div className='form-input-container'>
                    <button type="submit" className="btn btn-primary save-bnt">Save</button>
                    <button type="button" className="btn btn-secondary cancel-btn" onClick={onSelect}>Cancel</button>
                </div>
            </form>
        </div>
    )
}