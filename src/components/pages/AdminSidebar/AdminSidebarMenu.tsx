"use client";

import {
  IconAlignBoxLeftTop,
  IconChartDotsFilled,
  IconChevronsLeft,
  IconFiles,
  IconUserFilled,
} from "@tabler/icons-react";
import { SidebarItem, SidebarItemProps } from "../../common/Sidebar";
import { usePathname } from "next/navigation";

export function AdminSidebarMenu() {
  const pathname = usePathname();

  function isNavbarActive(href: string | undefined): boolean {
    if (href === "/") return false;
    return href ? pathname?.startsWith(href) : false;
  }

  const isActive: { [key: string]: boolean } = {};
  AdminSidebarMenuList.map((item) => {
    isActive[item.label] = isNavbarActive(item.href as string);
    item.children?.map((child) => {
      if (isNavbarActive(child.href as string)) {
        isActive[child.label] = true;
        isActive[item.label] = true;
      } else {
        isActive[child.label] = false;
      }
      return null;
    });
    return null;
  });

  return (
    <section>
      {AdminSidebarMenuList.map((item, index) => (
        <SidebarItem
          key={index}
          label={item.label}
          href={item.href}
          icon={item.icon}
          active={isActive[item.label]}
        >
          {item.children &&
            item.children.map((child, index) => (
              <SidebarItem
                key={index}
                href={child.href}
                label={child.label}
                active={isActive[child.label]}
              />
            ))}
        </SidebarItem>
      ))}
    </section>
  );
}

interface ListProps extends Omit<SidebarItemProps, "active" | "children"> {
  children?: ListProps[];
}

const AdminSidebarMenuList: ListProps[] = [
  {
    label: "메인으로",
    icon: <IconChevronsLeft size="24" />,
    href: "/",
  },
  {
    label: "가입 신청 관리",
    icon: <IconUserFilled size="24" />,
    href: "/admin/applications",
  },
  {
    label: "게시판 관리",
    icon: <IconAlignBoxLeftTop size="24" />,
    children: [
      { label: "과제 제안", href: "/admin/proposals" },
      { label: "프로젝트 문의", href: "/admin/inquiries" },
      { label: "공지사항", href: "/admin/notices" },
      { label: "이벤트 공지사항", href: "/admin/event-notices" },
    ],
  },
  {
    label: "프로젝트 관리",
    icon: <IconFiles size="24" />,
    children: [
      { label: "프로젝트 조회 및 수정", href: "/admin/projects" },
      { label: "프로젝트 등록", href: "/admin/project-create" },
    ],
  },
  {
    label: "컨텐츠 관리",
    icon: <IconFiles size="24" />,
    children: [
      { label: "대담 영상 관리", href: "/admin/talks" },
      { label: "잡페어 영상 관리", href: "/admin/jobfair" },
    ],
  },
  {
    label: "접속 통계 관리",
    icon: <IconChartDotsFilled size="24" />,
    children: [
      { label: "접속 통계", href: "/admin/accesses" },
      { label: "유입 경로 분석", href: "/admin/funnels" },
    ],
  },
];
