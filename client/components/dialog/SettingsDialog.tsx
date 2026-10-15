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
import { Kbd } from "../ui/kbd";
import { Switch } from "../ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useModelStore } from "@/stores/modelStore";
import { ModelResponseDto } from "@/lib/api";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "../ui/combobox";

export default function SettingsDialog() {
  const { openSettingsDialog, setOpenSettingsDialog } = useDialogContext();
  const { models, activeModel, setActiveModel } = useModelStore();
  return (
    <Dialog
      open={openSettingsDialog}
      onOpenChange={(open) => setOpenSettingsDialog(open)}
    >
      <DialogContent className={"max-w-fit!"}>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription className={"text-xs max-w-80"}>
            Customize Hackachat appearance, models, and personal instruction.
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
                  className={"flex-col w-[33%] h-fit p-3"}
                  variant={"default"}
                >
                  <Sun /> Light
                </Button>
                <Button
                  className={"flex-col  w-[33%] h-fit p-3"}
                  variant={"outline"}
                >
                  <Moon /> Dark
                </Button>
                <Button
                  className={"flex-col  w-[33%] h-fit p-3"}
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
            <div className="w-full border p-3 rounded-xl flex justify-between item-center gap-3">
              <div>
                <h6 className="text-sm font-semibold">Send message on Enter</h6>
                <p className="text-xs max-w-70">
                  When enabled, press enter to send and <Kbd>Shift</Kbd>{" "}
                  <Kbd>Enter</Kbd> for a new line.
                </p>
              </div>
              <Switch />
            </div>
          </TabsContent>
          <TabsContent value={"model"} className={"space-y-5 py-5"}>
            <div>
              <p>DEFAULT MODEL</p>

              <Combobox items={models.map((m) => m.name)}>
                <ComboboxInput placeholder="Select a model" />
                <ComboboxContent>
                  <ComboboxEmpty>No model found</ComboboxEmpty>
                  <ComboboxList>
                    {(item) => (
                      <ComboboxItem key={item} value={item}>
                        <span className="font-semibold">{item}</span>
                        <br />
                        <span>
                          {models.find((m) => m.name === item)!.canonical_slug}
                        </span>
                      </ComboboxItem>
                    )}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
