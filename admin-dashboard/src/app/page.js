import Image from "next/image";
import AdminLayout from "@/components/layouts/AdminLayouts/Adminlayouts";
import Dashboard from "@/components/dashboardcomp/dashboard/dashboard";

export default function Home() {
  return (
<AdminLayout>
  <p className="text-xl xl:text-2xl">Dashboard</p>
  <div className=' py-4'>
    <Dashboard />
  </div>
</AdminLayout>
  );
}
