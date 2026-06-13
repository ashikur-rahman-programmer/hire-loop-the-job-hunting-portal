"use client";

import { useState } from "react";
import {
  LayoutSideContentLeft,
  Bell,
  Briefcase,
  Envelope,
  Gear,
  House,
  Magnifier,
  Person,
} from "@gravity-ui/icons";
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
} from "@heroui/react";
import Link from "next/link";

export function DashboardSideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: House, href: "/dashboard/recruiter", label: "Home" },
    { icon: Magnifier, href: "/dashboard/recruiter/jobs", label: "Jobs" },
    { icon: Bell, href: "/dashboard/recruiter/jobs/new", label: "Post A Job" },
    {
      icon: Briefcase,
      href: "/dashboard/recruiter/company",
      label: "Company Profile",
    },
    { icon: Envelope, href: "/messages", label: "Messages" },
    { icon: Person, href: "/profile", label: "Profile" },
    { icon: Gear, href: "/settings", label: "Settings" },
  ];

  const navContent = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <Link
          key={item.label}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
          href={item.href}
          onClick={() => setIsOpen(false)} // মোবাইল মেনুতে ক্লিক করলে বন্ধ হয়ে যাবে
        >
          <item.icon className="size-5 text-zinc-500" />
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-zinc-800 bg-[#0a0a0a] p-4 lg:block min-h-screen">
        {navContent}
      </aside>

      {/* Mobile Drawer Trigger */}
      <div className="lg:hidden p-4">
        <Button
          className="bg-zinc-800 text-white"
          variant="flat"
          onClick={() => setIsOpen(true)}
        >
          <LayoutSideContentLeft />
          Menu
        </Button>
      </div>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} onOpenChange={setIsOpen} placement="left">
        <DrawerContent className="bg-[#0a0a0a] border-r border-zinc-800 text-white">
          <DrawerHeader className="border-b border-zinc-800">
            Navigation
          </DrawerHeader>
          <DrawerBody className="p-4">{navContent}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
