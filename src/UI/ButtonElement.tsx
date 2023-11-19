import { ButtonProps } from '../model/ButtonProps'

export const ButtonElement = ({
    children,
    textOnly,
    ...otherProps
}: ButtonProps) => {
    return (
        <button
            className={`button ${textOnly ? 'button--text-only' : ''}`}
            {...otherProps}
        >
            {children}
        </button>
    )
}
