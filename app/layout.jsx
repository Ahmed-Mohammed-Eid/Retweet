// app/Layout.jsx
import './globalStyle.scss';
import Script from "next/script";

export default function Layout({children}) {
    return (
        // Minimal layout structure
        <html>
        <body>
        {children}
        <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
        </body>
        </html>
    );
}
