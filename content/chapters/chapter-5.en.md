+++
type = "report"
title = "Chapter 5: Protecting materials"
layout = "single"
weight = 6
toc = true
+++

## Introduction

Journalists handle a large amount of documents and data from a range of people, including government officials, private companies, confidential sources, amongst others. Learning how to receive, store and protect that information can be key to keeping themselves and their sources more secure.

This chapter will cover:

- Thinking about individual risk when it comes to securing materials
- Best practice for backing up and storing data
- The basics of encryption
- Encrypting documents, USBs, SD cards, and external drives

## Training journalists for the first time?

The following can be helpful to keep in mind:

- Journalists will be receiving documents and files through email, social media platforms, and messaging apps.
- The identity of the person sending the information may not always be known to the journalist.
- Journalists are sharing documents with others regularly and may not be aware of the most secure way to do that. They often speak with sources on platforms favoured by the source. Getting sources to switch to more secure methods of communication is difficult.
- Journalists normally have a process for backing up important documents but may be less likely to be backing up content on their phone.
- As journalists are normally working to a deadline they may not prioritise time to learn about encryption.
- Journalists are likely to not have had sufficient training in how to secure materials.
- Some forms of encryption may be illegal in the country the journalist is working in or travelling to. Law enforcement or courts in some countries could also force people to hand over passwords or decryption keys.

## Training digital security for the first time?

