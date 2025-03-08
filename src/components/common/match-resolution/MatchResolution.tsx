import { useResolution } from "../../../hooks/useResolution";

interface IMatchResolutionProps {
    desktop?: JSX.Element;
    tablet?: JSX.Element;
    mobile?: JSX.Element;
}
  
export const MatchResolution: React.FC<IMatchResolutionProps> = ({
    desktop,
    tablet,
    mobile
}) => {
    const { isDesktop, isTablet, isMobile } = useResolution();
    const propsArray = [desktop, tablet, mobile];
    if (propsArray.every(prop => prop == null)) 
        return null;
    if (propsArray.filter(prop => prop != null).length === 1) 
        return propsArray.find(prop => prop != null) ?? null
    if (isDesktop) 
        return desktop ?? tablet;
    if (isTablet) 
        return tablet ?? desktop;
    if (isMobile) 
        return mobile ?? tablet;
}