import emailjs from "@emailjs/browser";

interface FormData {
  [key: string]: any;
}

export function sendEmail(formData: FormData): void {
  emailjs
    .send("service_if6mny5", "template_2qmtqmk", formData, "FIqdnKSB_EFOozCjN")
    .then((res) => {
      console.log("Email successfully sent!");
    })
    .catch((err) => {
      console.error("Failed to send email:", err);
    });
}
