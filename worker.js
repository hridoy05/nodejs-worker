const {Worker} = require('bullmq')
async function sendEmail(){
    return new Promise((res, req)=> setTimeout(()=> res(),5*1000))
}
const worker = new Worker("email-queue", async (job) => {
    console.log(`Message ec id ${job.id}`)
    console.log(`sending email ${JSON.stringify(job.data)}`)
    await sendEmail()
    console.log(`send email`)
}, {
    connection: {
      host: '127.0.0.1',
      port: 6379,
    },
  },)