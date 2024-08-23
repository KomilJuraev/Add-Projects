import '../index.css';

export default function Home({ onSelect, deleted }) {
    return (
        <div className="main-page-div">
            {deleted ? <p className='success-message'>Successfully Deleted</p> : ''}
            <h1>No Project Selected</h1>
            <h3>Select a project or get started with a new one</h3>
            <button type="button" class="btn btn-primary btn-lg" onClick={onSelect ? onSelect : undefined}>Create new project</button>
        </div>
    )
}