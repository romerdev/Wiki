export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="my-7 lg:my-12">{children}</div>;
}