This section covers best practice that can be used when teaching the activities in this chapter. See the [resources](#resources) section in this chapter for further reading.

_General guidance for protecting materials_

- What materials a journalist protects and how they protect them will depend on how sensitive the materials are and who may want to gain access to it. If the threat is a state actor or adversary well-versed in hacking then it is advisable to encrypt information. See below for more information on encryption.
- In the majority of situations, journalists can continue to collaborate and receive and store materials via the online services they normally use, for example Google Drive or O365. They should ensure those accounts have two-factor authentication (2FA) turned on, ideally through physical security keys or passkeys, and that they are using long passwords. See chapter two for more details on account security.
- Journalists should be aware that the online services they use may be collecting metadata on users. Metadata is a set of data that describes other data. For example, the time a photo was taken, the make and model of the device that took the photo, and the location the photo was taken at. Metadata can give governments and others a substantial amount of information that could be used against a journalist and their source. At the same time, it can be immensely helpful to journalists who are trying to verify or fact-check content.
- If the threat is a government, then journalists should largely avoid using online services that were founded in, are based in or have servers in the country linked to that particular government. This is because data may be at greater risk of being accessed by that government. Exceptions can be made for services that are using end-to-end encryption and do not collect metadata on users.
- Having several copies of the same materials is advisable to better protect against loss of data. For sensitive documents, journalists should think about backing up information to several external  drives, encrypting the contents of those drives, and then storing them in different locations.
- Drive technology is constantly evolving. Solid-state drives are generally faster but more expensive, while hard drives are cheaper but can be damaged more easily when dropped or handled roughly (for example during travel). Solid-state drives can also [start to lose data](https://www.tomshardware.com/pc-components/storage/unpowered-ssd-endurance-investigation-finds-severe-data-loss-and-performance-issues-reminds-us-of-the-importance-of-refreshing-backups) when powered off for prolonged periods of time. Solid-state drives are typically better for regularly accessed data, while hard drives are better for archival data. We recommend that you also power on and test hard drives regularly.
- Prompt journalists to think about how they will protect their materials in advance of a story by doing a digital risk assessment. This will help them better avoid situations where they receive sensitive materials and do not have a plan to protect and store them.

_Encryption_

- Encryption is a secure way of protecting information so that it can not be intercepted and/or accessed by others unless they have the password.
- There are a number of different services that encrypt data, some are easy to use while others will take practice.
- Users looking to encrypt external drives, USBs or SD cards can use the built-in encryption services offered by Windows, known as [Bitlocker](https://support.microsoft.com/en-us/windows/turn-on-device-encryption-0c453637-bc88-5f74-5105-741561aae838), and [macOS](https://support.apple.com/en-gb/guide/disk-utility/dskutl35612/mac), known as FileVault. Bitlocker is only available to users who have Pro editions of Windows, with Device Encryption available to those using Home editions. [VeraCrypt](https://www.veracrypt.fr/code/VeraCrypt/) is a reputable piece of third-party software that is useful for encrypting both internal and external drives and works on Windows, macOS, and Linux. Journalists looking to encrypt individual documents to store in the cloud can use [Cryptomator](https://cryptomator.org/).
- There are different ways to encrypt a computer's internal drive depending on whether it is a Windows PC or a Mac. Turning on encryption for Windows PC involves activating their encryption program called Bitlocker, available for Windows Pro editions. You can read about how to do this [here](https://support.microsoft.com/en-us/windows/turn-on-device-encryption-0c453637-bc88-5f74-5105-741561aae838#:~:text=Or%2C%20select%20Start%20%3E%20Settings%20%3E,and%20then%20follow%20the%20instructions.). Those who use Windows Home editions can enable a feature called [Device Encryption](https://support.microsoft.com/en-us/windows/device-encryption-in-windows-ad5dcf4b-dbe0-2331-228f-7925c2a3012d) instead, though it's only available on selected devices. macOS users can turn on FileVault, the equivalent encryption program for Macs. Read more about encrypting Mac computers [here](https://support.apple.com/en-gb/guide/mac-help/mh11785/mac).
- Laws around encryption are different in each country so it’s important to ensure the journalist is aware of the law of the country they are living in and any countries they are travelling to.
- Be aware that even though the journalist may have encrypted materials they may be legally requested to decrypt the information by putting in their password if requested to do so by law enforcement.

<div class="faq">

## Common questions asked

Below are some common questions that journalists ask about this topic and preparing answers to them in advance can be helpful.

**How can I share documents more securely with my team?**

This is a really good question and the type of questions journalists should be asking around securing materials. It can be helpful here to get the journalists thinking about the digital risk associated with the story and to walk through any best practice and tools they could use. In most cases, it is a good idea to just use the same tools you would usually use for collaboration, such as Google Drive or O365. It's important to regularly audit whom the files are being shared with, remove access from people who are no longer in the project or organization, and ensure that everybody in the project uses long, unique passwords, two-factor authentication, and keeps their devices up to date to reduce the risk of their accounts being broken into. If you are working on a particularly sensitive investigation, it might be necessary to modify or implement a special toolset instead.

**If I delete a document from my device could it be recovered?**

Get the journalist to think about who would be interested in recovering documents from their devices and the tech capacity of that adversary. Advanced adversaries might be able to recover documents that were deleted off unencrypted drives, while adversaries with even more sophisticated forensics capabilities could try to recover other types of content as well, though this is time-consuming, expensive, and success is hardly guaranteed. If journalists are very concerned about well-resourced governments accessing files that have been deleted from their devices, they could use a special program which securely deletes content off a drive, do a factory reset of the device (which will reset encryption keys and make the old contents of the drive inaccessible), and possibly physically destroy the drive.

**Is it safer to print out my documents and keep them in my home than store them online?**

Try to understand what the journalist is worried about when they use the word safer. For example, are they concerned about people obtaining the documents or do they have concerns about spyware? Do they want to show the physical documents to others and are worried that they would take a photo or a screenshot if they received a digital version?
Speak with them about their threat model and risk assessment: are they worried about someone entering their house or office? Are they mostly concerned about foreign or domestic adversaries? Things they need to consider include: are they at risk of detention and/or arrest, is their home or office secure, how does their online provider deal with subpoenas?
Even if a journalist prints out documents for safekeeping, those documents were likely processed in other ways: they might have been received via email or a copy thereof might reside on a cloud service. For this reason, we generally recommend against keeping print copies, with the exception of specific threat models, for example showing a document to a source the journalist might not trust and wanting to make sure they do not make a copy thereof.

**How can I secure film footage and other heavy files?**

Journalists working with large files face more challenges when it comes to securing their materials. This is because they may be working in locations with poor internet connectivity, making it harder to upload to the cloud or they need to cross borders with sensitive footage. It’s important to get journalists thinking about their own individual risk and to think through options for securing materials. For those in a fixed location, backing up materials to several external encrypted drives and storing them in different locations will likely be the best option. Check out the Freedom of the Press Foundation's and Field of Vision's [guide to digital security for filmmakers](https://www.digitalsecurity.film/) if you will be working with a lot of data and big files.

</div>

<div class="outcomes">

## Learning outcomes

At the end of the session journalists:

- Are able to make informed decisions around what steps they need to take to secure materials based on their own risk profile and the risk profile of particular stories.
- Know about different types of tools they can use to secure their materials, including services to encrypt documents, USBs, SD cards, and external drives.
- Have a plan for backing up and storing their data.

</div>

<div class="tools">

## Templates and tools

The following tools can be useful for teaching this session:

- [Veracrypt](https://www.veracrypt.fr/code/VeraCrypt/) for encrypting external drives, USB sticks, and SD cards
- [Cryptomator](https://cryptomator.org/) for encrypting individual documents
- [Dangerzone](https://dangerzone.rocks/) for turning suspicious files (documents which you suspect could contain malware) into safe PDFs
- [Template for backing up data](https://docs.google.com/spreadsheets/d/1F8ZYjnKgKa0phb368_LqjeIZMjapAWAnX6hYL5TgXaA/edit#gid=0)
- [Risk assessment template](/digital-risk-assessment-template)

</div>

<div class="resources">

## Resources

The following resources may be helpful for teaching this chapter:

[What should I know about encryption?](https://ssd.eff.org/module/what-should-i-know-about-encryption) by the Electronic Frontier Foundation

[Key concepts in encryption](https://ssd.eff.org/module/key-concepts-encryption) by the Electronic Frontier Foundation

[How to encrypt an external hard drive](https://proprivacy.com/guides/encrypt-external-hard-drive) by ProPrivacy

[Cryptomator tutorial](https://www.youtube.com/watch?v=g9A0zihHZ14) by Cryptomator

[Dangerzone lets you open attachments safely](https://www.wired.com/story/dangerzone-open-email-attachments-safely/) by Wired

Guides on protecting your [Windows](https://securityplanner.consumerreports.org/tool/encrypt-your-windows-pc), [macOS](https://securityplanner.consumerreports.org/tool/encrypt-your-mac), [iOS](https://securityplanner.consumerreports.org/tool/encrypt-your-iphone), and [Android](https://securityplanner.consumerreports.org/tool/encrypt-your-android-phone) devices with encryption by Consumer Reports

</div>

## Activities

The activities below are designed to accompany this training session on protecting materials. Trainers should feel free to use their own activities as well as to adapt the materials in this guide to best suit the needs of the journalists they are training. The number and type of activities selected will depend on the level of knowledge of the trainer as well as the amount of time the trainer has to spend with the participants. For those new to training in digital safety, don’t forget to review the section, [Training digital security for the first time?](#training-digital-security-for-the-first-time), for best practice guidance.

### Getting started

#### Protecting materials: Do you agree?

<div class="table">

| Learning outcomes                                                                                                                              | Time            | Difficulty level | Resources                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ---------------- | -------------------------------------------- |
| Journalists think more in-depth about the materials they handle and start to consider what steps they need to take in order to be more secure. | 20 - 30 minutes | Low              | Whiteboard, flip chart, pens, post-it notes. |

</div>

_This activity is modified from the original version of the SaferJourno guide for media trainers._

❶ **Step one**

- The trainer creates a list of statements and puts them up on the wall of the room

  - Example statements could include,
    - The less information I share, the safer I am
    - My research for stories does not include sensitive information
    - It is likely someone may try to access documents on my devices
    - My data is safe because my devices are password protected
    - I need to protect my source as much as possible

- The journalists are then told to read the statements and to decide whether they agree or disagree with the answer or whether they are unsure about it.
- They are put into small groups and each group is given three different coloured packs of post-it notes. Each colour should represent a position that the journalist has about the statement. For example, green represents agree, red for disagree, and yellow for not sure. Each group should be given the same colour post-it notes.
- The trainer then invites the journalists to come up to put their post-it notes under the statements on the wall. For example, a journalist agrees with the statement, I need to protect my source as much as possible, and sticks a green post it-note underneath.

❷ **Step two**

- The trainer invites the journalists to form a semicircle in front of the wall and invites them to discuss what they see.
- The trainer can initiate the discussion by highlighting some common trends they can see from the post-it notes. For example, under the statement, I need to protect my source as much as possible, there may be a number of green post-it notes showing that the majority of the participants agree with this statement.
- The journalists discuss the statements and the trainer should encourage them to start talking about the steps they take or now need to take to improve the security of their materials. Some common questions could include:
  - What are you currently doing to protect sources?
  - How do you normally receive documents? What concerns do you have about receiving documents in the way that you do?
  - Do you think about protecting materials before starting a story? What steps can you take to ensure documents are better protected?

### Knowledge building

#### I Talking about backups

<div class="table">

| Learning outcomes                                                                                                                                                                                                   | Time       | Difficulty level | Resources                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------- | --------------------------------------------------------------------------------------------------------------- |
| Journalists have a plan for backing up and removing content on their devices<br>Journalists discuss options for backing up data and are able to choose a suitable option for themselves based on their risk profile | 45 minutes | Medium           | Whiteboard or flipchart, Board pens, PowerPoint slides prepared by the trainer, spreadsheet for backing up data |

</div>

_This activity has been amended from the Level Up chapter how to secure your computer_

❶ **Step one**

- Ask the journalists how much they value the information stored on their devices. How useful is it to their lives? Now ask them how much time they spend organising and backing up this content.
- Ask participants how often do they backup their files? Share examples of best practices related to data backup, such as:
  - Keeping the backup in a safe place that is separate from their computer
  - Backing up their information on a frequent, regular basis
  - Possibly encrypting the drive or storage media where data will be stored.

❷ **Step two**

- Share the [backup template](https://docs.google.com/spreadsheets/d/1F8ZYjnKgKa0phb368_LqjeIZMjapAWAnX6hYL5TgXaA/edit#gid=0) with the group. Explain that they are going to work individually to complete it with some general examples of data that they need to backup. Get them to focus on personal data too, especially content that might be stored on their phones. Note that journalists may already be very familiar with data backups, especially if they work for more established newsrooms.
- Facilitate a discussion about the spreadsheet and its content. Questions you might want to touch upon include:
  - Are there any devices new or old that need backing up?
  - Is there any content that you think about backing up but then don’t get around to doing it?
  - Is there anything particularly sensitive that you should back up?

#### II Encrypting an external drive

<div class="table">

| Learning outcomes                                                                                                                                                                                                         | Time       | Difficulty level | Resources                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------- | -------------------------------------------------------------------- |
| Journalists discuss options for backing up data and are able to choose a suitable option for themselves based on their risk profile<br>Journalists learn how to backup and encrypt information to an external drive. | 60 minutes | Advanced         | Whiteboard, flip chart, pens,PPT slides, laptop and projector set up |

</div>

_Trainer note: it is recommended that you carry out a live demonstration using a laptop and projector set up. Best practice for this activity can be found in the [Training digital security for the first time?](#training-digital-security-for-the-first-time) section, located at the beginning of this chapter. This is an advanced level activity and is recommended to be carried out by experienced trainers._

❶ **Step one**

- Explain that there are several ways to encrypt an external drive. Explain that Mac users can use the built in encryption tool called FileVault. Windows PC users, who have professional accounts, can use Windows’ Bitlocker and that there is a third-party service that all can use called VeraCrypt.

❷ **Step two**

- Tell the journalists that in order to encrypt the external drive you will need to think of and use a password. Speak about the importance of creating a strong password and use this time as an opportunity to review good password best practice. Highlight that it is better to think of this password in advance so you do not have to think of it when you are encrypting.
- Explain that you are going to show how to encrypt data to an external drive using VeraCrypt:
  - Download VeraCrypt
  - Connect the external drive to the computer via the USB port
  - Carry out a backup of the data on the external drive
  - Encrypt the external guide, following for example [this guide](https://freedom.press/training/encryption-toolkit-media-makers/veracrypt-guide/#encrypting-external-storage-devices-on-veracrypt)

❸ **Step three**

- Answer any questions that the journalists may have
- Speak about the importance of having more than one backup. Journalists may wish to have several encrypted external drives as well as a backup to the cloud. How many backups they create and where they store them will depend on their risk profile. Further information on this can be found at the beginning of this chapter.
- Speak with the journalists about situations where even though information is encrypted people could still obtain access. Help them think of way to better protect information if they face situations like the ones listed below:
  - Being asked by law enforcement to unlock encrypted devices and the legal risks that arise if you refuse to do so.
  - Being physically threatened to open your devices.
  - Discuss with your participants for how long files need to be stored securely. Do you need to keep their contents and existence hidden just before publication, or after publication as well? And what should you data retention policies be and when should those files be deleted? It might be useful to discuss those matters with media lawyers as well.

#### III Encrypting a document

<div class="table">

| Learning outcomes                                                     | Time       | Difficulty level | Resources                                                               |
| --------------------------------------------------------------------- | ---------- | ---------------- | ----------------------------------------------------------------------- |
| Journalists learn how to encrypt a document and store it in the cloud | 60 minutes | Medium           | Whiteboard, flip chart, pens, post-it notes, computer and laptop set up |

</div>

_Trainer note: it is recommended that you carry out a live demonstration using a laptop and projector set up. Best practice for this activity can be found in the section, [Training digital security for the first time?](#training-digital-security-for-the-first-time), located at the beginning of this chapter. This is a medium level activity and it is recommended that trainers are comfortable using the tool before teaching how to use it._

❶ **Step one**

- Ask journalists for general examples of individual or groups of documents they would like to encrypt. Examples include health information, sensitive documents given to them by sources, photos of their family.

❷ **Step two**

- Tell the journalists you are going to demonstrate to them how to encrypt documents so that they can be stored easily and safely in a normal cloud storage service, such as Google.
- Tell the journalists that in order to encrypt a folder of documents you will need to think of and use a password. Speak about the importance of creating a strong password and use this time as an opportunity to review good password best practice. Highlight that it is better to think of this password in advance so you do not have to think of it when you are encrypting.
- Explain that you are going to show them how to encrypt documents using Cryptomator.
  - Download the application
  - Follow the steps for encrypting a file of documents using a guide such as [this one](https://www.jyu.fi/digipalvelut/en/guides/data-security/securing-your-files-with-the-veracrypt-program) [_Note: the URL says that this guide talks about VeraCrypt but, as of September 2023, it provided an introduction to Cryptomator_]

❸ **Step three**

- Answer any questions the journalists may have

## Personal security plan

### Completing the risk assessment

<div class="table">

| Learning outcomes                                                                                                                                                                                       | Time            | Resources                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------- |
| Journalists think through their individual risk and the risk associated with a particular story when carrying out online research.<br>Journalists are able to think through mitigation for those risks. | 20 - 30 minutes | [Risk assessment template](/digital-risk-assessment-template) |

</div>

This section should help journalists better understand the risks that they face and get them thinking about concrete steps for mitigating that risk.

❶ **Step one**

- Tell the journalists they are going to work alone to complete their section of the risk assessment titled protecting materials.
- Journalists should work on answering the questions and providing concrete steps for mitigating risk.
- Support should be provided should they have questions, doubts, or look like they need additional help.

❷ **Step two**

- Help journalists reflect on the process by asking the following questions:
  - What information have you learned in today’s session that has helped you make more informed decisions around securing materials?
  - What else do you think you need to learn?

## Case studies

These case studies accompany the course material and provide journalists with real-life examples of digital threats against media workers. The case studies can be used to promote discussion around different types of risks as well as serve as a way to teach journalists steps to better protect themselves and others.

Our writeup: [Case study on protecting materials](/case-studies#activists-put-at-risk-after-documentary-film-makers-devices-seized-by-syrian-security-agents)

CJR's writeup: [Activists put at risk after documentary filmmaker’s devices seized by Syrian security agents](https://archives.cjr.org/feature/the_spy_who_came_in_from_the_c.php?page=all)
