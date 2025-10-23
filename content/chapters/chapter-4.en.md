+++
type = "report"
title = "Chapter 4: Safer online research"
layout = "single"
weight = 5
toc = true
aliases = ["/en/chapter-4"]
+++

## Introduction

Journalists are often unclear about who is monitoring their online activity and how the data that is being collected can be used against them and their sources. This chapter is designed to help them understand who can access their information and provide them with concrete steps they can take to reduce this risk.

This chapter will cover:

- Thinking about individual risk when carrying out online research
- How information moves around the internet
- Who is collecting online data and how it can be used against the media
- The different ways that people can obtain a journalist’s online data
- Best practice for carrying out safer online research

## Training journalists for the first time?

The following can be helpful to keep in mind:

- Once journalists get an idea for a story, they will start to do online research and they often will not have put digital security practices in place. Journalists will not always do a risk assessment prior to beginning the research of a story.
- It is often unclear to journalists who is able to track their online activity and what data is being collected on them. Trainers may want to use local case studies to show how companies and governments are obtaining data on people.
- Some stories may become riskier as they evolve, leaving journalists and their sources vulnerable to digital intrusion or attack. For this reason, it is important for the journalist to revisit the risk assessment throughout.
- Journalists are often short on time and will not be able to dedicate time to trying out new tools, especially ones that are overly technical.
- It is common for journalists to use online tools because they have been told they are more secure without understanding why they are safer; this can create a false sense of security.

## Training digital security for the first time?

