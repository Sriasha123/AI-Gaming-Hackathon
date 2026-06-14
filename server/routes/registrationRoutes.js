const express=require("express")

const router=express.Router()

const {

registerTeam,
getTeams,
updateStatus,
createAnnouncement,
getAnnouncements,
exportTeams

}=require("../controllers/registerController")


router.post("/register",registerTeam)

router.get("/teams",getTeams)

router.put("/status",updateStatus)

router.post("/announcement",createAnnouncement)

router.get("/announcement",getAnnouncements)

router.get("/export",exportTeams)


module.exports=router