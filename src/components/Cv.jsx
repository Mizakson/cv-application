function Cv() {

    const onEditHandler = (event) => {
        event.preventDefault()
        console.log('edit me')
        alert("Re-enter and re-submit data to finalize edit...")
    }

    return(
        <div className='cv'>
        <div className='paper'>
            <div className="title">
                <h2 id='render-username'></h2>
                <div className="info-subcontainer">
                    <p className="gray-text" id='render-email'></p>
                    <p className="gray-text" id="render-phone"></p>
                </div>
            </div>
            <div className="cv-group-1">
                <h3 className="inactive">Education: </h3>
                <div className="cv-data">
                    <p id="render-school"></p>
                    <p className="gray-text" id='render-degree'></p>
                    <p className="gray-text" id="render-dateOfStudy"></p>
                </div>
            </div>
            <div className="cv-group-2">
                <h3 className="inactive">Experience: </h3>
                <div className="cv-data">
                    <p id="render-company"></p>
                    <p id="render-jobTitle"></p>
                    <p className="gray-text" id='render-dateOfWork'></p>
                    <p className="gray-text" id='werer'></p>
                </div>
            </div>
        </div>
        <div className="edit-field">
        <button id='edit' onClick={onEditHandler}>Edit</button>
        <p className="notification"></p>
        </div>
    </div>
    )
}

export default Cv