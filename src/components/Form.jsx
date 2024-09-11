import { useState } from 'react';

function Form() {

    const [data, setData] = useState('')
        // name: '',
        // email: '',
        // phone: '',
        // school: '',
        // degree: '',
        // dateOfStudy: '',
        // company: '',
        // dateOfWork: '',
        // responsibilities: '',
    

    const onChangeHandler = (event) => { 
        setData(event.target.value)
    }

    return (
        <div className='display'>
            <form>
                <fieldset>
                    <legend>General Info</legend>
                    <div className="field"></div>
                    <div className="field"></div>
                    <div className="field"></div>
                </fieldset>
                <fieldset>
                    <legend>Education</legend>
                    <div className="field"></div>
                    <div className="field"></div>
                    <div className="field"></div>
                </fieldset>
                <fieldset>
                    <legend>Work Experience</legend>
                    <div className="field"></div>
                    <div className="field"></div>
                    <div className="field"></div>
                </fieldset>
                <button type="submit"></button>
            </form>
            <div className="cv"></div>
        </div>

    )


}

export { Form }