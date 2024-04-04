import { useState } from "react";
import Button from "./Button.astro";

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
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [formError, setFormError] = useState<string>("");

    // console.log(formData);

    const charLimitClass = formData.message.length < MAX_CHAR
        ? "text-base text-xs text-right"
        : "text-accent text-xs text-right";

    const label = "font-serif text-md text-base";
    const inputClass = `my-2 w-full box-border p-2 bg-muted opacity-50 border-2
        border-border rounded-md text-base focus:border-2`;
    const inputRequired = "text-accent";
    const buttonClass = "block mx-auto mt-4 bg-primary rounded px-2 py-2 text-center text-fill whitespace-nowrap;"
    const formErrorClass = "p-2 bg-muted";
    const formSubmittedClass = "text-center"

    /** Update form input. */
    function handleChange(evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {

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

    /** Map form data to form submission. */
    function encode(data: Record<string, string>) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    /** Handle form submission. */
    function handleSubmit(evt: React.FormEvent) {
        evt.preventDefault();

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
        })
            .then(() => setFormSubmitted(true))
            .catch(error => setFormError(error));
    };

    return (
        <form
          className="contact-form py-4 px-8 w-full bg-fill border-2 border-border rounded-lg w-2/5"
          onSubmit={handleSubmit}
        >
            <input type="hidden" name="form-name" value="contact" />
            <label className={label}>Name: <span className={inputRequired}>*</span></label>
            <input
                type="text"
                name="name"
                className={inputClass}
                value={formData.name}
                required
                onChange={handleChange}
            />
            <label className={label}>Email: <span className={inputRequired}>*</span></label>
            <input
                type="email"
                name="email"
                className={inputClass}
                value={formData.email}
                required
                onChange={handleChange}
            />
            <label className={label}>Message: <span className={inputRequired}>*</span></label>
            <textarea
                name="message"
                className={inputClass}
                value={formData.message}
                required
                onChange={handleChange}
            />
            <div className={charLimitClass}>
                {`${formData.message.length}/300 characters`}
            </div>
            {formError && <div className={formErrorClass}>{formError}</div>}
            {formSubmitted && <div className={formSubmittedClass}>
                <p>Thanks! I'll be in touch.</p>
            </div>}
            <button className={`${buttonClass} group`}>
                Send
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fffff7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="-rotate-180 transform transition-all group-hover:rotate-0"
                ><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg
                >
            </button>
        </form>
    );
}