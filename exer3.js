class EmailMessage {
  constructor(from, to, subject, message) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.message = message;
  }

  displayMessage() {
    alert(
      `From: ${this.from}\nTo: ${this.to}\nSubject: ${this.subject}\nMessage: ${this.message}`
    );
  }
}

function createEmailMessage() {
  const from = prompt("Enter sender's email:");
  const to = prompt("Enter recipient's email:");
  const subject = prompt("Enter email subject:");
  const message = prompt("Enter email message:");

  const email = new EmailMessage(from, to, subject, message);

  email.displayMessage();

  document.getElementById("fromInput").value = email.from;
  document.getElementById("toInput").value = email.to;
  document.getElementById("subjectInput").value = email.subject;
  document.getElementById("messageInput").value = email.message;
}
