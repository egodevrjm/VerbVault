export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">VerbVault</h1>
      <p className="text-lg text-muted-foreground">Welcome to the word puzzle platform</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <GameCard 
          title="Word Scramble"
          description="Unscramble letters to form words"
          comingSoon
        />
        <GameCard 
          title="Word Search"
          description="Find hidden words in a grid"
          comingSoon
        />
        <GameCard 
          title="Word Chain"
          description="Connect words using shared letters"
          comingSoon
        />
      </div>
    </div>
  )
}

function GameCard({ 
  title, 
  description, 
  comingSoon = false 
}: { 
  title: string
  description: string
  comingSoon?: boolean
}) {
  return (
    <div className="relative p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground mt-2">{description}</p>
      {comingSoon && (
        <div className="absolute top-2 right-2">
          <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
            Coming Soon
          </span>
        </div>
      )}
    </div>
  )
}