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
            <form></form>
            <div className="cv"></div>
        </div>

    )


}

export { Form }