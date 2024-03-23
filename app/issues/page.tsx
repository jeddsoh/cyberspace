import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"

export const Issues = () => {
  return (
    <div>
      <Button color="primary">
        <Link color="foreground" href="/issues/new">
          New Issue
        </Link>
      </Button>
    </div>
  )
}

export default Issues
