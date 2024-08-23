import '../index.css';

export default function SideBar({ onSelect, projectList, onHandleClick }) {
    return (
        <aside>
            <div className='aside-inner'>
                <h2>Your Project</h2>
                <p>
                    <button type="button" class="btn btn-primary btn-lg" onClick={onSelect ? onSelect : undefined}>Add Project</button>
                </p>
                <div className='list-projects'>
                    <ul>
                        {
                            projectList.map((eachProject) => (
                                <li key={eachProject.id} onClick={() => onHandleClick(eachProject.id)}>
                                    {eachProject.title}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </aside>
    )
}