export default function Form() {

    const titles = ['General Info', 'Education', 'Experience']

    return (
        <div id="forms">
        <fieldset>
            <legend>{titles[0]}</legend>
            <div className="input-field-wrapper">
                <label htmlFor="name">Name: </label>
                <input type="text" />
            </div>
            <div className="input-field-wrapper"></div>
                <label htmlFor="email">Email: </label>
                <input type="email" placeholder="example@me.com"/>
            <div className="input-field-wrapper">
                <label htmlFor="phone">Phone: </label>
                <input type="tel" placeholder="111-222-3333"/>
            </div>
        </fieldset>
        <fieldset>
            <legend>{titles[1]}</legend>
            <div className="input-field-wrapper">
                <label htmlFor=""></label>
                <input type="text" />
            </div>
            <div className="input-field-wrapper">
                <label htmlFor=""></label>
                <input type="text" />
            </div>
            <div className="input-field-wrapper">
                <label htmlFor=""></label>
                <input type="text" />
            </div>
        </fieldset>
        <fieldset>
            <legend>{titles[2]}</legend>
            <div className="input-field-wrapper">
                <label htmlFor=""></label>
                <input type="text" />
            </div>
            <div className="input-field-wrapper">
                <label htmlFor=""></label>
                <input type="text" />
            </div>
            <div className="input-field-wrapper">
                <label htmlFor=""></label>
                <input type="text" />
            </div>
        </fieldset>
        </div>
    )

}