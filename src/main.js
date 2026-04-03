import 'reveal.js/dist/reset.css'
import 'reveal.js/dist/reveal.css'
import 'prismjs/themes/prism-tomorrow.css'
import './styles.css'

import Reveal from 'reveal.js'
import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-bash'

import title from './sections/01-title.html?raw'
import whatIsPhp from './sections/02-what-is-php.html?raw'
import firstPhpFile from './sections/03-first-php-file.html?raw'
import variablesSyntax from './sections/04-variables-syntax.html?raw'
import debugging from './sections/05-debugging.html?raw'
import echoPrintDie from './sections/06-echo-print-die.html?raw'
import strings from './sections/07-strings.html?raw'
import controlFlow from './sections/08-control-flow.html?raw'
import functions from './sections/09-functions.html?raw'
import arrays from './sections/10-arrays.html?raw'
import formsSuperglobals from './sections/11-forms-superglobals.html?raw'
import templating from './sections/12-templating.html?raw'
import wrapUp from './sections/13-wrap-up.html?raw'

const sections = [
  title,
  whatIsPhp,
  firstPhpFile,
  variablesSyntax,
  debugging,
  echoPrintDie,
  strings,
  controlFlow,
  functions,
  arrays,
  formsSuperglobals,
  templating,
  wrapUp,
]

document.querySelector('.slides').innerHTML = sections.join('\n')

const deck = new Reveal({
  hash: true,
  slideNumber: 'c/t',
  transition: 'slide',
  transitionSpeed: 'default',
  width: 900,
  height: 720,
  margin: 0.08,
  center: true,
  history: true,
  plugins: [],
})

deck.initialize()

deck.on('ready', () => Prism.highlightAll())
deck.on('slidechanged', () => Prism.highlightAll())
