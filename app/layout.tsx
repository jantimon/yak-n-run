export const metadata = {
  title: "Yak'n'run",
  description: "A yak running experience 🐮",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
