import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/providers/ConvexProvider";
import "./globals.css";

export const metadata = {
  title: "Tars Chat App",
  description: "Real-time chat app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ConvexClientProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </ConvexClientProvider>
    </ClerkProvider>
  );
}