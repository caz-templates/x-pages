// @ts-check

// // !!! Sharing the dependencies of caz
// module.paths = module.parent.paths

// const path = require('path')
// const chalk = require('chalk')
const pkg = require('./package.json')

/** @type {import('caz').Template} */
module.exports = {
  name: pkg.name,
  version: pkg.version,
  metadata: {
    // TODO: predefined template metadata
    // year: new Date().getFullYear()
  },
  prompts: [
    // TODO: custom template prompts
    // {
    //   name: 'name',
    //   type: 'text',
    //   message: 'Project name'
    // },
    // {
    //   name: 'version',
    //   type: 'text',
    //   message: 'Project version'
    // },
    // {
    //   name: 'description',
    //   type: 'text',
    //   message: 'Project description',
    //   /** @param {any} _ @param {{ name: string }} values */
    //   initial: (_, values) => `A template for creating ${values.name} apps.`
    // },
    // {
    //   name: 'author',
    //   type: 'text',
    //   message: 'Project author name'
    // },
    // {
    //   name: 'email',
    //   type: 'text',
    //   message: 'Project author email'
    // },
    // {
    //   name: 'url',
    //   type: 'text',
    //   message: 'Project author url'
    // },
    // {
    //   name: 'github',
    //   type: 'text',
    //   message: 'GitHub username or organization',
    //   initial: 'caz-templates'
    // },
    // {
    //   name: 'features',
    //   type: 'multiselect',
    //   message: 'Choose the features you need',
    //   instructions: false,
    //   choices: [
    //     { title: 'Feature1', value: 'feature1' },
    //     { title: 'Feature2', value: 'feature2', selected: true }
    //   ]
    // },
    // {
    //   name: 'install',
    //   type: 'confirm',
    //   message: 'Install dependencies',
    //   initial: true
    // },
    // {
    //   name: 'pm',
    //   type: prev => process.env.NODE_ENV === 'test' || prev ? 'select' : null,
    //   message: 'Package manager',
    //   hint: ' ',
    //   choices: [
    //     { title: 'npm', value: 'npm' },
    //     { title: 'yarn', value: 'yarn' },
    //     { title: 'pnpm', value: 'pnpm' }
    //   ]
    // }
  ],
  complete: async ctx => {
    // TODO: custom complete callback
    // console.clear()
    // console.log(chalk`Created a new project in {cyan ${ctx.project}} by the {blue ${ctx.template}} template.\n`)
    // console.log('Getting Started:')
    // if (ctx.dest !== process.cwd()) {
    //   console.log(chalk`  $ {cyan cd ${path.relative(process.cwd(), ctx.dest)}}`)
    // }
    // if (ctx.config.install === false) {
    //   console.log(chalk`  $ {cyan npm install} {gray # or yarn}`)
    // }
    // console.log(chalk`  $ {cyan ${ctx.config.install ? ctx.config.install : 'npm'} test}`)
    // console.log('\nHappy hacking :)\n')
  }
}
