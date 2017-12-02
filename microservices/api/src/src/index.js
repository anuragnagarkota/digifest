import express from 'express'
import path from 'path'
import chalk from 'chalk'
import bodyParser from 'body-parser'
import { graphqlExpress,graphiqlExpress} from 'apollo-server-express'
import schema from './schema'
import {mysql_connect} from './config'
import "babel-polyfill";
const app = express()
const cors = require('cors');
const PORT=process.env.PORT || 8080;
let cookies = {}
function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

app.use('/graphql',cors(), bodyParser.json(), graphqlExpress({
  schema,
  context: {
        mysql_connect,
        sleep
    }
}))
app.use('/graphiql',cors(), graphiqlExpress({
  endpointURL: '/graphql'
}))

app.listen(PORT, () => {
  const log = console.log
  log('\n')
  log(chalk.bgGreen.black(`Server listening on http://localhost:${PORT}/ ..`))
  log('\n')

  log(`${chalk.blue('/graphql')}  - endpoint for queries`)
  log(`${chalk.blue('/graphiql')} - endpoint for testing`)
  log('\n')
})

export default app
