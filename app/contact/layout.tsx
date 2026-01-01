import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Pani Puri Near Me in Karachi",
  description:
    "Looking for hygienic pani puri near you in Karachi? Contact Kuch Theek Ho Jae for orders, catering & live golgappa stalls.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
