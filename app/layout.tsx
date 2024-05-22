import "@/styles/globals.css"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/main-nav"
import { Plus_Jakarta_Sans } from 'next/font/google'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Spend.In",
  description: "Spend.In is a platform that helps you track your business expenses and manage your finances.",
}

interface RootLayoutProps {
  children: React.ReactNode
}

const jakartaFont = Plus_Jakarta_Sans({ subsets: ['latin'] })


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html
        lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen antialiased", jakartaFont.className)}
        >
          <div className="relative flex min-h-screen min-w-full flex-col">
            <MainNav />
            <div >{children}</div>
          </div>
        </body>
      </html>
    </>
  )
}
