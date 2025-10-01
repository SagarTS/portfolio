import emailjs from "@emailjs/browser";
import { emailjsConfig, isEmailConfigured } from "./emailjs-config";

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const sendContactEmail = async (
    formData: ContactFormData
): Promise<{ success: boolean; message: string }> => {
    try {
        // Check if EmailJS is properly configured
        if (!isEmailConfigured()) {
            console.warn("EmailJS not configured. Using fallback method.");
            return {
                success: false,
                message:
                    "Email service not configured. Please contact me directly at sagartshrestha@gmail.com",
            };
        }

        // Initialize EmailJS
        emailjs.init(emailjsConfig.publicKey);

        const currentTime = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Kathmandu",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        });

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: emailjsConfig.recipientEmail,
            reply_to: formData.email,
            timestamp: currentTime,
            date: new Date().toLocaleDateString("en-US", {
                timeZone: "Asia/Kathmandu",
            }),
            time: new Date().toLocaleTimeString("en-US", {
                timeZone: "Asia/Kathmandu",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            }),
        };

        // Send email
        const response = await emailjs.send(
            emailjsConfig.serviceId,
            emailjsConfig.templateId,
            templateParams
        );

        if (response.status === 200) {
            return {
                success: true,
                message:
                    "Message sent successfully! I'll get back to you soon.",
            };
        } else {
            throw new Error(`EmailJS returned status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            success: false,
            message:
                "Failed to send message. Please try again or contact me directly at sagartshrestha@gmail.com",
        };
    }
};

// Fallback method using mailto link
export const createMailtoLink = (formData: ContactFormData): string => {
    const currentTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kathmandu",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nSent at: ${currentTime}\n\nMessage:\n${formData.message}`
    );
    return `mailto:${emailjsConfig.recipientEmail}?subject=${subject}&body=${body}`;
};
