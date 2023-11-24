import { SessionItemProps } from './SessionItemProps'
export type UpcomingSessionProps = {
    session: {
        id: SessionItemProps['id']
        title: SessionItemProps['title']
        summary: SessionItemProps['summary']
        date: string
    }
    onCancel: () => void
}
