import { renderHook } from "@testing-library/react";
import React from "react";
import { useEnterToClick } from "./useEnterToClick";

const keybEvent = {
    key: "Enter",
    altKey: null,
    nativeEvent: new KeyboardEvent("keydown"),
    preventDefault: () => { },
    stopPropagation: () => { },
    isDefaultPrevented: () => false,
    isPropagationStopped: () => false,
    persist: () => { },
} as React.KeyboardEvent<HTMLDivElement>;


describe("useEnterToClick hook should", () => {
    it("trigger click correctly on press Enter and call onClick", () => {
        const onClick = jest.fn();
        const { result } = renderHook(() => useEnterToClick({ onClick }));
        const triggerClick = result.current;
        triggerClick(keybEvent);
        expect(onClick).toHaveBeenCalled();
    })
    it("trigger click correctly on press Enter and trigger element.click", () => {
        const elementOnClick = jest.fn();
        const onClick = jest.fn();
        const element: HTMLElement = document.createElement("div");
        element.onclick = elementOnClick;
        const { result } = renderHook(() => useEnterToClick({ ref: element, onClick }));
        const triggerClick = result.current;
        triggerClick(keybEvent);
        expect(onClick).toHaveBeenCalledTimes(0);
        expect(elementOnClick).toHaveBeenCalled();
    })
    it("trigger click correctly on press Enter and prevent event default", () => {
        const onClick = jest.fn();
        const { result } = renderHook(() => useEnterToClick({ onClick }));
        const triggerClick = result.current;
        const preventDefaultFn = jest.fn();
        keybEvent.preventDefault = preventDefaultFn;
        triggerClick(keybEvent);
        expect(preventDefaultFn).toHaveBeenCalled();
    })
    it("not perform any action if other keys are pressed", () => {
        const onClick = jest.fn();
        const { result } = renderHook(() => useEnterToClick({ onClick }));
        const triggerClick = result.current;
        keybEvent.altKey = true;
        const preventDefaultFn = jest.fn();
        keybEvent.preventDefault = preventDefaultFn;
        triggerClick(keybEvent);
        expect(onClick).toHaveBeenCalledTimes(0);
        expect(preventDefaultFn).toHaveBeenCalledTimes(0);
    })
})