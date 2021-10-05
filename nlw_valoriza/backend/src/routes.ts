import { ListTagsController } from './controller/ListTagsController';
import { ListUserSendComplementsController } from './controller/ListUserSendComplimentsController';
import { ListUserReceiveComplimentsController } from './controller/ListUserReceiveComplimentsController';
import { response, Router } from 'express'
import { CreateUserController } from './controller/UserController'
import { CreateTagController } from './controller/TagController'
import { EnsureAdmin } from './middlewares/EnsureAdmin'
import { AuthenticateUserController } from './controller/AuthenticateUserController'
import { CreateComplimentController } from './controller/ComplimentController'
import { EnsureAuthenticate } from './middlewares/EnsureAuthenticate'
import { ListUsersController } from './controller/ListUserController';
import axios from 'axios';


const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserSendComplementsController = new ListUserSendComplementsController()
const listUserReceiveComplementsController = new ListUserReceiveComplimentsController()
const listTagsController = new ListTagsController()
const listUserController = new ListUsersController()

router.post("/users", createUserController.handle)
router.post("/tags", EnsureAuthenticate, EnsureAdmin, createTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", EnsureAuthenticate, createComplimentController.handle)

router.get("/users/compliments/send", EnsureAuthenticate, listUserSendComplementsController.handle)
router.get("/users/compliments/receive", EnsureAuthenticate, listUserReceiveComplementsController.handle)
router.get("/tags", EnsureAuthenticate, listTagsController.handle)
router.get("/users", listUserController.handle)

export { router }