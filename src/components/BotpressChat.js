import { useEffect } from "react";

const BotpressChat = () => {
  useEffect(() => {
    // Проверка, чтобы не дублировать скрипты
    const injectScript = document.querySelector('script[src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"]');
    if (!injectScript) {
      const script = document.createElement("script");
      script.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.botpress) {
          window.botpress.init({
            botId: "cb1336c0-89fb-462e-9d97-a3360d2cee69",
            configuration: {
              botName: "MY-CV-bot",
              botAvatar: "https://files.bpcontent.cloud/2024/11/25/09/20241125094227-W9FFJQZJ.png",
              botDescription: "Ask any info about me",
              color: "#333f51",
              variant: "solid",
              themeMode: "dark",
              fontFamily: "inter",
              radius: 1,
              additionalStylesheetUrl: "https://files.bpcontent.cloud/2024/11/27/15/20241127153959-DVL8J0J2.css"
            },
            clientId: "89f9fb7b-92fd-4ae3-a6c3-820276793b9f"
          });
        } else {
          console.error("Botpress WebChat не загружен. Проверьте inject.js.");
        }
      };

      script.onerror = () => console.error("Не удалось загрузить inject.js.");
    }

    // Удаляем скрипт при размонтировании
    return () => {
      const existingScript = document.querySelector('script[src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null; // Чат появится автоматически
};

export default BotpressChat;
