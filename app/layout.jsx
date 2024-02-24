import "@/assets/styles/global.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import AuthProvider from "@/components/AuthProvider"

export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
}

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body lang="en">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  )
}

export default MainLayout
