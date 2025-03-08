import { useEffect } from "react";
import { useLocation } from "react-router";

function getScrollingParent(node: HTMLElement) {
    const parent = node.parentElement;
    const isScrollable = ["auto", "scroll"].includes(getComputedStyle(parent).overflowY);
    if (isScrollable) return parent
    else return getScrollingParent(parent)
}

export const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        const pageTitleNode = document.querySelector("h1");
        if (!pageTitleNode) return;
        const scrollingParent = getScrollingParent(pageTitleNode);
        scrollingParent.scrollTo(0, 0);
    }, [pathname])
    return null
}