import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useDialogContext } from "@/context/DialogProvider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Database,
  Info,
  Laptop,
  Moon,
  Settings,
  Sliders,
  Sun,
  User,
} from "lucide-react";
import { Button } from "../ui/button";

export default function SettingsDialog() {
  const { openSettingsDialog, setOpenSettingsDialog } = useDialogContext();
  return (
    <Dialog
      open={openSettingsDialog}
      onOpenChange={(open) => setOpenSettingsDialog(open)}
    >
      <DialogContent className={"max-w-fit!"}>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription className={"text-xs"}>
            Customize Hackachat appearance, models, and personal instruction
          </DialogDescription>
        </DialogHeader>
        <Tabs>
          <TabsList>
            <TabsTrigger value={"general"}>
              <Settings /> General
            </TabsTrigger>
            <TabsTrigger value={"model"}>
              <Sliders /> Model
            </TabsTrigger>
            <TabsTrigger value={"user"}>
              <User /> Personal
            </TabsTrigger>
            <TabsTrigger value={"data"}>
              <Database /> Data
            </TabsTrigger>
            <TabsTrigger value={"about"}>
              <Info /> About
            </TabsTrigger>
          </TabsList>
          <TabsContent value={"general"} className={"space-y-5 py-5"}>
            <div>
              <p>INTERFACE THEME</p>
              <div className="flex justify-between gap-1 w-full">
                <Button
                  className={"flex-col w-[33%] h-fit p-5"}
                  variant={"default"}
                >
                  <Sun /> Light
                </Button>
                <Button
                  className={"flex-col  w-[33%] h-fit p-5"}
                  variant={"outline"}
                >
                  <Moon /> Dark
                </Button>
                <Button
                  className={"flex-col  w-[33%] h-fit p-5"}
                  variant={"outline"}
                >
                  <Laptop /> System
                </Button>
              </div>
            </div>
            <div>
              <p>TEXT SIZE</p>
              <div className="flex justify-between gap-1 w-full">
                <Button variant={"outline"} className={" w-[33%]"}>
                  SMALL
                </Button>
                <Button variant={"default"} className={" w-[33%]"}>
                  MEDIUM
                </Button>
                <Button variant={"outline"} className={" w-[33%]"}>
                  LARGE
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
