import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Cloud Infrastructure, DevOps, and AI Portfolio - AWS, Kubernetes, Terraform",
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
