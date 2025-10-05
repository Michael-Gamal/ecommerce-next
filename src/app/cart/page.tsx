'use client'

import React, { Suspense } from 'react'
import CartPageInner from './CartPageInner/CartPageInner'

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center mt-20">Loading cart...</div>}>
      <CartPageInner />
    </Suspense>
  )
}
