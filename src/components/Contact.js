
function Contact() {
    return (
        <div className="contact">
            <h2 className="head">
                Write to me
            </h2>
            <form>
                <div className="form">
                    <div className="form__group">
                        <input type="text" className="input" placeholder="Name" />
                        <input type="text" className="input" placeholder="Email Id" />
                        <input type="text" className="input" placeholder="Phone No" />
                        <input type="text" className="input" placeholder="Subject" />
                    </div>
                    <textarea name="" id="" cols="30" rows="10" className="query"></textarea>
                    <button className="button">Submit</button>
                </div>
            </form>
        </div>

    );
}

export default Contact;