import { useState } from 'react';

function Form() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        school: '',
        degree: '',
        dateOfStudy: '',
        company: '',
        jobTitle: '',
        dateOfWork: '',
        responsibilities: '',
    })

    const onChangeHandler = (event) => {
        const eTarget = event.target.value
        setFormData(() => ({
            ...formData,
            [event.target.name]: eTarget
        }))
    }

    const onFormSubmitHandler = (event) => {
        event.preventDefault()
        console.log(formData)
        document.getElementById("render-username").innerText = formData.username
        document.getElementById("render-email").innerText = formData.email
        document.getElementById("render-phone").innerText = formData.phone
        document.getElementById("render-school").innerText = formData.school
        document.getElementById("render-degree").innerText = formData.degree
        document.getElementById("render-dateOfStudy").innerText = formData.dateOfStudy
        document.getElementById("render-company").innerText = formData.company
        document.getElementById("render-jobTitle").innerText = formData.jobTitle
        document.getElementById("render-dateOfWork").innerText = formData.dateOfWork
        document.getElementById("werer").innerText = formData.responsibilities
        document.querySelectorAll(".inactive")[1].classList.remove('inactive')
        document.querySelectorAll(".inactive")[0].classList.remove('inactive')
    }

    return (
        <div className='display'>
            <form onSubmit={onFormSubmitHandler}>
                <div className="form-fields">
                <fieldset>
                    <legend>General Info</legend>
                    <div className='field'>
                        <label htmlFor='username'>Name: </label>
                        <input type='text' name='username' id='username' onChange={onChangeHandler} value={formData.username}/>
                    </div>
                    <div className='field'>
                        <label htmlFor='email'>Email: </label>
                        <input type='mail' name='email' id='email' placeholder='example@me.com' onChange={onChangeHandler} value={formData.email}/>
                    </div>
                    <div className='field'>
                        <label htmlFor='phone'>Phone: </label>
                        <input type='tel' name='phone' id='phone' placeholder='111-222-3333' onChange={onChangeHandler} value={formData.phone}/>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Education</legend>
                    <div className='field'>
                        <label htmlFor='school'>School: </label>
                        <input type='text' name='school' id='school' onChange={onChangeHandler} value={formData.school}/>
                    </div>
                    <div className='field'>
                        <label htmlFor='degree'>Degree: </label>
                        <input type='text' name='degree' id='degree' onChange={onChangeHandler} value={formData.degree}/>
                    </div>
                    <div className='field'>
                        <label htmlFor='dateOfStudy'>Date: </label>
                        <input type='text' name='dateOfStudy' id='dateOfStudy' placeholder='AUG 2008 - MAY 2012' onChange={onChangeHandler} value={formData.dateOfStudy}/>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Work Experience</legend>
                    <div className='field'>
                        <label htmlFor='company'>Company: </label>
                        <input type='text' name='company' id='company' onChange={onChangeHandler} value={formData.company}/>
                    </div>
                    <div className='field'>
                        <label htmlFor='jobTitle'>Title: </label>
                        <input type='text' name='jobTitle' id='jobTitle' onChange={onChangeHandler} value={formData.jobTitle}/>
                    </div>

                    <div className='field'>
                        <label htmlFor='dateOfWork'>Date: </label>
                        <input type='text' name='dateOfWork' id='dateOfWork' placeholder='JAN 2021 - PRESENT' onChange={onChangeHandler} value={formData.dateOfWork}/>
                    </div>
                    <div className='field'>
                        <label htmlFor='responsibilities'>Responsibilities: </label>
                        <input type='text' name='responsibilities' id='responsibilities' onChange={onChangeHandler} value={formData.responsibilities}/>
                    </div>
                </fieldset>
                </div>
                <div className="submit-field">
                    <button type='submit'>Submit</button>
                </div>
                
            </form>
        </div>

    )


}

export default Form