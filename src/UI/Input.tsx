import { InputProps } from '../model/InputProps'

export const Input = ({ label, id, ...props }: InputProps) => {
    return (
        <div className="control">
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
        </div>
    )
}
