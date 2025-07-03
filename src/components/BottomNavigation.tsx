import React from "react";
import { motion } from "framer-motion";
import { Home, Search, Grid, Bookmark, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavigationProps {
  activeTab?: "home" | "categories" | "search" | "saved" | "profile";
  onTabChange?: (
    tab: "home" | "categories" | "search" | "saved" | "profile",
  ) => void;
}

const BottomNavigation = ({
  activeTab = "home",
  onTabChange = () => {},
}: BottomNavigationProps) => {
  const tabs = [
    { id: "home", icon: Home, label: "Home" },
    { id: "categories", icon: Grid, label: "Categories" },
    { id: "search", icon: Search, label: "Search" },
    { id: "saved", icon: Bookmark, label: "Saved" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 h-20 px-4 flex items-center justify-between z-50">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            className={cn(
              "flex flex-col items-center justify-center w-16 h-16 relative",
              "transition-colors duration-200",
            )}
            onClick={() => onTabChange(tab.id as any)}
            aria-label={tab.label}
          >
            <Icon
              className={cn(
                "w-6 h-6 mb-1",
                isActive ? "text-green-500" : "text-gray-400",
              )}
            />
            <span
              className={cn(
                "text-xs",
                isActive ? "text-green-500" : "text-gray-400",
              )}
            >
              {tab.label}
            </span>

            {isActive && (
              <motion.div
                className="absolute -top-1 left-0 right-0 mx-auto w-1 h-1 bg-green-500 rounded-full"
                layoutId="activeIndicator"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
