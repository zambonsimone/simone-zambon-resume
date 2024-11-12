import { useCallback, useEffect, useState } from "react";
import { MEDIA_QUERIES } from "../constants";
import { MediaQuery, Resolution } from "../types";

const INITIAL_MATCHES: Record<Resolution, boolean> = {
    DESKTOP: false,
    TABLET: false,
    MOBILE: false
}
export function useResolution() {
    const [matches, setMatches] = useState<Record<Resolution, boolean>>(INITIAL_MATCHES);

    const setResolutionMatches = useCallback(() => {
        let resolutions: Record<Resolution, boolean> = { ...INITIAL_MATCHES };
        Object.entries(MEDIA_QUERIES).forEach(entry => {
            const name = entry[0] as Resolution;
            const value = entry[1] as MediaQuery;
            resolutions[name] = !!window.matchMedia(value).matches;
        })
        setMatches(resolutions);
    },[])

    useEffect(() => {
        setResolutionMatches();
        window.addEventListener("resize", setResolutionMatches);
        () => window.removeEventListener("resize", setResolutionMatches);
    },[setResolutionMatches])

    return {
        isDesktop: matches.DESKTOP,
        isTablet: matches.TABLET,
        isMobile: matches.MOBILE
    };
}