import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-red-600 text-white">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-yellow-400">$MCTRUMP</h1>
        <nav>
          <Button 
            variant="outline" 
            className="text-red-600 bg-white border-white hover:bg-yellow-400 hover:text-red-600 hover:border-yellow-400 transition-colors duration-200"
            asChild
          >
            <Link href="https://pump.fun">Buy Now</Link>
          </Button>
        </nav>
      </header>
      
      <main className="container mx-auto mt-12 text-center">
        <h2 className="text-5xl font-extrabold mb-6">Make Crypto Great Again!</h2>
        <p className="text-xl mb-8">Introducing McDonald Trump ($MCTRUMP) - The tastiest memecoin in the crypto menu!</p>
        
        <div className="bg-white rounded-lg p-8 mb-12">
          <Image
            src="/mctrump-mascot.png"
            width={400}
            height={400}
            alt="McDonald Trump $MCTRUMP"
            className="mx-auto rounded-lg"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-yellow-400 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2 text-red-600">Bigly Gains</h3>
            <p className="text-red-600">Our returns are yuuuge. The best returns. Everybody says so.</p>
          </div>
          <div className="bg-yellow-400 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2 text-red-600">No Fake Tokens</h3>
            <p className="text-red-600">We have the most beautiful, authentic tokens. Believe me.</p>
          </div>
          <div className="bg-yellow-400 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2 text-red-600">Golden Arches Standard</h3>
            <p className="text-red-600">Backed by the most stable genius in fast food and politics.</p>
          </div>
        </div>
        
        <Button size="lg" className="bg-yellow-400 text-red-600 hover:bg-yellow-500 text-xl px-8 py-4" asChild>
          <Link href="https://pump.fun">Grab Your $MCTRUMP Now!</Link>
        </Button>
      </main>
      
      <footer className="container mx-auto py-6 mt-12 text-center">
        <p>© 2024 McDonald Trump. All rights reserved. Made with 100% real beef and 0% political correctness.</p>
      </footer>
    </div>
  )
}