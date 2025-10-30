// Show or hide School/Course field based on category
const categorySelect = document.getElementById("category");
const schoolGroup = document.getElementById("schoolGroup");

categorySelect.addEventListener("change", () => {
  if (categorySelect.value === "Training") {
    schoolGroup.style.display = "block";
  } else {
    schoolGroup.style.display = "none";
  }
});

// Handle form submission
const form = document.getElementById("contactForm");
const statusMessage = document.getElementById("statusMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  statusMessage.textContent = "Sending message...";
  statusMessage.style.color = "orange";

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xjkpgwwl", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      statusMessage.textContent =
        "Message sent successfully. We will get back to you shortly!";
      statusMessage.style.color = "green";
      form.reset();
      schoolGroup.style.display = "none";
    } else {
      statusMessage.textContent = "Failed to send message. Please try again.";
      statusMessage.style.color = "red";
    }
  } catch (error) {
    statusMessage.textContent = "Error occurred. Please check your network.";
    statusMessage.style.color = "red";
  }
});
