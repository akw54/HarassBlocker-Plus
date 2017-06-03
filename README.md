# HarassBlocker-Plus
## Inspiration
We were inspired by "AdBlock Plus," a content filter for annoying advertisements; to create "HarassBlocker Plus," our take on content filtering for harassment. This serves as an end-all solution to online harassment as the user will not be affected any longer. Social media was most frequently cited as the scene of online harassment, so this is where we decided to try our platform first. We believe this solution will greatly imporve ones mental health if they are experiencing harassment.
## What it does
We built this platform which can be easily expanded to other websites (or the entire web) to completely eliminate all forms of online harassment. As a use case, we added this platform to filter Facebook's Messenger. While a messaging session is active or loaded, we listen for new and existing messages and automatically filter out any ones deemed harassing. Online Chats are one of the most common places to find harassment, thus it was a great first example of our platform in use.
## How we built it
We built it on a chrome extension that can now be installed from the chrome app store. Currently, the chrome extension is looking for new or loaded messages on facebook and filtering them. When messages are loaded we pass them to our Node.js server and run IBM Watson's Tone Analyzer api on it. Tone Analyzer will give us a quick understanding of the overall message, this way we can tell the difference between a message intended to be a joke compared to one that is insulting. Using the metrics received from Watson we made our own neural net which does one more pass to fully determine if that message should be filtered out. Once we deem a message to be harassing we block that message from view. We have also added safeguards such as the ability to pause/disable the filtering with a button in the extension window which is the only other way to view the messages other than uninstalling the extension.
## Challenges we ran into
Currently this extension is only supporting content filtering on Facebook and one challenge would be expanding this platform to many/all websites a user visits. This is a matter of creating one algorithm for all websites or many different algorithms. The algorithms we use currently are fast enough to filter any chat messages without much delay but messenger is a small amount of content compared to other cases. 
## Accomplishments that we're proud of
With the ability to filter all harassing content from the web, this serves as the #1 platform for somebody experiencing harassment online. It can potentially save people from many of the side effects of being harassed.
## What we learned
We did a lot of research on online harassment and learned many things, here are a few things that we learned:
* 40% of internet users have personally experienced online harassment.
* Young adults are the most likely demographic group to experience harassment online. 
* Men and women have different experiences with online harassment.
* Half of those harassed online do not know who is behind it.
* Social media was most frequently cited as the scene of online harassment.
## What's next for HarassBlocker Plus
We would like to improve the machine learning to better detect harassment. We plan to build out this platform so it can be implemented for any website. Make a public release on the chrome store.
