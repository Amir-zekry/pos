'use client'

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { startNewDay } from "../lib/actions"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"

function StartNewDay() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <SidebarMenuItem>
                    <SidebarMenuButton
                        asChild
                        className="cursor-pointer"
                    >
                        <span>Start new day</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => startNewDay()}>
                        Yes
                    </AlertDialogAction>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default StartNewDay