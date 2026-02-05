import { LucideIcon } from "lucide-react";

export function Button({ text, icon: Icon }: { text: string; icon: LucideIcon }) {
  return (
    <button className="flex items-center gap-2 px-3 py-2 bg-sky-600 text-white text-xs rounded-xl hover:cursor-pointer">
      {text}
      <Icon size={20} />
    </button>
  );
}