/* eslint-disable @next/next/no-img-element */
import { FC, useContext, useState } from "react";
import Link from "next/link";
import { NFTCardType } from "@/types/types";
import { CgCheck } from "react-icons/cg";
import { BiPlus } from "react-icons/bi";
import { VscScreenFull } from "react-icons/vsc";
import { ModalContext } from "@/contexts/ModalContext";

const NFTCard: FC<NFTCardType> = ({
  imgUrl,
  tokenId,
  mintAddr,
  collectionName,
}) => {
  const { openNFTDetailModal } = useContext(ModalContext);
  const [seleted, setSeleted] = useState(false);
  return (
    <>
      <div
        className={`flex items-start justify-start flex-col gap-2 bg-[#0f4223b9] min-h-[250px] rounded-md pb-2 border ${
          seleted ? "border-yellow-500" : "border-customborder"
        }`}
      >
        <div
          className="overflow-hidden rounded-t-md aspect-square cursor-pointer group relative"
          onClick={() => setSeleted(!seleted)}
        >
          <img
            src={imgUrl}
            alt="NFT Image"
            className="rounded-t-md hover:scale-105 duration-300 w-full"
          />
          <div
            className={`absolute top-2 right-2 p-1 rounded-full ${
              seleted ? "bg-yellow-600" : "bg-gray-800 bg-opacity-80"
            } group-hover:block ${seleted ? "block" : "hidden"}`}
          >
            {seleted ? (
              <CgCheck color="white" size={18} />
            ) : (
              <BiPlus color="white" size={17} />
            )}
          </div>
        </div>
        <div className="w-full flex items-center justify-between pr-2">
          <p className="text-white text-left px-2 text-lg">
            {collectionName} #{tokenId}
          </p>
          <span
            className="cursor-pointer rounded-md text-gray-300 hover:text-white duration-300"
            onClick={() => openNFTDetailModal(mintAddr, mintAddr)}
          >
            <VscScreenFull size={22} />
          </span>
        </div>
      </div>
    </>
  );
};

export default NFTCard;
