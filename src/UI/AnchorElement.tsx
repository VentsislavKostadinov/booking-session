import { Link } from 'react-router-dom'
import { ButtonLinkProps } from '../model/ButtonProps'

export const AnchorElement = ({
    children,
    textOnly,
    ...otherProps
}: ButtonLinkProps) => {
    return (
        <Link
            className={`button ${textOnly ? 'button--text-only' : ''}`}
            {...otherProps}
        >
            {children}
        </Link>
    )
}
