"use client"

import { useGroupChatOnline } from "@/hooks/groups"
import { useSideBar } from "@/hooks/navigation"
import { cn } from "@/lib/utils"
import React from "react"
import { DropDown } from "../drop-down"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CarotSort } from "@/icons"
import { Group } from "lucide-react"

type Props = {
    groupid: string
    userid: string
    mobile?: boolean
}

export interface IGroupInfo {
    status: number
    group:
        | {
              id: string
              name: string
              category: string
              thumbnail: string | null
              description: string | null
              gallery: string[]
              jsonDescription: string | null
              htmlDescription: string | null
              privacy: boolean
              active: boolean
              createdAt: Date
              userId: string
              icon: string
          }
        | undefined
}

export interface IChannels {
    id: string
    name: string
    icon: string
    createdAt: Date
    groupId: string | null
}

export interface IGroups {
    status: number
    groups:
        | {
              icon: string | null
              id: string
              name: string
          }[]
        | undefined
}

const SideBar = ({ userid, groupid, mobile }: Props) => {
    const { groupInfo, groups, mutate, variables, isPending, channels } =
        useSideBar(groupid)

    useGroupChatOnline(userid)

    return (
        <div
            className={cn(
                "h-screen flex-col gap-y-10 sm:px-5",
                !mobile
                    ? "hidden bg-black md:w-[300px] fixed md:flex"
                    : "w-full flex",
            )}
        >
            {groups.groups && groups.groups.length > 0 && (
                <DropDown
                    title="Groups"
                    trigger={
                        <div className="w-full flex items-center justify-between text-themeTextGray md:border-[1px] border-themeGray p-3 rounded-xl">
                            <div className="flex gap-x-3 items-center">
                                <img
                                    src={`https://ucarecdn.com/${groupInfo.group?.icon as string}/`}
                                    alt="icon"
                                    className="w-10 rounded-lg"
                                />
                                <p className="text-sm">
                                    {groupInfo.group?.name}
                                </p>
                            </div>
                            <span className="">
                                <CarotSort />
                            </span>
                        </div>
                    }
                >
                    {groups &&
                        groups.groups.length > 0 &&
                        groups.groups.map((item) => (
                            <Link
                                key={item.id}
                                href={`/group/${item.id}/channel/${channels?.channels?.[0].id!}`}
                            >
                                <Button
                                    variant="ghost"
                                    className="flex gap-2 w-full justify-start hover:bg-themeGray items-center"
                                >
                                    <Group />
                                    {item.name}
                                </Button>
                            </Link>
                        ))}
                </DropDown>
            )}

            <div className="flex flex-col gap-y-5">
                <div className="flex justify-between items-center">
                    <p className="text-xs text-[#F7ECE9]">CHANNELS</p>
                    {userid === groupInfo.group?}
                </div>
            </div>
        </div>
    )
}

export default SideBar
