export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: number;
  image?: string;
  category: "salad" | "appetizer" | "main" | "addon" | "starter" | "dessert";
  isVegetarian?: boolean;
}

export interface MenuSectionProps {
  title: string;
  subtitle: string;
  items: MenuItem[];
  selectedIds: string[];
  onToggle: (id: string) => void;
  maxSelection?: number;
  type: "single" | "multi";
}

export interface OrderState {
  salad: string | null;
  appetizers: string[];
  mains: string[];
  addons: string[];
}
