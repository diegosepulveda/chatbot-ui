"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Home, Search, Building, Phone, User, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const NavItems = () => (
    <>
      <Link href="/" className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
        <Home className="h-4 w-4" />
        <span>Home</span>
      </Link>
      <Link href="/properties" className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
        <Building className="h-4 w-4" />
        <span>Properties</span>
      </Link>
      <Link href="/search" className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
        <Search className="h-4 w-4" />
        <span>Search</span>
      </Link>
      <Link href="/contact" className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
        <Phone className="h-4 w-4" />
        <span>Contact</span>
      </Link>
      <Link href="/account" className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
        <User className="h-4 w-4" />
        <span>Account</span>
      </Link>
    </>
  );

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-sm py-3" 
        : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-serif font-bold text-primary tracking-tight">
              Luxe<span className="text-foreground">Estates</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavItems />
          </nav>
          
          <div className="hidden md:flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="default" className="rounded-full">Contact Agent</Button>
          </div>
          
          {/* Mobile Navigation */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 text-foreground focus:outline-none"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background absolute top-full left-0 right-0 shadow-md py-4 px-4 flex flex-col space-y-4">
            <NavItems />
            <div className="flex items-center space-x-2 pt-4 border-t">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full" 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button variant="default" className="rounded-full w-full">Contact Agent</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}