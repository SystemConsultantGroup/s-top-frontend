"use client";

import { NavLink as SidebarItemElement } from "@mantine/core";
import Link, { LinkProps } from "next/link";
import { ReactNode, useState } from "react";
import classes from "./SidebarItem.module.css";

export interface SidebarItemProps {
  icon?: ReactNode;
  label: string;
  href?: LinkProps["href"];
  active?: boolean;
  children?: ReactNode;
}

export function SidebarItem({ icon, label, href = "", active, children }: SidebarItemProps) {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <SidebarItemElement
      classNames={{
        root: classes.root,
        label: icon ? classes.label : classes["label-noicon"],
        children: classes.children,
      }}
      component={Link}
      href={href}
      leftSection={icon}
      label={label}
      active={active}
      variant={opened ? "subtle" : "light"}
      onChange={setOpened}
    >
      {children}
    </SidebarItemElement>
  );
}
