'use client'
import React, { ReactNode, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { toast } from "./ui/use-toast";
interface DialogProps {
  OpenButton: ReactNode
  onConfirm: () => Promise<any>;
  loading: boolean;
  data?: any;
  message?: string;
  description?: string;
  toastMessage?: string;
  toastDescription?: string;
}
import { mutate } from "swr"

export function ConfirmDialog({
  onConfirm,
  loading,
  OpenButton,
  data,
  message = 'Are you sure?',
  description = "Your action cannot be undone",
  toastMessage = 'Success',
  toastDescription = 'Your action was completed',
}: DialogProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(prevState => !prevState);

  const handleConfirm = () => {
    onConfirm()
      .finally(() => {
        toast({
          title: toastMessage,
          description: toastDescription,
        })
        handleOpen()
      });
  }

  return (
    <>
      {
        <button onClick={handleOpen}>
          {OpenButton}
        </button>
      }
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{message}</DialogHeader>
        <DialogBody>
          {description}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="filled" color="green" onClick={handleConfirm} disabled={loading} loading={loading}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}