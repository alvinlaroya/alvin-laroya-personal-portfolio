export const useEmailJs = () => {
    const config = useRuntimeConfig();

    const send = async (payload: { name: string; email: string; subject: string; message: string }) => {
        await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            body: JSON.stringify({
                service_id: config.public.emailJs.serviceId,
                template_id: config.public.emailJs.templateId,
                user_id: config.public.emailJs.userId,
                template_params: {
                    'from_name': payload.name,
                    'from_email': payload.email,
                    'subject': payload.subject,
                    'message': payload.message
                }
            }),
            headers: {
                'Content-Type': 'application/json'  // Fixed: proper header format
            }
        });
    }

    return {
        send
    }
}
