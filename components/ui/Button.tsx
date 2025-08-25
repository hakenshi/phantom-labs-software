import { Button as HeadlessButton } from '@headlessui/react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick,
  className = ''
}: ButtonProps) {
  const baseClasses = 'font-medium rounded-full transition-all duration-300 hover:scale-105'
  
  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-dark text-white',
    secondary: 'bg-gradient-to-r from-primary to-accent text-white',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg'
  }

  return (
    <HeadlessButton
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </HeadlessButton>
  )
}