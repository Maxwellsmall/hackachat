"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogContent,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function SettingsModal() {
  return (
  <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Settings</AlertDialogTitle>
          <AlertDialogDescription>
            Customize Hackchat appearance, models, and personal instructions
          </AlertDialogDescription>
          <div className="">
            <div className="w-full grid grid-rows-3">
             <p>General</p>
             <p>Model</p>
             <p>Personal</p>
             <p>Data</p>
             <p>About</p>
             <p>General</p>
             <p>Model</p>
             <p>Personal</p>
             <p>Data</p>
             <p>About</p>
            </div>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Don&apos;t allow</AlertDialogCancel>
          <AlertDialogAction>Allow</AlertDialogAction>
        </AlertDialogFooter>
   </AlertDialogContent>
  )
}
