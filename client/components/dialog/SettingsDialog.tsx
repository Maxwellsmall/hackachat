import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useDialogContext } from "@/context/DialogProvider";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export default function SettingsDialog() {
  const { openSettingsDialog, setOpenSettingsDialog } = useDialogContext();
  return (
    <Dialog
      open={openSettingsDialog}
      onOpenChange={(open) => setOpenSettingsDialog(open)}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Customize Hackachat appearance, models, and personal instruction
          </DialogDescription>
        </DialogHeader>
        <Tabs>
          <TabsList>
            <TabsTrigger value={"general"}>General</TabsTrigger>
          </TabsList>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
