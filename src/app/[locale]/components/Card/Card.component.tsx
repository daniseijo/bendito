import { Button } from '@/components/Button.component'

export function Card() {
  return (
    <div className="h-128 w-full bg-primary-accent p-4">
      <h2>Testing buttons</h2>
      <br />
      <Button className="mr-4">Click me!</Button>
      <Button className="mr-4" variant="outlined">
        Click me!
      </Button>
    </div>
  )
}
