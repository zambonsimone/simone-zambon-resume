import { useEffect } from "react";

interface IDocumentTileProps {
    title: string;
}

export const DocumentTitle: React.FC<IDocumentTileProps> = ({
    title
}) => {
    useEffect(() => {
        document.title = `SZ - ${title}`;
    },[title])
    return null;    
}