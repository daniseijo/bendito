import { Button } from '@/components/Button.component'
import MaterialButton from '@/components/MaterialButton.component'

export function Card() {
  return (
    <div className="h-128 w-full bg-primary-accent p-4">
      <h2>Testing buttons</h2>
      <br />
      <Button className="mb-2 mr-4">Click me!</Button>
      <Button className="mr-4" variant="outlined">
        Click me!
      </Button>
      <Button className="mr-4" disabled>
        Click me!
      </Button>
      <Button className="mr-4" variant="outlined" disabled>
        Click me!
      </Button>
      <h2 className="mt-4">Testing material buttons</h2>
      <br />
      <MaterialButton className="mr-4">Click me!</MaterialButton>
      <MaterialButton className="mr-4" variant="outlined">
        Click me!
      </MaterialButton>
      <MaterialButton className="mr-4" disabled>
        Click me!
      </MaterialButton>
      <MaterialButton className="mr-4" variant="outlined" disabled>
        Click me!
      </MaterialButton>
    </div>
  )
}
