function Form() {
    return (
        <form>
            <section>
                <p className="section-title">General Info</p>
                <fieldset>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name"/>
                </fieldset>
                <fieldset>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" placeholder="example@me.com"/>
                </fieldset>
                <fieldset>
                    <label htmlFor="phone-number">Phone: </label>
                    <input type="tel" name="phone-number" id="phone-number" placeholder="111-222-3333"/>
                </fieldset>
            </section>
            <section></section>
            <section></section>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form