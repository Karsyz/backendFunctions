exports.getIndex = (req, res) => {
  res.status(200)
  res.send({
    msg: 'hey, thanks for checking out backendFunctions',
    data: ['data usually goes here or something, i dunno.  Here is a string in an array for now.', 'TBH, I just build this server / api because I was bored one Sunday and needed the practice making things.', 'The backend is a Node/Express server.  It is very very simple, as it should be really.', 'Anyways, I am not going to ramble on anymore than I have to, but I did want to welcome you to my humble api.', 'Hit the endpoint /stuffToDo for more info maybe as time goes on.', 'Hopefully I will add more to this api later on.', 'Maybe make a react frontend for this and make each of these strings in this array sentences in a paragraph or something, I dunno.  Have some fun with it.', 'there should be a post request x-www-form-urlencoded version for most of these that you can use with a fetch or form data'],
  })
  
}

exports.stuffToDo = (req, res) => {
  res.status(200)
  res.send({
    msg: 'darn',
    data: [
      "Sorry there isn't much to show here yet", 
      "Try adding a couple numbers together with /add/#/# ", 
      "/echoValue/ssssssssssssssss, takes in a string and then echos it back to you",
      "/makeTitleCase/ssssssssssssssss, takes in a string and converts it to Title Case Where Every Word Is Capitalized",
    ]
  })
  
}


exports.getAddNums = (req, res) => {
  const num1 = +req.params.firstNum
  const num2 = +req.params.secondNum
  const result = num1 + num2

  res.status(200)
  res.send({
    msg: 'I added some some numbers for you',
    data: result,
  })
  
}

exports.postAddNums = (req, res) => {
  const num1 = +req.params.firstNum
  const num2 = +req.params.secondNum
  const result = num1 + num2

  res.status(200)
  res.send({
    msg: 'I added some some numbers for you',
    data: result,
  })
  
}



exports.postEchoValue = (req, res) => {
  const value = req.body.value || "i guess you didn't send anything..."
  res.status(200)
  res.send({
    msg: "This function will echo whatever you send to it",
    data: value,
  })
}

exports.getEchoValue = (req, res) => {
  const value = req.params.value || "i guess you didn't send anything..."
  res.status(200)
  res.send({
    msg: "This function will echo whatever you send to it",
    data: value,
  })
  
}

exports.postMakeTitleCase = (req, res) => {
  const string = req.body.value || "i guess you didn't send anything..."
  const title = string
    .split(' ')
    .map(e => e.slice(0,1).toUpperCase() + e.slice(1, e.length).toLowerCase() ).join(' ')

  res.status(200)
  res.send({
    msg: "Here's your title bud",
    data: title,
  })
  
}

exports.getMakeTitleCase = (req, res) => {
  const string = req.params.string || "i guess you didn't send anything..."
  const title = string
    .split(' ')
    .map(e => e.slice(0,1).toUpperCase() + e.slice(1, e.length).toLowerCase() ).join(' ')

  res.status(200)
  res.send({
    msg: "Here's your title bud",
    data: title,
  })
}



