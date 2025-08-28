import { cn } from "@/lib/utils"

interface SectionProps extends React.SelectHTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  background?: 'default' | 'blur' | 'transparent'
  id?: string
}

export default function Section({
  children,
  className = '',
  background = 'default',
  id
}: SectionProps) {
  const backgroundClasses = {
    default: 'relative z-10 py-20',
    blur: 'relative z-10 py-20 bg-gray/10 border-gray-900 backdrop-blur-sm',
    transparent: 'relative z-10 py-20 bg-gray-900/5 backdrop-blur-sm'
  }

  return (
    <section id={id} className={cn(`${backgroundClasses[background]} ${className}`)}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  )
}