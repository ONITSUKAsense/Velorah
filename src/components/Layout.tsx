import { Outlet, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === "/"

  const pageTransition = (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  )

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {isHome ? (
        <>
          <Navbar />
          <main className="flex-1 flex flex-col">{pageTransition}</main>
        </>
      ) : (
        <>
          <Navbar />
          <main className="flex-1">{pageTransition}</main>
        </>
      )}
      <Footer />
    </div>
  )
}
