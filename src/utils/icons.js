const fileTypes = {
  'fa fa-file-word-o': ['doc', 'docx'],
  'fa fa-file-powerpoint-o': ['ppt', 'pptx'],
  'fa fa-file-excel-o': ['xls', 'xlsx', 'ods', 'csv'],
  'fa fa-file-archive-o': ['zip', 'rar'],
  'fa fa-file-text': ['txt'],
  'fa fa-file-pdf-o': ['pdf'],
  'fa fa-file-music-o': ['mp3', 'm4a', 'aac', 'wma', 'flac'],
  'fa fa-file-image-o': [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'tiff',
    'psd',
    'eps',
    'ai',
    'indd',
    'raw',
    'image/*',
  ],
  'fa fa-file-video-o': [
    'mp4',
    'mov',
    'wmv',
    'flv',
    'avi',
    'aacvhd',
    'webm',
    'mkv',
  ],
  'fa fa-file-code-o': [
    'json',
    'js',
    'se',
    'html',
    'html',
    'xhtml',
    'asp',
    'hta',
    'aspx',
    'ts',
    'php',
    'sql',
    'py',
    'c',
  ],
};

const defaultIcon = 'fa fa-file';

export const mapTypeToIcon = (file_type) => {
  if (!file_type) {
    return defaultIcon;
  }
  let resultIcon = defaultIcon;
  Object.keys(fileTypes).forEach((key) => {
    if (fileTypes[key].includes(file_type.toLowerCase())) {
      resultIcon = key;
    }
  });
  return resultIcon;
};
