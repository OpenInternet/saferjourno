+++
type = "report"
title = "BETA NOT FOR PRODUCTION Chapter 8: Using AI securely"
layout = "single"
weight = 9
toc = false
+++


**This document is a beta version. It is not yet ready for production or to be shared with at-risk individuals. If you see something we could improve, please let us know or submit a pull request**

## Introduction

Journalists are starting to use AI (artificial intelligence) and LLMs (large language models) in their work. They could be using them for research, audio transcription, translation, and many other things. AI tools are new, and many of them are not yet ready to deal with highly sensitive information such as source names or confidential research.

This chapter will cover:

* The differences between on-device and cloud-based AI
* AI logs, enterprise AIs, and histories
* AI hallucinations and AI poisoning

## Training journalists for the first time?

The following can be helpful to keep in mind:

* Journalists will often use individual or free tiers of online services, including AIs, for their work. It is rare for them to be purchasing enterprise versions of such services.
* Attitudes towards AI might radically differ among newsrooms and journalists. While some might willingly integrate it into their workflows and try to use it to boost their productivity, others might be reluctant to use generative AI over copyright, environmental, and other concerns.
* Many AI tools, such as chatbots, continue to develop quickly and change their functionality and settings regularly. Journalists will rarely have time to keep up with such developments, and might rely more on security professionals, whom they'll expect to be researching such changes.

## Training AI security for the first time?

### Distinguishing between on-device and cloud-based AI

* When an AI system processes your data, for example to answer a query or transcribe spoken audio, it could do so either on your device or in a cloud. This is a bit like word processing: you could use an application that just saves to your desktop, or cloud-based one.
* On-device AIs do all of the processing on your mobile or desktop device, and typically do not send queries back to the provider. One easy way to tell if an AI is on-device is to check if it fully works when the device it's on is disconnected from the internet.
* On-device AIs offer the best privacy guarantees, though they could still reveal logs or other details if someone, such as an abusive partner or security officer conducting a search, looks through the device.
* It's often possible to use an on-device LLM to process highly sensitive data, though this might require some initial set up.
    * If this is of interest to you, reach out to a digital security trainer or IT person who could help set up such a system.

* Cloud-based AIs process data on a company's servers. This data will be used, stored, and shared in accordance with that company’s privacy policy–that’s why it’s important to read and regularly review those policies. Cloud-based AIs are often more capable than on-device AIs, since they can rely on more data and computing power.
* Some manufacturers are building hybrid AI systems. Those might rely on on-device capabilities for some tasks and cloud capabilities for others. A well-designed hybrid AI should warn and ask the user for permission prior to uploading any of their data to the cloud.
* The AI landscape remains new. Tools, capabilities, and privacy guarantees are constantly changing. It’s important to regularly check back and see what processing happens on-device, what happens in the cloud, and what the cloud provider’s privacy promises are.

### Cloud-based AIs, logs, and some recommendations

* Some cloud-based AI tools and chatbots will keep logs of conversations and data you share with them. Such logs could be stored by the AI provider, used as training data for future AI systems, and sometimes be read by human reviewers.
* If the organization stores, processes, or otherwise uses logs, then there's a chance that any sensitive data you type into AI tools or chatbots could leak out one day, especially if those logs have then been used for training data. It’s therefore important to read your AI provider’s privacy policy to understand how they manage your data.
    * AIs are quite new, and research on potential data leaks is still ongoing. There's a worry that, if your prompts are being used to train future AI models, that an attacker could try to retrieve those prompts with cleverly crafted queries, for example by asking what sorts of questions or topics a journalist researching corruption in a specific country should consider. Similarly, attackers could potentially creaft scripts or queries which retrieve specific phone numbers, email addresses, passport numbers, names, and other valuable information stored in training data.
    * 
