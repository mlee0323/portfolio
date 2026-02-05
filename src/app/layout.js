import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Junior DevOps Engineer - AWS, Docker, Kubernetes",
  icons: {
    icon: "/Lee-light.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="bg-aws-navy text-white antialiased">
        {children}
      </body>
    </html>
  );
}
