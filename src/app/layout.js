import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from 'next/font/google'
import '../styles/scss/custom.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'User Dashboard',
  description: 'Dashboard with followers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
