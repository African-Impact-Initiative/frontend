export function BlogToBase64(file: File, callback: (err: ProgressEvent<FileReader> | null, res: FileReader['result']) => void) {
    const fr = new FileReader()
    fr.onload = () => callback(null, fr.result)
    fr.onerror = (err) => callback(err, null)
    fr.readAsDataURL(file)
}
