import React from "react"

interface ListItemProps {
    type: "with" | "without"
    label: string
}

export default function ListItem({ type, label }: ListItemProps) {
    return (
        <div className="mb-2 flex flex-row items-start gap-3 w-full">
            <img
                src={type === "with" ? "/checkmark.svg" : "/cross.svg"}
                className="w-6 h-6"
            />
            <p className="text-text-dark max-w-[440px] lg:max-w-[700px] text-lg">
                {label}
            </p>
        </div>
    )
}
