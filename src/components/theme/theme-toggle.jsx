import { Button } from "../ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu'

const ModeToggle = () => {

  const setTheme = (theme) => {
    // try to get current theme from local storage
    const currentTheme = localStorage.getItem('theme') || 'dark'

    // remove current theme from document
    document.documentElement.classList.remove(currentTheme)

    // get the user system default theme
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches? 'dark' : 'light'

    if (theme === 'system') {
      document.documentElement.classList.add(systemTheme)
      localStorage.setItem("theme", systemTheme)
    } else {
      document.documentElement.classList.add(theme)
      localStorage.setItem("theme", theme)
    }
  }


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ModeToggle
