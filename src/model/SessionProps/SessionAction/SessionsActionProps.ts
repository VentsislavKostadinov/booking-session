import { BookSessionActionProps } from './BookSessionActionProps'
import { CancelSessionActionProps } from './CancelSessionAction'

export type SessionsActionProps =
    | BookSessionActionProps
    | CancelSessionActionProps
