import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Kuch Theek Ho Jae",
    description: "Get in touch for orders, party bookings, or inquiries. Call or WhatsApp us for the best Golgappas in Karachi.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
