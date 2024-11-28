document.getElementById("send").addEventListener("click", sendMessage);

function sendMessage() {
  let message = document.getElementById("message").value;
  if (message.trim() !== "") {
    let output = document.getElementById("output");
    output.innerHTML += `<p>${message}</p>`;

    // Save message to local storage
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(message);
    localStorage.setItem("messages", JSON.stringify(messages));

    document.getElementById("message").value = "";

    scrollToBottom();
  }
}

function loadMessages() {
  let messages = JSON.parse(localStorage.getItem("messages")) || [];
  let output = document.getElementById("output");
  messages.forEach((message) => {
    output.innerHTML += `<p>${message}</p>`;
  });
}

function scrollToBottom() {
  let chatWindow = document.getElementById("chat-window");
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function clearMessages() {
  localStorage.removeItem("messages"); // Clear messages from local storage
  document.getElementById("output").innerHTML = ""; // Clear output on the page
}
// Load messages when the page loads
window.onload = loadMessages;