This section covers best practice that can be used when teaching the activities in this chapter. See the [resources](#resources) section in this chapter for further reading.

_General best practice_

- Carry out a risk assessment prior to starting any online research. Ask the journalists to identify whether they may be visiting any websites that may pose a security risk for them, such as websites run by criminal organisations, or where they want to keep their identity hidden for other reasons, for example when visiting the sites of companies they might be investigating. Ask them what specifically they are worried about (the site breaking into their device? The site learning too much about them?). Different risks require different mitigations, but always remind participants to keep their web browser up to date (you can usually check this in the browser's "about" box). Some websites can contain malicious content which will try to exploit security holes in browsers. Those security holes are usually patched during software updates, so keeping your browser up-to-date is one of the best things you can do for your security.
- When you visit a website you should ensure that the site is encrypted, or that it uses HTTPS.
  - In the past, a minority of connections to websites were encrypted. Nowadays, pretty much every connection with a reputable site is encrypted. Most web browsers will now display a warning if you are trying to connect to a site that does not use HTTPS. This might take the form of a warning next to your address bar.
  - When your connection with a site is encrypted, internet service providers and others might **know that you're on the page but not what you're doing there**. For example, they can see you are connected to your email provider but they will not be able to read your emails. They might know you're on Wikipedia but not which article(s) you are reading. They might still be able to figure out approximately how much time you have spent on the site and how much data you transferred from it.
- HTTPS prevents your internet service provider, the hotel or coffee shop where you connect to the WiFi, or your mobile provider from figuring out the content of the pages you're browsing, what passwords you are typing in, and what emails or Drive documents you are accessing. It does not prevent the site itself from tracking you; for that, we need some other protections, described below.
- Website owners are able to see what IP addresses are visiting their website. Each device connected to the internet is given a unique number known as the Internet Protocol (IP) address. This number is allocated by your internet service provider, the company that provides you with your internet.
  - There are several things somebody could figure out based on your IP address. Your IP address could reveal your rough location such as your city. For bigger organizations, such as a corporate newsroom, the IP address could even be used to identify the specific organization, as office blocks or big organizations might be using well-known or fixed IP ranges.
  - Your internet service provider, and by extension the government, could figure out which _subscriber_ which IP address belongs to. A subscriber could be an individual, or an entity like a small office or coffee shop.
  - IP address tracking could be a problem for journalists who do not want the website owner to know that they have been looking at information on their site. If a journalist wants to hide their IP address from a website then they should use a Virtual Private Network (VPN). For more information on this specific risk model and on VPNs, see the section below.
- In addition to IP addresses, website owners can also see basic data about a system, such as its screen resolution, software version, or which fonts it has loaded. This practice, called browser fingerprinting, could be used to identify machines belonging to particular organizations or even individual users. Several web browsers are now implementing anti-fingerprinting protections, with the Mullvad Browser and the Tor Browser (the latter described in more detail below) offering some of the most advanced ones.
- Website owners can also use cookies to track users, see how often they visited a website, and potentially gain some insights into their other web activity. When teaching digital security, you can use the example of remarketing (when you viewed a product on a website and see ads for it afterwards) to explain how tracking cookies could be used to profile you and find out information about you. The easiest mitigation for tracking cookies is to browse in private/ incognito mode, which deletes such cookies when the user closes the window.
- Encourage journalists to install a reputable ad blocker like [uBlock Origin](https://ublockorigin.com/) to protect against malware delivered through online ads. This may not be an option for them if they are working in a newsroom which does not permit ad blockers or browser extensions.
- With the exception of an ad blocking extension and your password manager's autofill extension, it's best to install as few extensions as possible on the same browser you use for sensitive work. Browser extensions can often see the contents of all the web pages you are browsing—if the extension were compromised or sold, its authors might be able to steal your information. If you need to install extensions for work, it's best to do so on a separate browser which you do not use for sensitive work or logins: a compromised or malicious extension will usually only be able to extract data from the browser where it's installed and enabled.
- Avoid using public computers, including at press events. They may be infected with malware or spyware, or extensively track users in other ways, and could therefore gain access to your account even if you follow security best practices. If you absolutely need to use a public computer and are comfortable with the risks thereof, then log in through a new private browser window (which automatically logs you out and deletes history and cookies upon closing). Once you're back at a computer you trust, such as your work or personal machine, change the password and click "log out of all sessions" for all accounts you logged into on this public computer. (If you logged in through a QR code and a passkey stored on your smartphone, there's no need to change or delete that passkey afterwards. That's because the computer never "sees" the private portion of your passkey, which is just stored on your smartphone. You should still use the "log out of all sessions" feature on your smartphone or a trusted machine once you're done, just in case.)
- Consider using a separate computer for sensitive research. This will help compartmentalise data so that, if the device is infected, the attacker will have limited access to content.
- Journalists carrying out research on online groups who need to sign up to forums or chat rooms should create a new email address specifically for that. The email address should contain no personal data that could identify the journalists and when registering the account. It is recommended that the journalist seek the support of a digital security professional for assistance.
- Journalists carrying out highly sensitive research may want to use the [Tor Browser](https://www.torproject.org/download/). It is recommended that they seek the guidance of a digital security professional before doing so. They should also be aware of the law in their country regarding the use of Tor.

_Data and companies_

- Internet Service Providers (ISPs), the company that provides internet coverage for your home or office, collects a significant amount of online data, including browsing history and location information. Telecommunications companies provide users with mobile phone data and internet service. They likewise collect a large amount of data on users, including phone logs, SMS messages, location data, and internet browsing history. How long they keep this data for and who they share that data with depends on the laws of each country. To research this, carry out a keyword search using the name of the country and terms, such as data retention, telecommunications laws, and customer data.
- Tech companies also keep a significant amount of online data on users, including user names, direct messages, documents, photos and more. This data is retained according to the terms and conditions of the company which can be reviewed on their website. Tech companies receive requests from governments to access user data which they may or may not comply with. To check this, journalists should review annual transparency reports released by the major tech companies. These can be found on their websites or by carrying out an online search using the name of the company plus the keyword, transparency report.
- Websites collect data on the people who visit their site, including the IP address which gives away approximate location, details about the make of the device visiting the site, including the operating system and time zone. To best protect against this, use a VPN and a browser such as Mullvad Browser which protects against fingerprinting.

_Virtual Private Network (VPNs)_

- A VPN is an encrypted tunnel which connects your device to an online service. When you use it, online services you access will see your VPN's IP address rather than your own. Your ISP will see that you are using a VPN, but will not know what it is accessing. VPN services typically offer servers all across the world; you could be browsing from one country while pretending to be based in another.
- This is useful for journalists who want to avoid having their browsing history tracked by their ISP, for hiding an IP address when visiting websites, or for accessing blocked and restricted pages. A VPN will not work in situations where the government shuts down the internet.
- A VPN is like any other online service online and can collect a significant amount of data on its users. Review the terms and conditions of each VPN to see what data is being collected, where it is stored, what form it is stored in, and whether that data is shared with governments.
- In some countries, VPNs are illegal and using one or having one installed on a device can put the journalist at risk. In those countries, governments may have issued government approved VPNs that can be used. These are not secure and will be collecting personal data on the users, including their browsing history.
- There are a wide range of VPNs available. We recommend [this excellent article by Wirecutter](https://www.nytimes.com/wirecutter/reviews/best-vpn-service/) on how to pick the VPN which works best for you. When choosing a VPN it is important to consider the following:
  - Choose a VPN that does not log the user's browsing history. Do note, however, that some VPNs have lied about their capabilities or privacy promises.
  - Find out who owns the VPN company, where is it based, and where its servers are based. This information can be found on the website of the VPN you want to use. For journalists facing threats from a government, it is best to choose a VPN that is not located in their country or in any country that has close relations with that government.
  - Free VPNs can often contain malware, keep extensive logs, or resell your browsing data or bandwidth. Speak with others on the ground or with digital security professionals to see what VPNs they are using.
  - Does the VPN work in the country you want to use it in or has it already been blocked by the government? Ensure you have a number of VPN options available should one stop working.
- There are cases when you don't want a website owner to know that you are visiting, for example when you are researching and downloading reports from from multinational companies or governments. While relatively rare, IP address logs have [alerted companies](https://web.archive.org/web/20211021091609/https://twitter.com/runasand/status/831266832678010880) to the fact that they are subject to a journalistic investigation. VPNs would help here. As outlined above, it's a good idea to combine them with a fingerprint-resistant browser (such as the Mullvad Browser) or use the Tor Browser when conducting sensitive research.

## Completing the risk assessment

When speaking about the risk assessment and personal security plan it may be helpful to touch upon the following:

- Journalists have a lot of questions around which online service is safest to use and are often looking for a recommendation of the most secure tool. This is not always an easy answer to give because each journalist faces unique risks.
- Journalists may also be using online tools because they have been told they are more secure yet they may not understand why this is the case. This can lead to online services being used incorrectly or in contexts which put the journalists at a higher level of risk.
- The trainer should help the journalist to think about who would be interested in obtaining their browsing data and what the tech, legal and financial capacity of those people are. Journalists should understand that they face risks based on what country they live in, prior threats they have received, as well as the topic of the stories they cover.

<div class="faq">

## Common questions asked

Below are some common questions that journalists ask about account security. It can be helpful to have answers to these prepared in advance.

**Who is able to see my online activity?**

Explain that as data moves around the internet it is collected at various points, including by internet service providers and tech companies. This information can be accessed at the level of the company and can also be subpoenaed by a government. Having a good knowledge of the local context will help the trainer answer this question. For example, what is the law around data retention at companies? Do the police require a court order to access data? How likely is it that tech companies are likely to respond to a request from government officials to hand over data? All of these questions can be very important to journalists, particularly those who are just starting to navigate the space. Explain that who is collecting their data may or may not be an issue for the journalist based on their own risks and the risk associated with a story they are working on.

**What data is my phone company and internet service provider collecting?**

The journalist should be made aware that companies can collect a significant amount of information on users, including call logs, browsing history, and location data. This can put them and others at risk. It may be helpful here to outline some of the data that could be collected but this list should be followed by some practical steps, such as calling and texting through end-to-end encrypted apps like Signal and WhatsApp rather than calling via their cell phone network, that the journalist can use to better protect themselves.

**Is Google safe to use?**

Most major tech companies have robust security in place that protects users from state-based actors and others who may try to access their data. For the majority of people, big tech companies are a good option to use. It is important that the journalist uses the risk assessment to think about who may want to access their data, how much data, including metadata, that company stores, and whether the tech company will hand that data over. They can check this by reviewing annual transparency reports published by the companies as well as carrying out an online search using the name of the company and keywords, such as the name of their country, subpoena, and user data. As a general rule, it is best to avoid using online services that are closely linked to a country that could be a threat to a journalist. For example, journalists covering sensitive stories linked to the a government should avoid using companies based in that country for their work, especially if those companies are known to collect a lot of data. (Exceptions might include services like Signal, which are specifically designed to collect as little data as possible.) No one service is completely safe to use; there are only more secure options based on what the journalist is reporting on.

**What VPN should I use?**

The trainer should consult the section, [Training digital security for the first time?](#training-digital-security-for-the-first-time), at the beginning of the chapter for details on VPNs and things to consider when choosing one. It is important for journalists to understand why they need a VPN and what it protects them from before making their choice.

**When I delete my information online is it really gone?**

For detailed information on deleting online content consult chapter seven of this guide. Once data is online it’s almost impossible to ensure that it is completely removed. This is because data is:

- Sometimes stored in the accounts of family, friends, colleagues and sources.
- Held on the servers of companies and can be accessed by the company, hackers, and governments, if legally requested. Different companies have different policies around how long data is kept for. These can be reviewed in the terms and conditions found on the website of the company.
- Stored in archive services, such as archive.org's Wayback Machine. You can request that your data is removed by visiting the site and following the steps for data removal. They may or may not comply with your request.
- Captured via screenshots or recordings by others.

</div>

<div class="outcomes">

## Learning outcomes

At the end of the session journalists:

- Understand how information moves around the internet
- Are able to make informed decisions around what online services to use based on their own risk profile. This might include knowing what companies do with their data and how they store it, understanding the jurisdictions in which services are based, and what data law enforcement can request.
- Have a better understanding on who has access to their online data and how this data is obtained
- Know about different types of tools they can use to be safer when carrying out online research, including transparency reports, VPNs

</div>

<div class="tools">

## Templates and tools

The following templates and tools can be useful for teaching this session:

- Annual transparency reports published by tech companies, such as Facebook, Google, and X.
- [Privacy Badger](https://privacybadger.org/)
- [The Tor browser](https://www.torproject.org/download/) by Tor
- Guidance on what type of VPN to choose and how to select one or more. See the [Training digital security for the first time?](#training-digital-security-for-the-first-time) section, for more information.
- [Risk assessment template](/digital-risk-assessment-template)

</div>

<div class="resources">

## Resources

The following resources may be helpful for teaching this chapter:

[The best VPN service](https://www.nytimes.com/wirecutter/reviews/best-vpn-service/) by NYT Wirecutter

[Choosing the VPN that’s right for you](https://ssd.eff.org/module/choosing-vpn-thats-right-you) by the Electronic Frontier Foundation

[Should you use a VPN?](https://www.consumerreports.org/electronics-computers/vpn-services/should-you-use-a-vpn-a5562069524/) by Consumer Reports

[VPN Testing Reveals Poor Privacy and Security Practices, Hyperbolic Claims](https://www.consumerreports.org/vpn-services/vpn-testing-poor-privacy-security-hyperbolic-claims-a1103787639/) by Consumer Reports

[Satellite Communication Threats](https://satellitesafety.openinternetproject.org/), by Jon Camfield and the Open Internet project, is an invaluable resource for journalists and others who might need to use satellite internet as part of their work
</div>

## Activities

The activities below are designed to accompany this training session on safer online research. Trainers should feel free to use their own activities as well as to adapt the materials in this guide to best suit the needs of the journalists they are training. The number and type of activities selected will depend on the level of knowledge of the trainer as well as the amount of time the trainer has to spend with the participants. For those new to training in digital safety, don’t forget to review the [Training digital security for the first time?](#training-digital-security-for-the-first-time) section for best practice guidance.

### Getting started

#### Let's discuss how we research

<div class="table">

| Learning outcomes                                                                                                     | Time            | Difficulty level | Resources                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------- | ---------------- | ----------------------------------- |
| Sharing experiences around carrying out online research. Journalists start thinking about risk and ways to reduce it. | 30 - 40 minutes | Low              | Whiteboard or flipchart, Board pens |

</div>

Be mindful that not all journalists will feel comfortable discussing how they carry out online research.

Journalists might not be familiar with what online data includes, it can be helpful to provide them with a definition before carrying out the exercise.

❶ **Step one**

- Write up the statements below on the board and ask the journalists to read them
  - I carry out work research on my personal devices
  - I always do a risk assessment before I start research on a story
  - I have doubts about who is collecting my online data
  - I trust the online services I use and I know what they are doing with my data
  - I have realised that my online data might be at risk a while after I started carrying out research online
- Ask the journalists to discuss the statements with the person next to them.
- Facilitate a discussion on the questions, writing up common experiences on the board.

❷ **Step two**

- Get journalists to start thinking about what they could do to be more secure online by asking them the following questions:
  - What do you need to know in order to carry out more secure internet research?
  - Are there any stories that you understand to be riskier than others? If so, what can you do to protect yourself?
  - How comfortable do you feel speaking to your editor about online risk?
  - Would carrying out a risk assessment be helpful? If so, how?

### Knowledge building

#### I How the internet works

<div class="table">

| Learning outcomes                                                                                        | Time            | Difficulty level | Resources                                       |
| -------------------------------------------------------------------------------------------------------- | --------------- | ---------------- | ----------------------------------------------- |
| Journalist learn how information is transmitted on the internet and how this makes their data vulnerable | 30 - 40 minutes | Medium           | Whiteboard, flip chart, pens, A3 piece of paper |

</div>

_Trainer note: best practice for this activity can be found in the section, [Training digital security for the first time?](#training-digital-security-for-the-first-time), located at the beginning of this chapter._

_The aim of this activity is to give journalists a brief overview of how information moves around the internet so that they can better understand who can access their data. This information will help them with further exercises during the day’s session._

_Journalists would benefit from an explanation of some key vocabulary, including Internet Service Provider (ISP) and Internet Protocol (IP) address. These definitions can be found in the section, [Training digital security for the first time?](#training-digital-security-for-the-first-time), located at the beginning of this chapter._

❶ **Step one**

- Ask the journalists to put forward some ideas on how information moves around the internet. Encourage them to think about how they connect to the internet from their phone or home.
- Using their answers as a starting point illustrate how information is sent using the internet. You can either do this by drawing it on a whiteboard, using a premade illustration or by showing a video

❷ **Step two**

- Ask the journalists the following questions:
  - What did you learn that was surprising?
  - What are the points of vulnerability as your information moves around the internet?
  - What concerns do you have?

#### II Who can access my online data?

<div class="table">

| Learning outcomes                                                                                                                                                                                                            | Time       | Difficulty level | Resources                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------- | ----------------------------------------------- |
| Media workers have a better understanding of what data online services are collecting on them.<br>Journalists are able to make better informed decisions about which online services to use based on their own risk profile. | 60 minutes | Medium           | Whiteboard, flip chart, pens, A3 piece of paper |

</div>

_Trainer note: best practice for this activity can be found in the section, [Training digital security for the first time?](#training-digital-security-for-the-first-time), located at the beginning of this chapter. Trainers should do some research on what data companies collect on users based on their local context in advance of this training activity and use some case studies of data_

❶ **Step one**

- Journalists work together in small groups to write down on the A3 piece of paper what data they think companies collect about them. They should focus on telephone service providers, internet services providers as well as well-known tech companies.
- Journalists then come together to discuss what data they think is being collected. The trainer can write up their suggestions on the board.

❷ **Step two**

- Walk the journalists through the general data that is collected by these companies. This can include sign up data, location data, IP address, and possible content of messages. Map out the data on the board and compare it to the data that the journalist suggested at the beginning of the activity. Is there an overlap?
- Stress that this is just a general overview of the type of data that is collected. Highlight that it is important to check the terms and conditions of companies as well as local laws to find out the exact data being collected.
- The trainer may want to use a local case study to show journalists how data is being collected by companies and/or governments. The case study should highlight what data was collected, who accessed it, and what laws allowed that data to be obtained. A discussion can be facilitated around how this forms part of the journalist’s risk analysis.

❸ **Step three**

- Outline the best practice that journalists can use when deciding what services to use. This can include:
  - Before signing up to a service, researching the companies to find out who owns them, where they are based, and where their servers are based, and analysing whether this poses a risk for the individual journalist.
  - Reading company transparency reports
  - Knowing whether the service they are using stores their data in encrypted form.
  - Understanding the laws in their country around how long a company can store their data for and whether the government is obtaining that information legally or illegally.
  - Getting journalists to understand who may target them for their information and make a decision on which online services to use based on that.
  - Highlighting that this is just one way that people obtain data and that there are other ways, including brute-force hacking of accounts, malware, including spyware, and physical access to devices.

❹ **Step four**

- Wrap up the session with the following questions:
  - What did you learn that was surprising?
  - How much more informed do you feel now about choosing online services?
  - What else would you like to know

#### III Best practice for carrying out secure research online

<div class="table">

| Learning outcomes                                                                 | Time       | Difficulty level   | Resources                                                        |
| --------------------------------------------------------------------------------- | ---------- | ------------------ | ---------------------------------------------------------------- |
| Journalists learn of specific steps they can take to secure their online browsing | 60 minutes | Medium to Advanced | Whiteboard or flipchart, Board pens, laptop and projector set up |

</div>

_Trainer note: best practice for this activity can be found in the section, [Training digital security for the first time?](#training-digital-security-for-the-first-time), located at the beginning of this chapter._

❶ **Step one**

- Ask the journalists about situations where they have been worried that their activity online could be tracked by others. Common situations might include:

  - Visiting websites for research that hold illegal content
  - Downloading documents from government websites and the sites of companies
  - Visiting chat rooms, forums, or similar sites

- Walk the journalists through best practice for carrying out secure online research. Guidance for this can be found at the beginning of this chapter. The trainer might want to think about the following:
  - Ensuring that the sites they visit are encrypted
  - Using an ad blocker
  - Working from a separate computer
  - Using a VPN
    - What a VPN is
    - What a VPN protects against and what it doesn’t protect against
    - Choose a VPN that doesn’t track browsing history
    - That works in the country it will be used in
    - The journalist is able to decide whether having a VPN based in their country is a risk for them
    - The journalist understands the local law around VPN use.

❷ **Step two**

- Carry out a quick survey with the people in the room to see who has used a VPN and who has not.
- Tell the journalists you are going to show them how to set up and use a VPN
- Using a laptop and projector set up, download the VPN you want to use. A good option would be TunnelBear or Mullvad, both of which have a very good track record of privacy and security.
- Walk the journalists through using the VPN and answer any questions they may have.

## Personal security plan

### Completing the risk assessment

<div class="table">

| Learning outcomes                                                                                                                                                                                       | Time            | Resources                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------- |
| Journalists think through their individual risk and the risk associated with a particular story when carrying out online research.<br>Journalists are able to think through mitigation for those risks. | 20 - 30 minutes | [Risk assessment template](/digital-risk-assessment-template) |

</div>

This section should help journalists better understand the risks that they face and get them thinking about concrete steps for mitigating that risk.

❶ **Step one**

- Tell the journalists they are going to work alone to complete their section of the risk assessment titled safer online research.
- Journalists should work on answering the questions and providing concrete steps for mitigating risk.
- Support should be provided should they have questions, doubts, or look like they need additional help.

❷ **Step two**

- Help journalists reflect on the process by asking the following questions:
  - What information have you learned in today’s session that has helped you make more informed decisions around carrying out safer online research?
  - What else do you think you need to learn in order to be safer online?

