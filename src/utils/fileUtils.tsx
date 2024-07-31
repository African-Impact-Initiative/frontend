import PdfIcon from '../assets/file_icons/PDF.svg'
import ZipIcon from '../assets/file_icons/ZIP.svg'
import CsvIcon from '../assets/file_icons/CSV.svg'
import DocIcon from '../assets/file_icons/DOC.svg'
import DocxIcon from '../assets/file_icons/DOCX.svg'
import PngIcon from '../assets/file_icons/PNG.svg'
import JpgIcon from '../assets/file_icons/JPG.svg'
import JpegIcon from '../assets/file_icons/JPEG.svg'
import SvgIcon from '../assets/file_icons/SVG.svg'
import DefaultIcon from '../assets/file_icons/default.svg'

export const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase()
    switch (extension) {
    case 'pdf':
        return PdfIcon
    case 'zip':
        return ZipIcon
    case 'csv':
        return CsvIcon
    case 'doc':
        return DocIcon
    case 'docx':
        return DocxIcon
    case 'png':
        return PngIcon
    case 'jpg':
        return JpgIcon
    case 'jpeg':
        return JpegIcon
    case 'svg':
        return SvgIcon
    default:
        return DefaultIcon
    }
}

export const formatFileSize = (size: number) => {
    if (size < 1024) return `${size} bytes`
    else if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`
    else return `${(size / (1024 * 1024)).toFixed(1)} MB`
}
