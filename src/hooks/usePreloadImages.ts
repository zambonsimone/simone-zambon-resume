import { useEffect } from "react";

export function usePreloadImages() {
    useEffect(() => {
        async function preloadImgs() {
            const json = await fetch("/imgs_to_preload.json");
            const imgsToPreload: string[] = await json.json();
            imgsToPreload.forEach(src => {
                const img = new Image();
                img.src = src;
            });
        }
        preloadImgs();
    }, [])
}