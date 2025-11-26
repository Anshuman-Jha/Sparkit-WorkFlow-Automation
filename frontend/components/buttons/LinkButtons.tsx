"use client"
import { ReactNode } from "react";
// takes children as input/ react componet or text can be put in between that is children
export const LinkButton = ({ children, onClick }: { children: ReactNode, onClick: () => void }) => {

    return <div className="flex justify-center px-4  py-2  cursor-pointer hover:bg-slate-100 font-light text-sm rounded" onClick={onClick}>
        {children}
    </div>

}