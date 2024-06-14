import emailjs from "@emailjs/browser"

export function sendEmail(formData) {
  emailjs
    .send("service_if6mny5", "template_2qmtqmk", formData, "FIqdnKSB_EFOozCjN")
    .then((res) => {
      console.log("Email successfully sent!");
    })
    .catch((err) => {
      console.error("Failed to send email:", err);
    });
}
