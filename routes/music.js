import { Router } from 'express'
import * as musicCtrl from '../controllers/music.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', musicCtrl.search)
router.get('/:id', musicCtrl.getAlbums)
router.get('/album/:id', musicCtrl.getAlbumTracks)

export { router }