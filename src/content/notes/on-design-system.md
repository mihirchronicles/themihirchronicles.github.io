---
title: "On Design System"
tags: ["general"]
date: "2020-08-24"
draft: false
path: "/notes/on-design-system"
---
I have been working on Design System at Morningstar since 2018. There is so much I have learned. For this reason, I wanted to document the journey and share the lessons learned. I am no expert but below are the notes on my observation made and experiences gained while helping build a design system.

The team has gone through 3 versions of the library since I joined. The team is meticulously process driven shaped by Nathan Curtis of Eight Shapes since beginning. That culture of process is still present and the team continues to evolve as it overcomes challenges and solve problems.

Some of the things I have heard around process during our team discussions.

> A highly disciplined team that is ruthless about process, rigor and attention to details. This ensures delivery with high quality. The process is transparent and honest. Team members are compassionate but firm; they challenge one another and others. But, don't become married to process.

> The game of inches is to go after the incremental changes as opposed to for a big win because the latter will die from fading.

## Problems

Before joining Morningstar Design System team, I had no clue what Design System did or meant. Twitter Bootstrap was the closest thing I knew. Developers who were not proficient in design would import a third party library such as Twitter Bootstrap to make their web application look "pretty." These third party libraries covered the basics such as shapes, sizes, and colors. This allowed developers to focus on coding their applications instead of design.

> The intention of design system is not to stop people from doing. Design system exist to help people work faster. Sacrifice control and embrace chaos when necessary. Problem statement 1: Morningstar has over 60 products and they are distributed all across the organization globally. Designers and developers faced the challenge of maintaining the design and coding standard. Deadlines and roadmaps took over so the goal would be to make the components look as similar to other products as possible. There were central design specs in form of PDFs but were not accessible to everyone. Or the specs would be outdated. So we would have permutations of buttons, navigations, menus, etc.

Every time a new product was launched, so were the components. They were being rebuilt over and over again. If you factor in the salary of developers and designers, and tie it to the time spent on building these same components, it would turn out to be hundreds and thousands of dollars. This would turn out to be very costly for the organization.

**Problem statement 2:** To solve the problem stated above, developers and designers teamed up part-time to built a central library. So anyone could consume this library (our version of Twitter Bootstrap) and would meet the design standard. It was not perfect, but it was a progress in the right direction.

Consuming teams found many challenges including implementation because of lack of documentation. Changes made were less frequent making the library stale. However, the library was available for anyone to fork it and expand it.

This led to consuming teams building their own versions on top of this library. Product A built the initial library. Product B built another set of library on top of the initial library. Product C is now consuming Product B's library because Product B has the variation of button they need. So there were many extensions of the initial library. This led to many non-standard components again.

## Morninstar Design System

There was no central team managing the library, contributing to the components, documenting the visual guidelines and technical guides, and educating developers and designers on the system.

Until Morningstar Design System arrived. The team was responsible for version 1 release of the library with components that were largely consumed all across the products. The library was also introduced with **[public documentation site](https://designsystem.morningstar.com/)**. Below is the easy-to-consume definition by MDS team.

> The Morningstar Design System is a collection of design & technical standards built into a central library to help teams quickly build high-quality, consistent experiences.

## Overview of Design System

The main objective of the design system is to bring consistency across all products, improve speed of development, and need for maintenance.

**Central team:** The central team has a clear ownership and accountable to move things forward. The decisions should benefit the entire organization. The central team is not only responsible for building blocks, but also need to maintain what they build. This ensures trust and durability for teams to adopt the design system.

**Product focused:** Design system should be treated as a product with treating consuming teams and implementors as clients. If clients are not treated well, there won't be any adoption gradually leading to decline of the system. Design system is a living system. Design system consists of many *features—* UI components, design assets, design tokens and documentation. These are tangible outputs from the system which users value. Features are mostly driven by designers. But, developers consume these features while they do rapid development of applications. Following questions must be asked when architecting the system.

- How do we release the new components?
- How do we architect with little to no disruption?
- What tools do developers currently use?
- Which languages are products written in? For example, Vue or React.

**Stakeholders:** Design system consist of several stakeholders. The system should be built with the mindset of keeping everyone in mind. Treat all the stakeholders as part of the system. Following are the group of people who keep the design system alive.

- Developers use and build the system
- Designers create visual language and components
- Product managers are customers of the system
- The leadership team are the buyers of the system
- Contributors include both designers and developers

**Roadmap**: Since design system is a product, it should also have a roadmap. For us, we had two roadmaps for the year, for the first and second half. Our team operated remotely since its inception so to bring everyone together we would gather during our on-site meeting at our office in Chicago. During this week-long planning meeting, we had several sessions on large themes and objectives. We would have breakout sessions and team discussions. During the end of the planning meeting, we would share these objectives with all of our stakeholders and users. Sharing these objectives with everyone validated our priorities. Every design system should have a roadmap because it consists of features and value delivered to users.

**Collaboration**: To welcome collaboration, the only thing that is private is our core-channel where all the communication happens between the team members. Rest is all accessible for transparency. There are separate channels for engineering and design. Temporary channels are created during beta and alpha testing. JIRA board is accessible to everyone. We host weekly showcases to share our sprint progress. We accept pull-requests from other developers if the changes made benefit the larger audience. This sort of transparency is intentional which leads to adoption and contribution.

**Adoption & contribution:** Once adoption reaches the peak community contribution takes off. Process needs to be defined because quality can be sacrificed. This can help scale the system but quality can be sacrificed. But if the adoption rate is slow, getting contributing back can be challenging. To embed contribution and collaboration requires continuous engagement with adopters and implementors. But it doesn't just stop at engaging. As a central team, prioritizing feedback and implementing the changes is as crucial to maintain trust.

## Design System Checklist

A design system consist of but not limited to:

- Reusable UI Components with many variations
- Sketch Library (or any other tool)
- Visual Language Assets
- Documentation for Engineers & Designers
- Content Guidelines
- Documentation for Accessibility
- Release Notes
- Contribution Guidelines

*Writing-in-Progress*