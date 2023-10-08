exports.getIndex = (req, res) => {
  res.status(200)
  res.send({
    msg: 'hey, this is a response from backendFunctions',
    data: ['data usually goes here or something, i dunno.  Here is a string in an array for now.', 'TBH, I just build this server / api because I was bored one Sunday and needed the practice making things.', 'The backend is a Node/Express server.  It is very very simple, as it should be really.', 'Anyways, I am not going to ramble on anymore than I have to, but I did want to welcome you to my humble api.', 'Hit the endpoint /stuffToDo for more info maybe as time goes on.', 'Hopefully I will add more to this api later on.', 'Maybe make a react frontend for this and make each of these strings in this array sentences in a paragraph or something, I dunno.  Have some fun with it.'],
  })
  
}