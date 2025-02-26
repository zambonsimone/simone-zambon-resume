export function buildFileNameFromHref(href: string, withDate: boolean | undefined) {
    const fileName = href.replace("/", "");
    if (!withDate) return fileName;
    const fileExtension = fileName.match(/\.[a-z]{3,4}$/)?.[0];
    if (!fileExtension) return fileName;
    const fileDate = new Date().toLocaleDateString().match(/([0-9]+)/g)?.join("");
    return fileName.replace(fileExtension, `-${fileDate}${fileExtension}`);
}

export async function getFileInfo(href: string) {
    const file = await fetch(href);
    if (!file?.blob) return;
    const blob = await file.blob()
    if (blob?.size == null || !blob?.type) return;
    const size = `${(blob.size / 1000).toFixed(0)} KB`;
    const type = `.${blob.type.split("/")[1]}`;
    return { size, type };
}