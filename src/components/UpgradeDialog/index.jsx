"use client";

import { useState } from "react";

import { subscriptionsData } from "@/lib/subscriptionData";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import CheckIcon from "@mui/icons-material/Check";
import Button from "../Button";

export default function UpdgradeDialog({ button, label, children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClose() {
    setIsModalOpen(false);
  }

  function handleOpen() {
    setIsModalOpen(true);
  }

  return (
    <>
      {button ? (
        <Button
          type={"button"}
          background={"bg-gray"}
          label={label}
          onClick={handleOpen}
        />
      ) : (
        <button onClick={handleOpen}>{children}</button>
      )}
      <Dialog
        as="div"
        open={isModalOpen}
        onClose={handleClose}
        className="relative z-50 transition duration-300 ease-out data-[closed]:opacity-0">
        <DialogBackdrop className="fixed inset-0 bg-black/75" />
        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <DialogPanel className="max-w-xl space-y-4 rounded-md bg-gray-dark p-6">
            <DialogTitle className="text-xl font-bold">Upgrade</DialogTitle>
            <Description className="text-sm font-medium text-gray">
              By subscribing to the Pactto Pro plan for $9/month, you will be
              able to:
            </Description>
            <ul className="text-sm font-medium leading-loose text-gray">
              {subscriptionsData.map((data) => (
                <li className="flex items-center gap-3" key={data.id}>
                  <CheckIcon className="h-5 w-5 text-yellow" />
                  {data.text}
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <button
                className="rounded-md p-3 text-base font-medium text-gray hover:bg-gray/10"
                onClick={handleClose}>
                Cancel
              </button>
              <button
                className="rounded-md p-3 text-base font-bold text-yellow hover:bg-gray/10"
                onClick={handleClose}>
                Subscribe
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
