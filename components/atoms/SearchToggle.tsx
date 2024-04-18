import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import ComandSearch from "@/components/atoms/ComandSearch";

export default function SearchToggle() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Input
            type="search"
            placeholder="Cari...."
            className="placeholder:dark:text-[#696970] placeholder:text-gray-600"
          />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <ComandSearch />
        </DialogContent>
      </Dialog>
    </div>
  );
}
