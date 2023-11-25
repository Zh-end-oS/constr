import { forwardRef } from "react";
import { TypeInputProps } from './Field.types'
import cn from "clsx";
import styles from './Field.module.scss'

const Field = forwardRef<HTMLInputElement, TypeInputProps>(
    ({ error, style, className, ...rest}, ref) => {
        return (
        <label className={cn(styles.field, className)} style={style}>
            <input ref={ref} {...rest} />
            {error && <div className={styles.error}>{error.message}</div>}
        </label>
        )
    })
Field.displayName = 'Field'

export default Field