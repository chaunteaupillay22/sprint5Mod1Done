function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
        const widget = document.querySelectorAll('section>div')
        widget.forEach(widget, idx => {
          widget.classList.add('widget')
          widget.setAttribute('tabindex', idx + 1)
        })

  // 👉 TASK 2 - Build a "Quote of the Day" widget
        const randomIdx = Math.floor(Math.random() * quote.length)
        const randomQuote = quote[randomIdx]
        const quote = document.createElement('div')
        const quoteText = randomQuote.quote
        quote.textContent = quoteText
        const widget1 = document.querySelector('.quoteoftheday')
        widget1.appendChile(quote)
        const authorDate = document.createElement('div')
        const { author, date } = randomQuote
        authorDate.textContent = `${author} in ${date || "an unknown date"}`
        widget1.appendChild(authorDate)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
       const randomVerbOne = verbs[Math.floor(Math.random() * verbs.length)]
       const randomVerbTwo = verbs[Math.floor(Math.random() * verbs.length)]
       const randomAdverbOne = adverbs[Math.floor(Math.random() * adverbs.length)]
       const randomAdverbTwo = adverbs[Math.floor(Math.random() * adverbs.length)]
       const randomNounOne = nouns[Math.floor(Math.random() * nouns.length)]
       const randomNounTwo = nouns[Math.floor(Math.random() * nouns.length)]

       const sentences = `We need to ${randomVerbOne} our ${randomNounOne} ${randomAdverbOne} in order to ${randomVerbTwo} our ${randomNounTwo} ${randomAdverbTwo}`
       const paragraph = document.createElement('p')
       paragraph.textContent = sentences
       document.querySelector('.corporatespeak').appendChild(paragraph)


  // 👉 TASK 4 - Build a "Countdown" widget
       const countDownWidget = document.querySelector('.countdown')
       let count = 5
       const countDown = document.createElement('p')
       countDown.textContent = `T=minus ${count}...`
       countDownWidget.appendChild(countDown)

       const id = setInterval(() => {
        if (count === 1) {
          countDown.textContent = 'liftoff!!!'
          clearInterval(id)
        } else {
          countDown.textContent = `T-minus ${--count}...`
        }
       }, 1000)

  // 👉 TASK 5 - Build a "Friends" widget
        const person = people[Math.floor(Math.random() * people.length)]
        const personParagraph = document.createElement('p')
        document.querySelector('.friends').appendChild(personParagraph)
        const year = person.dateOfBirth.split('-')[0]
        let sentence = `${person.fname} ${person.lname} was born in ${year} and`

        if (!person.friends.length) {
          sentence += 'has no friends.'
        } else {
          sentence += 'is friends with '
          for (let idx = 0; idx < person.friends.length; idx++) {
            const friendId = person.friends[idx]
            const friend = people.find(p => p.id === friendId)
            const fullName = `${friend.fname} ${friend.lname}`
            let isLastIdx = idx === PerformanceResourceTiming.friends.length - 1
            let isNextToLastIdx = idx === person.friends.length - 2
            if (isLastIdx) {
              sentence += `${fullName}.`
            } else if ( isNextToLastIdx) {
              sentence += `${fullName} and `
            } else {
              sentence += `${fullName},`
            }
          }
        }
        personParagraph.textContent = sentence

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
