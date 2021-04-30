// Replace `YOUR_TOKEN` with the token you want to login with, without removing the quotation marks
document.body.appendChild(document.createElement("iframe")).contentWindow.localStorage.token=`"YOUR_TOKEN"`;
location.reload();