* For examples of AI privacy and data access policies, check out those of [Google Workspace Gemini](https://support.google.com/a/answer/15706919?) or of [Microsoft 365 Copilot](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy). Check which tier or version of the software you are using. Many providers will have a separate enterprise or business tier which offers additional protection, such as not using your data for AI training.
* Free or basic paid tiers might not have all of those protections, which could potentially allow others to access your chat logs or histories. All depends on which provider you're using.
* If you have AI chatbot conversations, and are using an enterprise or business tier of the AI software, you can often adopt the same security mindset as with documents stored on a cloud-based platform such as Google Docs or O365. You can use it for somewhat sensitive work and research but never use it for confidential information such as source names, or for cases in which the AI provider (or the country they are based in) is explicitly part of your threat model.

* We strongly recommend that newsrooms use a single AI provider (or, if that’s not possible, as few providers as possible), that they subscribe to the enterprise rather than free tier, and that they require all journalists to use that provider for work-related matters.
* It takes effort to keep track of different providers’ security settings and configurations, pay for professional packages, and check policies to ensure that those do not keep, share, or publish logs. The fewer there are, the easier the task becomes. A newsroom’s system administrator might also be able to configure your work-issued AI systems to align with your privacy, security, and jurisdictional needs.

### Chat memory and history

* Many AI systems offer the possibility of saving chat histories, including prompts and replies. This could be helpful, but might also expose additional information if anyone ever received access to the account or if it was shared between several people. Browse through the features of the chatbot(s) you’re using and learn how to enable, disable, and delete history.
* If your threat model includes potential seizure, theft, or any other unauthorized acquisition of any device that can access AI chat history, also consider deleting any chatbot history frequently, or at least every time the device can be compromised, like in risky border crossings or during field coverage in sensitive contexts.

### Hallucinations and AI poisoning

* AIs that rely on LLM technology (which includes all current chatbots) frequently *hallucinate*: they can make up facts, incorrectly summarize websites, and reference non-existing resources. Always check their output to make sure it’s accurate.
* There are no easy rules for verifying AI outputs or figuring out when exactly they hallucinate. We recommend thoroughly reading through their responses and fact-checking them independently. Asking an AI to fact-check or confirm its previous statement is _not_ a reliable method for verifying its output.
* Remember that AIs do not reason; they use statistical models to output information which they consider to be the best response to a query. Every model works differently. Take some time to figure out how to best tweak your prompts and become productive with it.
* Disinformation actors can also [generate large amounts of disinformation content](https://www.atlanticcouncil.org/blogs/new-atlanticist/exposing-pravda-how-pro-kremlin-forces-are-poisoning-ai-models-and-rewriting-wikipedia/) in the hope that it is picked up and quoted by chatbots and other AI systems (this practice is often called AI poisoning). Such attacks are likely to increase in frequency, which makes it even more important that we take steps to critically read and verify any AI outputs.  

## Completing the risk assessment and deciding what to use AI for

Your AI risk assessment should include a list of all of the AI tools you are using and their providers. "AI" can be difficult to define, as it's often more of a marketing term than a technical one. You should definitely consider tools used for translation, transcription, proofreading and grammar correction, and any chatbots you use.

For each of those tools, spend a moment to research the following:

* Who is the manufacturer or provider of that tool? What is their track record in terms of privacy and security?
* Does the tool run on-device or in the cloud?
* Which version or tier of the tool are you using? Are you using a free tier, a business tier, or an enterprise tier?
* What are the privacy policies of the tool and tier you are using? Does the tool, at the tier at which you're using it, share conversation logs or other data with the provider? Is such data reviewed by humans or used for training?

If the tool you are using shares conversation logs or other data with the provider, then only use it for very basic research or tasks. Use it with the assumption that, if your queries were leaked or accessed by others, they would not reveal any meaningful information about your investigation or sources.

If the tool you are using is cloud-based but does not share logs or other data with the provider, then it's typically safe to use for medium-sensitive non-public work. Data could potentially leak out if someone were to break into the AI provider's systems, which happens incredibly rarely, or if a court or other authority compelled this provider to share your data.

If you want to use AI for very sensitive data, for example for help with transcribing a conversation with a source or summarizing confidential confidential documents, avoid cloud-based solutions. Only use on-device, offline tools. It might be worth consulting with some digital security or IT professionals who could help you with setting up such tools.