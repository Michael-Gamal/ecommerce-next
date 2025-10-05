"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

const Filter = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()  
    const handleFillter = (value: string) => {
        const params = new URLSearchParams(searchParams)
        params.set("sort", value);
        router.push(`${pathname}?${params.toString()}`, {scroll: false})
    }

  return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-6">
        <span>Sort by:</span>
        <select onChange={(e) => handleFillter(e.target.value)} name="sort" id="sort" className="ring-1 ring-gray-200 rounded-sm shadow-md p-1">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
        </select>
    </div>
  )
}

export default Filter
