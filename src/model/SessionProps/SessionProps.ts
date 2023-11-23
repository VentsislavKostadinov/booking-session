import { SessionItemProps } from './SessionItemProps'

export type SessionProps = SessionItemProps & {
    description: string
    date: string
    duration: number
}
