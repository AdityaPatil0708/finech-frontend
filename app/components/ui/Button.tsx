import { LucideIcon } from "lucide-react";

export function Button({ text, icon: Icon }: { text: string; icon: LucideIcon }) {
  return (
    <button className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-2 md:py-3 bg-[#0B71DA] text-white text-xs md:text-sm rounded-lg md:rounded-xl hover:cursor-pointer hover:bg-[#0960b8] transition-colors">
      <span className="whitespace-nowrap">{text}</span>
      <Icon size={16} className="md:w-5 md:h-5" />
    </button>
  );
}