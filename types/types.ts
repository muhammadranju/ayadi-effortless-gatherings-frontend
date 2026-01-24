import { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  icon: LucideIcon;
  href: string;
  isActive?: boolean;
}

export interface StatCardProps {
  title: string;
  value: string;
  trend?: string;
  trendPositive?: boolean;
  subtitle?: string;
  isDark?: boolean;
  accentColor?: string; // Hex code for the left border
  actionText?: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
}

export interface Order {
  id: string;
  customerName: string;
  isVip: boolean;
  status: "CONFIRMED" | "IN PROGRESS" | "COMPLETED";
  date: string;
  time: string;
  menu: string;
  guests: number;
  amount: string;
}

export interface MenuPackage {
  _id: string;
  platterName: string;
  platterNameArabic: string;
  description: string;
  descriptionArabic: string;
  image: string;
  items: string[];
  itemsArabic: string[];
  price: number;
  person: number;
  isAvailable: boolean;
  status: "Available" | "Unavailable";
}

export interface MenuCategory {
  id: string;
  name: string;
  type: string;
  image: string;
  nameArabic: string;
}

export interface MenuItem {
  id: string;
  name: string;

  platterName: string;
  platterNameArabic: string;
  description: string;
  descriptionArabic: string;
  image: string;
  price: number;
  isAvailable: boolean;
  person: number;
}

export interface CalendarDay {
  date: number;
  status?: "confirmed" | "in-progress" | null;
  isSelected?: boolean;
  isCurrentMonth?: boolean;
}

export interface TimeSlot {
  id: string;
  time: string;
  isSelected?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
