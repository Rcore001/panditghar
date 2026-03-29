import {
  Home, BookOpen, Flower2, Flame, Baby, Scissors, Origami, Flower, Star,
  Compass, Wheat, Ribbon, Globe, Waves, Swords, Library, CircleDot, Link,
  Target, Lamp, Scroll, Gem, Archive, Music, Moon, CandlestickChart, Zap,
  Sparkles, Droplets, Heart, Telescope, Bird, Hand,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Home,
  BookOpen,
  Flower2,
  Flame,
  Baby,
  Scissors,
  Origami,
  Flower,
  Star,
  Compass,
  Wheat,
  Ribbon,
  Globe,
  Waves,
  Swords,
  Library,
  CircleDot,
  Link,
  Target,
  Lamp,
  Scroll,
  Gem,
  Archive,
  Music,
  Moon,
  CandlestickChart,
  Zap,
  Sparkles,
  Droplets,
  Heart,
  Telescope,
  Bird,
  Hand,
};

export function ServiceIcon({
  name,
  className = 'w-8 h-8',
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICON_MAP[name];
  if (!Icon && import.meta.env.DEV) {
    console.warn(`[ServiceIcon] Unknown icon name: "${name}", falling back to Star`);
  }
  const Resolved = Icon ?? Star;
  return <Resolved className={className} />;
}
