export default function Form() {

    const titles = ['General Info', 'Education', 'Experience']

    return (
        <div id="forms">
        <fieldset>
            <legend>{titles[0]}</legend>
            <div className="input-field-wrapper">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name"/>
            </div>
            <div className="input-field-wrapper">
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" placeholder="example@me.com"/>
            </div>
            <div className="input-field-wrapper">
                <label htmlFor="phone">Phone: </label>
                <input type="tel" id='phone' placeholder="111-222-3333"/>
            </div>
        </fieldset>
        <fieldset>
            <legend>{titles[1]}</legend>
            <div className="input-field-wrapper">
                <label htmlFor="school">School: </label>
                <input type="text" id="school"/>
            </div>
            <div className="input-field-wrapper">
                <label htmlFor="degree">Degree: </label>
                <input type="text" id="degree"/>
            </div>
            <div className="input-field-wrapper">
                <label htmlFor="study-date">Date: </label>
                <input type="text" id="study-date" placeholder="AUG 2018 - MAY 2022"/>
            </div>
        </fieldset>
        <fieldset>
            <legend>{titles[2]}</legend>
            <div className="input-field-wrapper">
                <label htmlFor="company">Company: </label>
                <input type="text" id="company"/>
            </div>
            <div className="input-field-wrapper">
                <label htmlFor="work-date">Date: </label>
                <input type="text" id="work-date" placeholder="SEP 2023 - PRESENT"/>
            </div>
            <div className="input-field-wrapper">
                <p>Duties: </p>
                <textarea type="text" id="responsibilites" placeholder="Developed feature XYZ..."/>
            </div>
        </fieldset>
        <button type="submit">Submit</button>
        </div>
    )

}