import React from 'react'

export default function Layout({ children }: React.PropsWithChildren<Record<string, unknown>>) {
  return <div className="min-h-screen bg-black">{children}</div>
}
