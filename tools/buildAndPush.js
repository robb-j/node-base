// Imports
const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

const { promisify } = require('util')
const readFile = promisify(fs.readFile)

const version = process.env.npm_package_version

;(async () => {
  try {
    // Get the registry to push to from the REGISTRY file
    let registry = (await readFile(path.join(__dirname, '..', 'REGISTRY'), 'utf8')).trim()
    
    // Generate tags for the image
    let tags = [ `${registry}:${version}` ]
    if (process.argv.includes('latest')) {
      tags.push(`${registry}:latest`)
    }
    
    // Reduce the tags into a statement
    let tagsStmt = tags.map(tag => `-t ${tag}`).join(' ')
    
    // Generate the command to run
    let cmd = [ `docker build ${tagsStmt} .` ]
      .concat(tags.map(tag => `docker push ${tag}`))
      .join(' && ')
    
    // Stop if in dry mode
    if (process.argv.includes('dry')) return console.log('Running:', cmd)
    
    // Execute the command
    let proc = exec(cmd)
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
})()
