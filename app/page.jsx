import Link from "next/link"

const HomePage = () => {
  return (
    <div>
      <div className="text-3xl">HomePage</div>
      <Link href="/properties">Show Properties</Link>
    </div>
  )
}

export default HomePage
