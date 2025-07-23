import { useCallback, useEffect, useState } from "react";
import { MEDIA_QUERIES } from "../constants";
import { MediaQuery, Resolution } from "../types";

const INITIAL_MATCHES: Record<Resolution, boolean> = {
    DESKTOP: false,
    TABLET: false,
    MOBILE: false
}

/**
 * React hook that tracks the current viewport resolution using media queries.
 *
 * Listens to the `resize` event and updates boolean flags indicating which resolution is currently active
 *
 * @returns an object with three boolean flags:
 * - `isDesktop`: `true` if the screen matches the desktop breakpoint
 * - `isTablet`: `true` if the screen matches the tablet breakpoint
 * - `isMobile`: `true` if the screen matches the mobile breakpoint
 */
export function useResolution() {
    const [matches, setMatches] = useState<Record<Resolution, boolean>>(INITIAL_MATCHES);

    const setResolutionMatches = useCallback(() => {
        const resolutions: Record<Resolution, boolean> = { ...INITIAL_MATCHES };
        Object.entries(MEDIA_QUERIES).forEach(entry => {
            const name = entry[0] as Resolution;
            const value = entry[1] as MediaQuery;
            resolutions[name] = !!window.matchMedia(value).matches;
        })
        setMatches(resolutions);
    }, [])

    useEffect(() => {
        setResolutionMatches();
        window.addEventListener("resize", setResolutionMatches);
        return () => window.removeEventListener("resize", setResolutionMatches);
    }, [setResolutionMatches])

    return {
        isDesktop: matches.DESKTOP,
        isTablet: matches.TABLET,
        isMobile: matches.MOBILE
    };
}