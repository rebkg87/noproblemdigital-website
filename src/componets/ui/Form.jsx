import { Button } from "./Button"
import { Dropdown } from "./Dropdown"
import { Input } from "./Input"
import { TextArea } from "./TextArea"
import { Checkbox } from "./Checkbox"

export const Form = ({ content }) => {
    return (
        <form action="">
            <div className="flex flex-col w-auto gap-3.5 bg-white px-16.5 py-16 rounded-[20px] shadow-soft">
                <div className="flex flex-col w-auto gap-2.5  ">
                    {content.form.map((field, index) => (
                        field.type === "textarea" ? (
                            <TextArea key={index} label={field.label} id={field.id} placeholder={field.placeholder} className="min-h-41.25"/>
                        ) : (
                            <Input key={index} label={field.label} type={field.type} id={field.id} placeholder={field.placeholder} />
                        )
                    ))}
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <Dropdown trigger={content.dropdown.label} items={content.dropdown.options} />
                    <Button type="submit" variant="primary">{content.buttonText}</Button>
                </div>
                <Checkbox label={content.checkbox} name="checkbox" required />
            </div>
        </form>
    )
}
