# This formed the basis for the [Characteristiq](https://characteristiq.now.sh/) app entered into the [2020 Lambda School Winter Hackathon](https://youtu.be/MbWPI9SYvks).




# OpenJungTypes
An implementation in Javascript of the Open Extended Jung Type Scales. The items of the Open Extended Jungian Type Scales 1.2 are licenced under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License by [openpsychometrics.org](http://www.openpsychometrics.org).


# Goals
- Utilize the Open Extended Jungian Type Scales dataset to create a Meyers-Briggs-like testing method via JS/React/Node

- Develop an API to serve the dataset (the set is small enough to be a local json object with an optional update function)

- Develop enough questions to randomize

# Methodology

- Conversion: ~~Extract question dataset from inline script (strings are loaded in a header script in a var called "itempool") and format as JSON.~~ (only 32 questions have been selected as stable, the remaining questions are in beta, specs only recommend use of the 32 selected questions for the api; these 32 are not the ones in `itempool`)
    
- Selection:  Select 60 questions on start (randomly?  we might need to see what criteria the inline script uses to ensure proper balancing)
    
- Algorithms:  Grading algos are in http://openpsychometrics.org/tests/OEJTS/development/
    
- Stretch:  ~~Allow choice between full (60 question) or Brief (shortened test using smaller dataset, see                   http://openpsychometrics.org/tests/OEJTS/development/ )~~ (see "Conversion" above)
    
   Allow choice of how many questions are on screen (5, 10, 25, ALL)
    
   Expand JSON to include connections between the questions and their indicators using https://blog.kumu.io/how-to-build-a-blueprint-1f05ad93e5d5 to render a visual map of the question matrix.
    
    


# Resources

Styling:

[Lambda School Style Guide](https://go.lambdaschool.com/brand/styleguide)

Testing Method:

[Introduction and Testing Method](https://openpsychometrics.org/tests/OEJTS/)

[More in Depth Development History](http://openpsychometrics.org/tests/OEJTS/development/)

[OEJTS v1.2 Specifications, Question Set 1 and Algos](https://openpsychometrics.org/tests/OEJTS/development/OEJTS1.2.pdf)

Question Datasets:

[Table of Question Set 1](https://openpsychometrics.org/tests/OEJTS/1.php)

[Question Set 2 items in header script under var 'itempool'](https://openpsychometrics.org/tests/OEJTS/2.php)



