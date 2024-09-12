const {Queue} = require("bullmq")

const notificationQueue = new Queue ('email-queue')

async function init(){
    const res = await notificationQueue.add('email to hridoy', {
        email: "hridoy.dev",
        subject: "welcome hridoy",
        body:"hey hridoy"
    })
    console.log(res.id)
    process.exit()
} 
init()

