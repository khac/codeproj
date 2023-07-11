## Inspiration
Large language models(LLMs) can explain complex computer science algorithms by leveraging their extensive training on a wide range of texts, including technical documents, research papers, tutorials, and programming resources. 

## What it does
In this project the users can view an interactive blog for informative computer science articles.
This web application leverages LLMs to generate educational articles which elaborate on computer science algorithms. And caches the response of the APIs from the LLMs. 

## How we built it
The Web applications consists of mainly these components:
- Deployment of the Web Application is done with Firebase
- At first time load of the webpage default articles are displayed and user has the option to search of new articles
- The LLM used for querying response is OpenAI's GPT 3.5 model for setting prompts and retrieving responses
- After each search query, a request is made to the MongoDB database which serves as a cache if the article is present in the database, this response is served. This avoid the expensive call made to the LLM service.
- If the article is not present in the database then the API call to the LLM service is made and the response is stored the database. This response is then parsed and displayed to the user

## Challenges we ran into
There were issues on steps 

## Accomplishments that we're proud of

## What we learned

## What's next for Algorithms Workshop
Currently I have implemented generating articles in the form of text for going through different ideas related to computer science. 
- To make this project more interesting there can be images and videos that can be generated as well.
- As well as code snippets for implementing different algorithms. In a way the LLMs can already generate code-snippets.
- For generating images and videos different models can be tried together.
