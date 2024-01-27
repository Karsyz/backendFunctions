exports.getFaqs = async (req, res) => {
    const faqs = [
    {
      question:'Is this a good product?', 
      answer:'Absolutely! We only sell the highest quality products.'
    },
    {
      question:'How much does it cost?', 
      answer:'You better bring a big bag of money.'
    },
    {
      question:'When can I get it?', 
      answer:'As soon as payment is received in full.'
    },
    {
      question:'Is shipping included?', 
      answer:'Standard shipping is $5.99 to anywhere in the lower 48 states.'
    },
  ]


  try {
    res.status(200)
    res.send({
    msg: "Here's your faq list bud.  Have a good one eh!",
    data: faqs,
  })
  } catch (error) {
    console.error(error)
  }
}