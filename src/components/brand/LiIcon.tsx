import type { LucideIcon } from "lucide-react";
import {
  AudioLines,
  BarChart3,
  BookOpen,
  Calculator,
  CalendarDays,
  ClipboardCheck,
  FilePlus,
  Globe,
  Atom,
  FlaskConical,
  GraduationCap,
  Headphones,
  ImagePlus,
  Layers,
  Mic,
  MessageCircle,
  Microscope,
  Sparkles,
  Star,
  Trophy,
  User,
  Users,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  message: MessageCircle,
  microscope: Microscope,
  layers: Layers,
  chart: BarChart3,
  audio: AudioLines,
  clipboard: ClipboardCheck,
  star: Star,
  "file-plus": FilePlus,
  image: ImagePlus,
  calendar: CalendarDays,
  trophy: Trophy,
  headphones: Headphones,
  mic: Mic,
  user: User,
  users: Users,
  chalkboard: GraduationCap,
  calculator: Calculator,
  book: BookOpen,
  globe: Globe,
  atom: Atom,
  flask: FlaskConical,
};

export function LiIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name] ?? Sparkles;
  return <Icon className={className} strokeWidth={1.75} />;
}
