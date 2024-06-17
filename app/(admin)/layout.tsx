import AdminSidebar from "@/components/UI/Admin/Sidebar/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <AdminSidebar />
      {children}
    </div>
  );
}
