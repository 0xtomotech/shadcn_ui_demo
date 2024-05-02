import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SearchInput } from "@/components/SearchInput";
import { ModeToggle } from "@/components/DarkModeToggle";
import { CustomCard } from "@/components/CustomCard";

export default function Home() {
  return (
    <main className="h-screen flex relative">
      {/* ModeToggle positioned absolutely at the top right */}
      <div className="absolute top-5 right-5">
        <ModeToggle />
      </div>

      {/* Central content */}
      <div className="flex flex-col gap-10 items-center m-auto justify-center">
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
          <Button variant="ghost" size="icon" className="rounded-full">🔥</Button>
          <Button className="bg-purple-700 dark:bg-purple-200 dark:hover:bg-yellow-200 rounded-full">Modified</Button>
        </div>

        <div className="flex flex-col">
          <CustomCard />
        </div>

      </div>
    </main>
    
  );
}
