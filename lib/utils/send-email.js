export function sendEmail(formData, setIsFormSubmitted) {
  const apiEndpoint = "/api/sendEmail";
  debugger;
  console.log(JSON.stringify(Object.fromEntries(formData)));
  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        console.log("Email sent successfully");
        setIsFormSubmitted(true);
      } else {
        console.error("Error sending email:", data.error);
      }
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
}
