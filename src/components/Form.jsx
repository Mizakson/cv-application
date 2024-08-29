function Form() {
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
                <p className="education">Education</p>
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
            <section></section>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form