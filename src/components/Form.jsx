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
                    <div className='field'>
                        <label htmlFor='name'>Name: </label>
                        <input type='text' name='name' id='name' />
                    </div>
                    <div className='field'>
                        <label htmlFor='email'>Email: </label>
                        <input type='mail' name='email' id='email' placeholder='example@me.com'/>
                    </div>
                    <div className='field'>
                        <label htmlFor='phone'>Phone: </label>
                        <input type='tel' name='phone' id='phone' placeholder='111-222-3333'/>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Education</legend>
                    <div className='field'>
                        <label htmlFor='school'>School: </label>
                        <input type='text' name='school' id='school' />
                    </div>
                    <div className='field'>
                        <label htmlFor='degree'>Degree: </label>
                        <input type='text' name='degree' id='degree' />
                    </div>
                    <div className='field'>
                        <label htmlFor='date-of-study'>Date: </label>
                        <input type='text' name='date-of-study' id='date-of-study' placeholder='AUG 2008 - MAY 2012'/>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Work Experience</legend>
                    <div className='field'>
                        <label htmlFor='company'>Company: </label>
                        <input type='text' name='company' id='company'/>
                    </div>
                    <div className='field'>
                        <label htmlFor='date-of-work'>Date: </label>
                        <input type='text' name='date-of-work' id='date-of-work'/>
                    </div>
                    <div className='field'>
                        <label htmlFor='responsibilities'>Responsibilities: </label>
                        <input type='text' maxLength={75} name='responsibilities' id='responsibilities'/>
                    </div>
                </fieldset>
                <button type='submit'>Submit</button>
            </form>
            <div className='cv'>
                <div className='paper'></div>
                <button id='edit'>Edit</button>
            </div>
        </div>

    )


}

export { Form }