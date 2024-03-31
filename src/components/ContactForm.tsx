import { useState } from "react";

const MAX_CHAR = 300;

type FormDataState = {
    name: string;
    email: string;
    message: string;
};

export default function ContactForm() {

    const [formData, setFormData] = useState<FormDataState>({
        name: "", email: "", message: ""
    });

    console.log(formData);

    const charLimitClass = formData.message.length < MAX_CHAR
        ? "text-base"
        : "text-accent";

    /** Update form input. */
    function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {

        const fieldName = evt.target.name as keyof FormDataState;
        const value = evt.target.value;

        // if editing message field and current message is over 300 characters,
        // return
        if (fieldName === "message" && value.length >= MAX_CHAR) return;

        setFormData((currData: FormDataState) => {
            currData[fieldName] = value;
            return { ...currData };
        });
  };

    return (
        <form className="contact-form" data-netlify="true" method="POST">
            <label>Name: <span className="contact-form-required">*</span></label>
            <input
                type="text"
                name="name"
                value={formData.name}
                required
                onChange={handleChange}
            />
            <label>Email: <span className="contact-form-required">*</span></label>
            <input
                type="email"
                name="email"
                value={formData.email}
                required
                onChange={handleChange}
            />
            <label>Message: <span className="contact-form-required">*</span></label>
            <input
                type="textarea"
                name="message"
                value={formData.message}
                required
                onChange={handleChange}
            />
            <div className={charLimitClass}>
                {`${formData.message.length}/300 characters`}
            </div>

            <input type="submit" value="Search" />
        </form>
    )
}