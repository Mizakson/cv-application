import { getFormData  } from "./Data"

export default function Form() {

    const sayClicked = (e) => {
        e.preventDefault()
        console.log("clicked")
        // document.querySelector("form").classList.toggle("blocker")
        let data = getFormData()
        console.log(data)
    }

    return (
        <form>
            <section>
                <p className="section-title">General Info</p>
                <fieldset className="input-field">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name"/>
                </fieldset>
                <fieldset className="input-field">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" placeholder="example@me.com"/>
                </fieldset>
                <fieldset className="input-field">
                    <label htmlFor="phone-number">Phone: </label>
                    <input type="tel" name="phone-number" id="phone-number" placeholder="111-222-3333"/>
                </fieldset>
            </section>
            <section>
                <p className="section-title">Education</p>
                <fieldset className="input-field">
                    <label htmlFor="school-name">School: </label>
                    <input type="text" name="school-name" id="school-name" placeholder="Stanford University"/>
                </fieldset>
                <fieldset className="input-field">
                    <label htmlFor="degree">Degree: </label>
                    <input type="text" name="degree" id="degree" placeholder="B.S. Chemical Engineering"/>
                </fieldset>
                <fieldset className="input-field">
                    <label htmlFor="study-date">Date: </label>
                    <input type="text" name="study-date" id="study-date" placeholder="AUG 2008 - MAY 2012"/>
                </fieldset>
            </section>
            <section>
                <p className="section-title">Experience</p>
                <fieldset className="input-field">
                    <label htmlFor="company">Company: </label>
                    <input type="text" name="company" id="company"/>
                </fieldset>
                <fieldset className="input-field">
                    <label htmlFor="responsibilities">Duties: </label>
                    <textarea name="responsibilites" id="responsibilities" maxLength={100} placeholder="Oversaw testing of compound XYZ..."></textarea>
                </fieldset>
                <fieldset className="input-field">
                    <label htmlFor="work-date">Date: </label>
                    <input type="text" name="work-date" id="work-date" placeholder="MAR 2020 - PRESENT"/>
                </fieldset>
            </section>
            <button type="submit" onClick={sayClicked}>Submit</button>
        </form>
    )
}