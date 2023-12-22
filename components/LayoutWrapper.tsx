import { ReactNode } from 'react'
import Header from './Header'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <div className={`flex h-screen flex-col justify-between font-sans`}>
      <Header />
      <main className="mb-auto">{children}</main>
    </div>
  )
}

export default LayoutWrapper
