import { Router , Request, Response} from 'express'
import 'express-async-errors'

const router = Router()

router.get("/test", (req: Request, res: Response) => {
    throw new Error('Erro ao fazer a requisições')
})

export { router };