const fs = require('fs')
const path = require('path')

function getGalleryImages () {
  const galleryDir = path.join(hexo.source_dir, 'img', 'gallery')
  const extensions = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'])

  if (!fs.existsSync(galleryDir)) return []

  const images = fs.readdirSync(galleryDir)
    .filter(file => extensions.has(path.extname(file).toLowerCase()))
    .sort()

  return images.map(image => `/img/gallery/${encodeURIComponent(image)}`)
}

hexo.extend.helper.register('gallery_images', getGalleryImages)
hexo.extend.helper.register('gallery_image', function () {
  const images = getGalleryImages()
  return images.length ? images[Math.floor(Math.random() * images.length)] : null
})
