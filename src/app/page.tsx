import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { SearchInput } from '@/components/SearchInput'
import { ModeToggle } from '@/components/DarkModeToggle'
import { CustomCard } from '@/components/CustomCard'

export default function Home() {
  return (
    <main className="relative flex h-screen">
      {/* ModeToggle positioned absolutely at the top right */}
      <div className="absolute right-5 top-5">
        <ModeToggle />
      </div>

      {/* Central content */}
      <div className="m-auto flex flex-col items-center justify-center gap-10">
        <form role="search">
          <SearchInput placeholder="Search something" />
        </form>

        {/* Buttons will be adjusted in the next step */}
        <div className="grid grid-cols-3 gap-4">
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">i</Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            🔥
          </Button>
          <Button className="rounded-full bg-purple-700 dark:bg-purple-200 dark:hover:bg-yellow-200">
            Modified
          </Button>
        </div>

        <div className="flex flex-col">
          <CustomCard />
        </div>
      </div>
    </main>
  )
}
