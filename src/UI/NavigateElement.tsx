import { ButtonProps, ButtonLinkProps } from '../model/ButtonProps'
import { AnchorElement } from './AnchorElement'
import { ButtonElement } from './ButtonElement'

// Using a type guard with a type predicate to determine if the received props are for a <button> or <Link>
function isRouterLink(
    props: ButtonProps | ButtonLinkProps,
): props is ButtonLinkProps {
    return 'to' in props
}

export const NavigateElement = (props: ButtonProps | ButtonLinkProps) => {
    if (isRouterLink(props)) {
        const { children, textOnly, ...otherProps } = props
        return (
            <AnchorElement
                children={children}
                textOnly={textOnly}
                {...otherProps}
            />
        )
    }
    // Destructuring after the `if` statement to ensure TypeScript "understands" that `props` is of type `ButtonProps` and `otherProps` will therefore only contain props that work on <button>
    const { children, textOnly, ...otherProps } = props
    return (
        <ButtonElement
            children={children}
            textOnly={textOnly}
            {...otherProps}
        />
    )
}
