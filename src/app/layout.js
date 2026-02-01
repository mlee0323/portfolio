import "./globals.css";

export const metadata = {
  title: "이민석 | DevOps Engineer Portfolio",
  description: "Junior DevOps Engineer - AWS, Docker, Kubernetes",
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
