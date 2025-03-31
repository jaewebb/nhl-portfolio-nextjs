import { LoaderCircle } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex justify-center">
      <LoaderCircle className='animate-spin' size={64} />
    </div>
  )
}