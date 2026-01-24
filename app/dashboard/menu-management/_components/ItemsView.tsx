import React from "react";
import Image from "next/image";
import { Edit2, Trash2, ArrowLeft } from "lucide-react";
import { MenuItem } from "@/types/types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ItemsViewProps {
  items: MenuItem[];
  onBack: () => void;
  onDelete: (id: string) => void;
  onEdit: (item: MenuItem) => void;
}

export const ItemsView: React.FC<ItemsViewProps> = ({
  items,
  onBack,
  onDelete,
  onEdit,
}) => {
  return (
    <>
      <div className="col-span-full">
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-emerald-900"
        >
          <ArrowLeft size={16} /> Back to Categories
        </button>
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md"
        >
          <div className="relative h-40 w-full overflow-hidden rounded-t-lg">
            <Image
              src={
                item.image.startsWith("http")
                  ? item.image
                  : `${process.env.NEXT_PUBLIC_BASE_SERVER_URL}${item.image}`
              }
              alt={item.name}
              fill
              className="object-cover"
            />
            <div className="absolute right-3 top-3 flex gap-2">
              <button
                onClick={() => onEdit(item)}
                className="rounded-full bg-white p-2 text-gray-600 shadow-md hover:text-emerald-900"
              >
                <Edit2 size={14} />
              </button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="rounded-full bg-white p-2 text-red-400 shadow-md hover:text-red-600">
                    <Trash2 size={14} />
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      the item &quot;{item.name}&quot;.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => onDelete(item.id)}
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
