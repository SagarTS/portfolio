// EmailJS Configuration
// You need to sign up at https://www.emailjs.com/ and get these values
// 1. Create an account and add your email service (Gmail, Outlook, etc.)
// 2. Create an email template
// 3. Get your Public Key, Service ID, and Template ID

export const emailjsConfig = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id_here',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id_here',
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key_here',
    recipientEmail: 'sagartshrestha@gmail.com'
}

// For development/testing, you can use these placeholder values
// Make sure to replace them with your actual EmailJS credentials
export const isEmailConfigured = () => {
    return emailjsConfig.serviceId !== 'your_service_id_here' &&
        emailjsConfig.templateId !== 'your_template_id_here' &&
        emailjsConfig.publicKey !== 'your_public_key_here'
}
