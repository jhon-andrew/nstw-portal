'use strict'

const rootFolder = 'public/assets/dashboard/materials'
const fs = require('fs')
const path = require('path')
const filesJSON = {}

let { exhibits: { kiosks } } = require('../../../resources/front-end/contents.json')
kiosks = kiosks.map(kiosk => {
  kiosk.slug = kiosk.name.toLowerCase().split(' ').join('-')
  return kiosk
})

function getFiles (folder) {
  let files = fs.readdirSync(folder)

  if (files.length > 0) files.forEach(entry => {
    const isFolder = !path.extname(entry)

    if (!isFolder) {
      const fullPath = path.join(folder, entry).split('\\').join('/').replace('public/', '/')

      kiosks.forEach(kiosk => {
        if (fullPath.search(kiosk.slug) > 0) {
          if (!filesJSON[kiosk.slug]) filesJSON[kiosk.slug] = {}
          filesJSON[kiosk.slug][entry] = fullPath
        }
      })
    } else getFiles(path.join(folder, entry))
  })
}

class DownloadsDirectoryController {
  async updateDirectory ({ response }) {
    getFiles(rootFolder)
    response.json(filesJSON)
  }
}

module.exports = DownloadsDirectoryController
