/////////////////////////CHATBOT///////////////////////////////

window.watsonAssistantChatOptions = {
      integrationID: "7864fd24-2f41-48f2-b8ea-bc2454c8e1d4", // The ID of this integration.
      region: "eu-gb", // The region your integration is hosted in.
      serviceInstanceID: "828aa6a6-2cd1-4e81-9e6d-62a027fae9e0", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });
