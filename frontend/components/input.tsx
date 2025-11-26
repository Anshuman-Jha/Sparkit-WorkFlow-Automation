"use client"
export const Input = ({ label, placeholder, onChange, type }:
    { label: string, placeholder: string, onChange: (e: any) => void, type?: "text" | "password" | undefined }) => {

    return (
        <div className="text-sm pb-1 pt-2">
            <label> {label} </label>
            <input className="border rounded px-4 py-2 w-full border-black" type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    )

}  