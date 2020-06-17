/* 
Naomi Wildeboer
June 15, 2020
test 2
*/

// This function returns a random number between (and including both) minimum and maximum
function getRandomInteger (minimum, maximum) {
  minimum = Math.ceil(minimum) // minimum is inclusive
  maximum = Math.floor(maximum + 1) // maximum is exclusive so we add one
  return Math.floor(Math.random() * (maximum - minimum)) + minimum
} 

// Povided Arrays
const nouns = ['Pam', 'Dunder Mifflin', 'battlestar galactica', 'bear', 'Dwight', 'Schrute Farms', 'beet', 'Scranton', 'Michael Scott', 'paper', 'board room']

const verbs = ['Count', 'ran', 'meet', 'fight', 'compete', 'dance', 'gossip', 'declare', 'propose', 'work']

const adverbs = ['angrily', 'intentionally', 'loudly', 'creepily', 'frantically', 'sarcastically', 'secretly', 'quickly', 'romantically', 'lazily']

const adjectives = ['self-absorbed', 'short', 'sleepy', 'quaint', 'playful', 'obnoxious', 'hungry', 'oblivious,', 'awkward', 'unaware']

const proNouns = ['they', 'we', 'you', 'he', 'she', 'I', 'it']

const openings = ['Once upon a time,', 'I watched', 'In a galaxy far far away,', 'Pam! Pam! Pam!', 'One morning,', 'Back at Schrute Farms,', 'Meanwhile, at the office ', 'Down in the warehouse,', 'Everyone shuffled into the conference room', 'It was 5, time to go home!' ]

const closings = ['with extra cheese', 'the end', 'Goodnight everyone', 'And that\'s how Dwight became a father', 'Creed ran out of the room', 'How the turn tables', 'It was a prank all along', 'And so the day ended', 'Then everyone went to Poor Richards for a drink', 'And they all lived happily ever after']

function createRandomSentence(){
  const randomSentence = openings[ getRandomInteger(0, openings.length - 1) ] + ' ' +
    adjectives[getRandomInteger(0, adjectives.length - 1)] + ' ' +
    nouns[getRandomInteger(0, nouns.length - 1)] + ' ' +
    proNouns[getRandomInteger(0, proNouns.length - 1)] + ' ' +
    verbs[getRandomInteger(0, verbs.length - 1)] + ' ' +
    adverbs[getRandomInteger(0, adverbs.length - 1)] + ' ' +
    closings[getRandomInteger(0, closings.length - 1)] + '\.'
  return randomSentence
} 

function outputSentence( sentence){
  console.log('\n')
  console.log(sentence)
}

const numberOfSentences = 10

for(let i = 0; i < numberOfSentences; i++){
  outputSentence(createRandomSentence())
}

// Instructions:

// Arrays:
// Each provided array (except for proNouns) must have at least 10 elements (words or phrases)
// Add/replace words to each array based on any theme you like (keep it tasteful!)
// You do not have to use the example words in any of the provided arrays

// Functions:

// First function:
// Create a function that outputs the text/value sent to it using console.log()
// There should be a newline ("\n") both before and after the value is output
// Name this function appropriately
// Note this function does not return any value

// Second function:
// Create a function that builds a sentence using the 7 provided arrays
// Using the provided getRandomInteger function you will randomly use content from each array based on the random number returned by getRandomInt.
// Because you are using an array the minimum value should always be zero
// The maximum value should be the array length - 1

// The sentence created (concatinated) inside this function should be structured like this:
//      Get a random element from the openings array and add it to your new sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the adjectives array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the nouns array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the pro_nouns array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the verbs array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the adverbs array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the adjectives array and add it to your sentence
//      add closing punctuation.

// Note Feel free to re-arrange your sentence as you wish, just make sure you use the 7 provided arrays
// Note add more arrays if you wish

// Name this function appropriately
// This function should return the completed sentence

// Program Flow:

// inside a loop that repeats 10 times

// Your program will call the "sentence creating" function that you are required to build
// using a new variable you will capture the returned value (the sentence) from this function. Name this variable appropriately

// next you will send this variable to the other function you created used for output
// this will result in your random sentence being output.

// Other considerations:
// Everyones code should be different
// This is a fun exercise so... have fun!

// Submission
// Submit your GitHub repo URL through the LMS.


// add the words to arrays

// Create a function that creates a random sentence 
// Does this function require any parameters: no
// Does the function need to return anything: yes a new random sentence 
// How do you create a random sentance?

// Create a function that outputs some text
// Does function require any parameters: yes, the text to output
// Does this function need to return anything:  no

// execute a loop 10 times 
// each cycle of the loop will create a new random sentence and then output it

