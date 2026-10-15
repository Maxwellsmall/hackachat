"use client";
import React, { createContext, useContext, useState } from "react";

interface DialogContext {
  openSettingsDialog: boolean;
  setOpenSettingsDialog: (open: boolean) => void;
}

const DialogContext = createContext<DialogContext | null>(null);

export const useDialogContext = () => {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("DialogContext used outside  of scope");
  return ctx;
};

export default function DialogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openSettingsDialog, setOpenSettingsDialog] = useState(false);

  return (
    <DialogContext.Provider
      value={{ openSettingsDialog, setOpenSettingsDialog }}
    >
      {children}
    </DialogContext.Provider>
  );
}
