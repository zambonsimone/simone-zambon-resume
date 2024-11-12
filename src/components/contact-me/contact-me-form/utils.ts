export function isValidFileType(
    files: FileList | null | undefined
) {
    if (files == null || !files.length) return true;
    const fileExtension = files[0].name.slice(files[0].name.lastIndexOf(".")+1, files[0].name.length);
    const validExtensionRegex = /png|jpeg|pdf|jpg|zip/;
    return validExtensionRegex.test(fileExtension);
}