import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Image from "next/image";
import Script from "next/script";
import Head from "next/head";


export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {

  const navStyles = {
    "--bs-nav-link-color": "var(--bs-white)",
    "--bs-nav-pills-link-active-color": "var(--bs-primary)",
    "--bs-nav-pills-link-active-bg": "var(--bs-white)"
  } as React.CSSProperties;
  return (
    <html lang="en">
      <Head>
        <title>My page title</title>
      </Head>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></Script>
      <body>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="container">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
              style={{margin: "10px"}}
            />

            <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={navStyles}>
              <li className="nav-item" role="presentation">
                <button className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">
                  アラート一覧
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">
                  アラート毎の傾向
                  Profile
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">
                  コンポーネント毎の傾向
                </button>
              </li>
            </ul>
          </main>
          {children}
        </div>
      </body>
    </html>
  );
}
