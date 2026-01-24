import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Button } from "./Button"
import { Dropdown } from "./Dropdown"
import { Input } from "./Input"
import { TextArea } from "./TextArea"
import { Checkbox } from "./Checkbox"
import { getContactFormValidation } from "../../lib/validationSchemas"

export const Form = ({ content }) => {
    const [status, setStatus] = useState('idle');
    const validation = getContactFormValidation(content.validation);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            message: '',
            project: '',
            terms: false
        }
    });

    const onSubmit = async (data) => {
        setStatus('sending');

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                    project_type: data.project,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus('success');
            reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="flex flex-col w-auto gap-3.5 bg-white px-16.5 py-16 rounded-[20px] shadow-soft">
                <div className="flex flex-col w-auto gap-2.5">
                    {content.form.map((field, index) => (
                        field.type === "textarea" ? (
                            <TextArea
                                key={index}
                                label={field.label}
                                placeholder={field.placeholder}
                                className="min-h-41.25"
                                error={errors.message?.message}
                                {...register('message', validation.message)}
                            />
                        ) : field.type === "email" ? (
                            <Input
                                key={index}
                                label={field.label}
                                type={field.type}
                                placeholder={field.placeholder}
                                error={errors.email?.message}
                                {...register('email', validation.email)}
                            />
                        ) : (
                            <Input
                                key={index}
                                label={field.label}
                                type={field.type}
                                placeholder={field.placeholder}
                                error={errors.name?.message}
                                {...register('name', validation.name)}
                            />
                        )
                    ))}
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <Controller
                        name="project"
                        control={control}
                        rules={validation.project}
                        render={({ field }) => (
                            <Dropdown
                                trigger={content.dropdown.label}
                                items={content.dropdown.options}
                                value={field.value}
                                onChange={field.onChange}
                                error={errors.project?.message}
                            />
                        )}
                    />
                    <Button type="submit" variant="primary" disabled={status === 'sending'}>
                        {status === 'sending' ? content.status.sending : content.buttonText}
                    </Button>
                </div>
                <Checkbox
                    label={content.checkbox}
                    error={errors.terms?.message}
                    {...register('terms', validation.terms)}
                />

                {status === 'success' && (
                    <p className="text-green-600 text-sm font-secondary text-center">
                        {content.status.success}
                    </p>
                )}
                {status === 'error' && (
                    <p className="text-red-500 text-sm font-secondary text-center">
                        {content.status.error}
                    </p>
                )}
            </div>
        </form>
    )
}
