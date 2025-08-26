'use client'
import { Button } from '@/components/ui/button'
import { useDispatch } from 'react-redux'
function Cancel() {
    const dispatch = useDispatch()
    return (
        <Button
            onClick={() => dispatch(clearItems())}
            variant='outline'
        >
            Cancel
        </Button>
    )
}

export default Cancel