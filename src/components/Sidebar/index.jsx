import Image from "next/image";
import Link from "next/link";

import MenuList from "../MenuList";
import Button from "../Button";

export default function Sidebar() {
  return (
    <div className="flex h-screen flex-col bg-gray-dark pt-10">
      <div className="pl-8">
        <div className="flex flex-col">
          <Link href="/home">
            <Image
              priority
              src="/images/pactto-logo.svg"
              height={43}
              width={140}
              className="h-1/3 w-2/3"
              alt="Pactto logo icon"
            />
          </Link>
          <p className="mt-4 text-sm uppercase text-[#545454]">
            Your Pactto Profile
          </p>
        </div>
        <div className="mb-8 mt-10 flex w-full items-center gap-3">
          <Image
            src="/images/avatar-placeholder.png"
            height={40}
            width={40}
            alt="User avatar"
            className="w-auto rounded-full"
          />
          <div className="gap-.5 flex w-full flex-col text-[#CBCBCB]">
            <p className="text-[8px] font-bold uppercase">
              Trial: 12 days left
            </p>
            <div className="flex items-center gap-3">
              <div className="rounded-sm bg-yellow p-1 text-center text-xs uppercase text-black">
                Pactto Pro
              </div>
              <p className="text-end text-xs font-medium underline">upgrade</p>
            </div>
          </div>
        </div>
        <div className="font-medium text-gray-light">
          <p className="text-xl">Evandro Costa</p>
          <p className="text-sm text-gray">Pactto member since 2024</p>
        </div>
      </div>
      <MenuList />
      <div className="mt-10 flex w-full items-center justify-center">
        <Button label={"Logout"} background={"bg-gray"} />
      </div>
    </div>
  );
}
