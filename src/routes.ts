import { Request, Response, Router } from "express";
import { GenerateLinkController } from "./Controllers/GenerateLinkController";
import { FindLinkByTokenController } from "./Controllers/FindLinkByTokenController";

const router = Router()

router.post("/", new GenerateLinkController().Handle)
router.get("/:token", new FindLinkByTokenController().Handle)

export {router}