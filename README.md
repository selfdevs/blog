# How to write a new blogpost:

**Example:**
In this case I want to write something about blockchain with the title *Are NFTs the biggest scam of 2022?"*

1. I will start a Pull-Request on this repository and create a new .mdx file in the right folder which you want to write a blog post about.

2. Since I want to add to blockchain, I will add a new file in the blockchain folder like this:
	
	```content/blockchain/are-nfts-the-biggest-scam-of-2022.mdx``` 
	
3. Then I only need to copy one of the other .mdx files and start my own blog post. But since I am such a smart dude I copied the template down below already:
	```
	---
	title: 'Are NFTs the biggest scam of 2022?'
	description: 'People make millions out of NFTs and today I am discussing if it's just another ponzi scheme or comes with a future.'
	---

	<YOUR CONTENT IN MARKDOWN FORMAT>
	```
	The most important part are the title and description (summary of your blog post) properties.


#### How to add images:

If you want to add a local image, you will need to add it under `content` in `images`:
	
	```/content/images```

This is how to add that local image into your .mdx file then:

```![Screenshot](blog/content/images/<YOUR_FILE>.png?raw=true)```

Here is a [markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#images)
