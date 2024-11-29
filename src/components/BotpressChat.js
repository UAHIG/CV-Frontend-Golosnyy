
import { useEffect } from "react";

const BotpressChat = () => {
  useEffect(() => {
    // Подключение inject.js
    const injectScript = document.createElement("script");
    injectScript.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    injectScript.async = true;
    document.body.appendChild(injectScript);

    // Подключение кастомного скрипта (если он содержит вашу конфигурацию)
    const customScript = document.createElement("script");
    customScript.src = "https://files.bpcontent.cloud/2024/11/22/17/20241122172808-AI8GXOF7.js";
    customScript.async = true;
    document.body.appendChild(customScript);

    // После загрузки inject.js инициализируем бот
    injectScript.onload = () => {
      if (window.botpress) {
        window.botpress.init({
          botId: "cb1336c0-89fb-462e-9d97-a3360d2cee69", // Укажите ваш Bot ID
          hostUrl: "https://cdn.botpress.cloud/webchat/v2.2/inject.js", // Например, http://localhost:3000 или https://your-domain.com
          customStyle: {
            primaryColor: "#4caf50",
            backgroundColor: "#f5f5f5",
          },
          
          enableReset: true,
          showPoweredBy: false,
          showTimestamp: true,
          closeOnEscape: true,
          disableNotificationSound: false,
          showCloseButton: true,
        });
      } else {
        console.error("Botpress WebChat не загружен. Проверьте inject.js.");
      }
    };

    // Удаляем скрипты при размонтировании компонента
    return () => {
      document.body.removeChild(injectScript);
      document.body.removeChild(customScript);
    };
  }, []);

  return null; // Ничего не рендерим, чат появится сам
};

export default BotpressChat;


