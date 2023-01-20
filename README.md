### Pages folder
Components that has their own routes.
a. browser-router uses the HTML5 history API to keep our user interface in sync with the url -> /about
b. hash-router uses the hash portion of the url to keep it in sync -> /#about
## In FeedbackItem.jsx
### import { FaTimes } from 'react-icons/fa'
importing a specific icon named 'FaTimes' from 'Font Awesome Package'.
### The 'FaTimes color='purple' tag
The value of the button will be a × with purple color.
## In RatingSelect.jsx
### +e.currentTarget.value
The current rating number that is selected, will be change from string to number. The + is for typecasting.
## In FeedbackForm.jsx
### e.preventDefault()
It prevents the default action of a submit, which is submitting to an actual file.
