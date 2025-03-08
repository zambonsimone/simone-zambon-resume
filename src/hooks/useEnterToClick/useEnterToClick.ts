import { useCallback } from "react";

type IUseEnterForClickArgs = {
    onClick: (...args: unknown[]) => unknown,
    ref?: HTMLElement
} | {
    onClick?: (...args: unknown[]) => unknown,
    ref: HTMLElement
};
export function useEnterToClick(
    args: IUseEnterForClickArgs
) {
    const triggerClick = useCallback((event: React.KeyboardEvent<HTMLElement>) => {
        const otherKeys = [event.altKey, event.ctrlKey, event.shiftKey];
        if (event.key === "Enter" && otherKeys.every(key => !key)) {
            event.preventDefault();
            if (args.ref) args.ref.click()
            else args.onClick();
        }
    }, [args])

    return triggerClick;
}