import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sachin Das — Senior DevOps Engineer",
  description:
    "Personal website of Sachin Das — cloud, Kubernetes, CI/CD automation, GitOps, observability, and AI + DevOps.",
  openGraph: {
    title: "Sachin Das — Senior DevOps Engineer",
    description:
      "Building reliable cloud-native systems, one automation at a time.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
