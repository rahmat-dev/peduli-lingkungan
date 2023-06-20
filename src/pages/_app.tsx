import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";

import { api } from "~/utils/api";

import "react-toastify/dist/ReactToastify.css";
import "~/styles/globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className={`min-h-screen w-full ${poppins.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
      <ToastContainer
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        autoClose={3000}
      />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
