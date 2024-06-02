import "./globals.css";

export const metadata = {
    title: "Media Manager",
    description: "Pick, sort, and assign metadata to pictures and videos",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-zinc-900">
                {children}
            </body>
        </html>
    );
}
