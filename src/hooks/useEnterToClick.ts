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
    const triggerClick = useCallback((event: React.KeyboardEvent<HTMLElement>, ...params: unknown[]) => {
        if (event.key === "Enter" && !event.altKey) {
            event.preventDefault();
            if (args.ref) args.ref.click()
            else args.onClick(params);
        }
    },[args])

    return triggerClick;
}