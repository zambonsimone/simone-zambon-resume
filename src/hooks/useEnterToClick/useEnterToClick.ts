import { useCallback } from "react";

type IUseEnterForClickArgs = {
    onClick: (...args: unknown[]) => unknown,
    ref?: HTMLElement
} | {
    onClick?: (...args: unknown[]) => unknown,
    ref: HTMLElement
};

/**
 * Hook that triggers the given `args.onClick` handler when the 'Enter' key is pressed on the target element
 * 
 * This hook supports two usage modes:
 * 1. Provide an `onClick` handler and optionally a `ref`.
 * 2. Provide a `ref` and optionally an `onClick` (already attached to the element).
 *
 * @param args - The arguments to configure the hook
 * @param args.onClick - Function to call when Enter is pressed. Optional if the ref already has its own handler
 * @param args.ref - The target HTML element. Required if onClick is not provided
 * @returns the handler to be passed to the HTMLElement "onKeyDown" prop  
 */
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