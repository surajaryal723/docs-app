"use client"
import { cn } from "@/lib/utils";
import { Home, Info, LucideIcon, Settings } from "lucide-react";

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}

interface SectionProps{
    label:string,
    isActive?:boolean,
    onClick:()=>void,
    icon:LucideIcon

}

const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonProps) => {
  return (
    <button className={cn("text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80"
    )} onClick={onClick}>
      <Icon className="size-4" />
    </button>
  );
};

export const Toolbar = () => {

  const sections:SectionProps[] = [
    {
      label: "Home",
      isActive: true,
      onClick: () => console.log("Home clicked"),
      icon: Home,
    },
    {
      label: "Settings",
      isActive: false,
      onClick: () => console.log("Settings clicked"),
      icon: Settings,
    },
    {
      label: "Help",
      isActive: true,
      onClick: () => console.log("Help clicked"),
      icon: Info,
    },
  ];

  return (
    <div className="bg-[#f1f4f9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
      {sections.map((section,index)=><ToolbarButton icon={section.icon} onClick={section.onClick} isActive={section.isActive} key={index}/>)}
    </div>
  );
};
