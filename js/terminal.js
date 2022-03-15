const ENTER_KEY = 13
const fileSystem = {
    'README.md': `Hello, welcome to my website!
    Supported commands are:
    - ls: list directory contents
    - cat: concatenate and print files
    - clear: clear the terminal screen 
  `,
    'index.html': `<h1>Hello world !</h1>\n<p>This website is still in construction</p>`,
    'info.json': `
    {
      "me" : { 
          "name" : "vincent", 
          "username" : "yuto", 
          "age" : 23 }, 
      "hobbies" : {
          "music" : "guitar, EDM, piano", 
          "drawing" : "photoshop, procreate"}
    }`,
}

new class Terminal {
  constructor() {
    this.onKeyDown = this.onKeyDown.bind(this)
    this.clearHistory = this.clearHistory.bind(this)
    this.addHistory = this.addHistory.bind(this)
    this.listFiles = this.listFiles.bind(this)
    this.catFile = this.catFile.bind(this)
    this.scrollToBottom = this.scrollToBottom.bind(this)

    this.history = []
    this.elements = {
      input: document.querySelector('.inputTerminal'),
      terminal: document.querySelector('.terminal'),
      outputContainer: document.querySelector('.outputContainer')
    }
    this.prompt = '$'
    this.commands = {
      clear: this.clearHistory,
      ls: this.listFiles,
      cat: this.catFile,
    }
    this.elements.input.addEventListener('keydown', this.onKeyDown)
    this.catFile('README.md')
  }
  
  clearHistory() {
    this.history = []
    this.elements.outputContainer.innerHTML = ''
  }
  
  catFile(fileName) {
    if (fileName in fileSystem) 
      this.addHistory(fileSystem[fileName])
    else 
      this.addHistory(`cat: ${fileName}: No such file or directory`)
  }
  
  scrollToBottom() {
    this.elements.terminal.scrollTop = this.elements.terminal.scrollHeight
  }
  
  addHistory(output) {
    this.history.push(output)
   
    var outputText = document.createTextNode(output)
    let outputEl = document.createElement('pre')
    
    outputEl.classList.add('output')
    outputEl.appendChild(outputText)
    
    this.elements.outputContainer.appendChild(outputEl)
  }
  
  listFiles(dir) {
    const output = Object.keys(fileSystem).reduce((acc, curr, index) => {
      const deliminator = index % 3 === 0 && index !== 0 ? '\n' : '\t'
      return `${acc}${curr}${deliminator}`
    }, '')
    
    this.addHistory(output)
  }

  // whoami(){
  //   this.elements.outputContainer.innerHTML = 'hello man'
  // }

  clearInput() { this.elements.input.value = '' }

  onKeyDown(e) {
    // Only respond to Enter key presses
    if (e.keyCode !== ENTER_KEY) return
    
    const inputText = this.elements.input.value
    const inputArray = inputText.split(' ')
    const inputCommand = inputArray[0]
    const arg = inputArray[1]
    
    this.addHistory(`${this.prompt} ${inputText}`)
    this.clearInput()
    
    if (inputCommand === '') return

    const command = this.commands[inputCommand]
    
    if (command)
      command(arg)
    else
      this.addHistory(`sh: command not found: ${inputCommand}`)
      
    this.scrollToBottom()
  }
  
}