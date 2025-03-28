import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the main navigation and routes', () => {
    render(<App />)
    
    // Check if navigation is present
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    
    // Check if main content area is present
    expect(screen.getByRole('main')).toBeInTheDocument()
    
    // Check if footer is present
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
}) 