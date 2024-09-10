import { Button } from '@/components/ui/button'
import { SearchInput } from '@/components/SearchInput'
import { ModeToggle } from '@/components/DarkModeToggle'
import { CustomCard } from '@/components/CustomCard'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      {/* Header */}
      <header className="absolute right-5 top-5">
        <ModeToggle />
      </header>

      {/* Main content */}
      <div className="max-w-4xl mx-auto pt-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Welcome to ShadCN Demo</h1>
        
        {/* Search Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Search</h2>
          <form role="search" className="max-w-md mx-auto">
            <SearchInput placeholder="Search something" />
          </form>
        </section>

        {/* Button Showcase */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Button Showcase</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Button>Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" className="rounded-full">i</Button>
            <Button variant="ghost" size="icon" className="rounded-full">🔥</Button>
            <Button className="rounded-full bg-purple-700 text-white dark:bg-purple-200 dark:text-gray-800 dark:hover:bg-yellow-200">
              Modified
            </Button>
            <Button variant="outline" className="border-2 border-blue-500 text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900">
              Bordered Blue
            </Button>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600">
              Gradient
            </Button>
            <Button variant="ghost" className="text-green-500 hover:text-green-700 hover:bg-green-100 dark:hover:bg-green-900">
              Eco Friendly
            </Button>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105">
              Animated
            </Button>
          </div>
        </section>

        {/* Custom Card Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Custom Card</h2>
          <div className="max-w-md mx-auto">
            <CustomCard />
          </div>
        </section>
      </div>
    </main>
  )
}
