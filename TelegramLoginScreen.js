import React from 'react';
import { WebView } from 'react-native-webview';

const TelegramLoginScreen = () => {
  const webViewStyle = { marginTop: 20 };
  const embedCode = `
    <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="Rjaka_prikol_bot" data-size="large" data-auth-url="https://github.com/" data-request-access="write"></script>
  `;

  return (
    <WebView
      style={webViewStyle}
      source={{ html: embedCode }}
    />
  );
};

export default TelegramLoginScreen;
