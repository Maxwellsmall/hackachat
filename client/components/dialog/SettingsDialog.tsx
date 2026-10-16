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
  ArrowUpRightFromSquare,
  Code,
  Database,
  Dot,
  Download,
  Info,
  Laptop,
  Moon,
  Settings,
  Sliders as SlidersIcon,
  Sun,
  Trash,
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
import { Slider } from "../ui/slider";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

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
              <SlidersIcon /> Model
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
            <div className="space-y-2">
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
            <div className="space-y-2">
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
            <div className="space-y-2">
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
              <p className="text-xs">
                New chats will use this model. Can be changed per-chat.
              </p>
            </div>
            <div className="space-y-2">
              <p>TEMPERATURE/CREATIVITY</p>
              <Slider defaultValue={50} min={0} max={100} />
              <div className="flex items-center justify-between w-full">
                <p className="text-xs">0.1 (Focused)</p>
                <p className="text-xs">0.7 (Balanced)</p>
                <p className="text-xs">1.3 (Creative)</p>
              </div>
            </div>
            <div className="space-y-2">
              <p>RESPONSE DETAIL LEVEL</p>

              <div className="flex   justify-between gap-1 w-full">
                <Button
                  className={"flex-col items-start w-[33%] h-fit p-3"}
                  variant={"default"}
                >
                  <span>Short</span>
                  <span className="text-xs">Punchy and brief</span>
                </Button>
                <Button
                  className={"flex-col items-start w-[33%] h-fit p-3"}
                  variant={"outline"}
                >
                  <span>Balanced</span>
                  <span className="text-xs">Standard depth</span>
                </Button>
                <Button
                  className={"flex-col items-start w-[33%] h-fit p-3"}
                  variant={"outline"}
                >
                  <span>Detailed</span>
                  <span className="text-xs">Step-by-step</span>
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value={"user"} className={"space-y-5 py-5"}>
            <div className="space-y-2">
              <p>WHAT SHOULD HACKACHAT CALL YOU?</p>
              <Input
                className="w-full"
                placeholder="e.g Abdulazeez Adewale, or leave blank"
              />
              <p className="text-xs">
                Hackchat will address you by this name when appropriate.
              </p>
            </div>
            <div className="space-y-2">
              <p>CUSTOM INSTRUCTION</p>
              <Textarea
                className="w-110"
                placeholder="e.g I'm am a 18 year old teenager from Lagos, i build software projects, and i'm currently learning hardware."
              ></Textarea>
              <p className="text-xs max-w-100">
                Included in every conversation to guide tone, explanations, and
                details
              </p>
            </div>
          </TabsContent>
          <TabsContent value={"data"} className={"space-y-5 py-5"}>
            <div className="w-full border p-3 rounded-xl ">
              <div className="space-y-2">
                <h6 className="text-sm font-semibold">
                  EXPORT LOCAL CONVERSATIONS
                </h6>
                <p className="text-xs max-w-100">
                  Download all you chat as a JSON file, your chat still remains
                  on your device, this serves as a backup whenever you want
                </p>

                <Button variant={"outline"}>
                  <Download /> Export all Chats (JSON)
                </Button>
              </div>
            </div>
            <div className="w-full bg-destructive/10 border p-3 rounded-xl ">
              <div className="space-y-2">
                <h6 className="text-sm text-destructive font-semibold">
                  CLEAR ALL HISTORY
                </h6>
                <p className="text-xs max-w-100">
                  Permanently delete all stored chats from this browser&apos;s
                  IndexDB
                </p>

                <Button
                  variant={"destructive"}
                  className={"bg-red-500 text-white hover:bg-red-400"}
                >
                  <Trash /> Clear Chats
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value={"about"} className={`space-y-5 py-5`}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Hackachat</h3>
                <div className="flex items-center gap-x-2 text-xs">
                  <p>v1.0.0.beta</p> <Dot size={12} />{" "}
                  <p>Build by Hack clubbers</p>
                </div>
              </div>
              <Button size={"sm"} variant={"link"}>
                Source <ArrowUpRightFromSquare />
              </Button>
            </div>
            <hr className="my-4" />
            <div>
              <div className="flex gap-3">
                <Code size={16} />{" "}
                <p className="max-w-90 text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  sed cumque consequatur delectus accusamus repellendus
                  aspernatur magni repudiandae asperiores nulla! Hic laudantium,
                  esse sapiente deserunt ducimus iste fuga quia earum?
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
