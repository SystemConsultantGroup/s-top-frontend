import { Metadata } from "next";
import classes from "./layout.module.css";
import { AdminSidebar } from "@/components/pages/AdminSidebar";

export const metadata: Metadata = {
  title: "S-TOP 기술교류회 관리자",
  description: "S-TOP 기술교류회 관리자",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className={classes.container}>
      <AdminSidebar />
      <section className={classes.main}>{children}</section>
    </section>
  );
}
