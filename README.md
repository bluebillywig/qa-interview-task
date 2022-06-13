# Blue Billywig - QA Challenge

At Blue Billywig we build and maintain a wide array of projects across various platforms, which all have different requirements.
This challenge presents 3 common, simplified scenarios:

- An Angular component handling some form logic 
- A NodeJS program that performs some algorithm and handles I/O
- A simple web page with an embedded video player

For each of these there's a separate task.

## Notes

- Make a fork of this Git repository before you start working on the task.
- Commit early, commit often: Let us see how you solve the challenges step-by-step. Frequent commits and clear commit messages are a good way for us to get an idea of your thought process.
- Try to not spend more than 5 hours solving this at most. Write down what your solution would be if you had more time, or where you ended up taking shortcuts to save time.
- It's more important to have done parts of the challenge fully, than to have everything barely working. It's alright if you don't finish everything!

## Challenge

Using any tooling you prefer, do the following:

### Angular Component 

- Run the project (`cd angular && npm install && npm run start`) and test the page at http://localhost:4200, write down your findings on how the page functions
- Construct a set of requirements that an engineer could have read to build this page 

### Blue Billywig Player 

- Automate a test that verifies that the HTML5 video element enters the playing state when the big play button in the center of the player is pressed
- Automate a test that verifies that the HTML5 video element toggles it's muted state when the mute button is pressed

### FizzBuzz

The script at `fizzbuzz/index.js` should be able to

- Accept numbers interactively by invoking the program directly: `node index.js`
- Accept numbers separated by a newline from a piped input, for example `node index.js < some-file` or `seq 1 100000 | node index.js`
- Write the results to stdout so they can be piped out, for example `node index.js < list-of-numbers.txt > results.txt`
- Handle non-integer inputs by ignoring them, meaning that `seq 1 100 | node index.js | node index.js` should return all non-FizzBuzz numbers
- Correctly determine FizzBuzz for each input

Write a set of automated tests that verify that those requirements are met

Good luck!
