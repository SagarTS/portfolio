export const emailjsConfig = {
    serviceId:
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id_here",
    templateId:
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id_here",
    publicKey:
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key_here",
    recipientEmail: "sagartshrestha@gmail.com",
};

// For development/testing
export const isEmailConfigured = () => {
    return (
        emailjsConfig.serviceId !== "your_service_id_here" &&
        emailjsConfig.templateId !== "your_template_id_here" &&
        emailjsConfig.publicKey !== "your_public_key_here"
    );
};
