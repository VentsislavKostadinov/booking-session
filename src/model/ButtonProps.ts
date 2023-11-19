import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { type LinkProps } from 'react-router-dom'

// Setting up shared BaseProps that will be used no matter if a <button> or <Link> should be rendered
export type BaseProps = {
    children: ReactNode
    textOnly?: boolean
}

// Setting up Button / Link specific props
// The `to` prop will be used to determine if a <button> or <Link> should be rendered
export type ButtonProps = ComponentPropsWithoutRef<'button'> &
    BaseProps & {
        to?: never
    }

export type ButtonLinkProps = LinkProps &
    BaseProps & {
        to: string
    }
