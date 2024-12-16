---
sidebar_position: 2
title: Project Roles
---

# Project Roles

## Project Overview

The class will work together to conceptualize, design, and prototype an LLM-based application for group-based course projects.

In groups of four students, you will work and iterate on delivering a Proof-of-Concept (MVP, Minimum Viable Product) LLM application across four different project milestones.

To choose groups/roles, each student will complete the role/project questionnaire after the first class, ranking their preference of the four roles. You may request preferred students who you know who you want to work with, which will be taken into consideration.

## Roles

### Product Manager (Lead)

Acts as project lead and is responsible for defining and maintaining project scope, objectives, and success criteria in a [Product Requirements Document (PRD)](https://theproductmanager.com/topics/product-requirements-document/). Manages documentation, coordinates team efforts, and ensures alignment with business requirements. Develops and communicates project strategy and roadmap. Serves as an advocate for customer (UX) experience and journey, ensuring the product aligns with a customer need ([resource](https://medium.com/@liuyueguang96/llm-application-2-3-ai-product-management-838e1298c0bb)).

### Data/Prompt Engineer

Oversees data quality and management throughout the project lifecycle. Responsible for data collection, preprocessing, and augmentation strategies. Manages data annotation processes and explores synthetic data generation techniques. Collaborates closely with the AI Application Developer on prompt engineering and iterative refinement based on model performance.

### AI Application Developer

Leads the technical implementation of AI components, including LLM selection and integration. Develops prompt engineering pipelines, implements advanced LLM features (e.g., function calling, retrieval-augmented generation), and explores fine-tuning opportunities. Collaborates with Data/Prompt Engineer for prompt/data pipelines and LLM Ops for implementation and deployment.

### LLM Ops

Manages the operational aspects of LLM deployment and maintenance. Responsible for setting up and maintaining the development environment, implementing CI/CD pipelines, and version control systems. Focuses on optimizing model inference, monitoring system performance (latency, memory usage), and ensuring scalability. Collaborates with the AI Application Developer on model deployment strategies.

## Presentation Schedule by Roles

### AI Product Manager
- [LLMs in Product Development](../case-studies/case1-product-management) (Aug 29)
- [UX in LLM Products](../case-studies/case5-industry-practices) (Oct 3)

### Data/Prompt Engineer
- [Prompt Engineering](../case-studies/case2-prompt-engineering) (Sept 5)
- [Evals and Data Curation](../case-studies/case7-evals-data) (Oct 31)

### AI Application Developer
- [LLM Technicals](../case-studies/case3-llm-technicals) (Sept 19)
- [GPU/Fine Tuning](../case-studies/case6-fine-tuning) (Oct 17)

### LLMOps Developer
- [RAG](../case-studies/case4-rag) (Sept 26)
- [LLMs in Production](../case-studies/case8-production) (Nov 7)

## Project Timeline

![](/img/spiral.png)

This project will follow a [spiral development pattern](https://www.geeksforgeeks.org/software-engineering-spiral-model/), where students will have four deliverables:

1. [**Project Milestone 1**](milestone1.md) (Sept 12): Initial prototype of an LLM inference engine (e.g., Modal) with initial prompt engineering

2. [**Project Milestone 2**](milestone2.md) (Oct 24): 2nd iteration of the prototype, improving on identified gaps in the product and integrating at least (initial) Retrieval Augmented Generation

3. [**Project Milestone 3**](milestone3.md) (Nov 21): 3rd iteration which could include adding Fine Tuning, Evals, and/or improved Production latency

4. [**Final Submission**](final-submission.md) and [**Final Presentation**](final-presentation.md) (Dec 12, final exam date): Operational prototype, GitHub Repo, write up and in-class presentation

## Example Implementation

![](/img/ai-application.jpeg)

Simple example: [Llama 3 8B Modal Service Repo](https://github.com/dsba6010-llm-applications/modal-llama-3-8b-serving) + [Streamlit Chat App](https://github.com/dsba6010-llm-applications/modal-streamlit-chat)

## Possible Project Ideas

These are just a few initial ideas for your project:

- **Copilot generator**: Develop a custom "Copilot" code generator with RAG and as a VSCode Extension

- **Edge LLM on a raspberry pi**: Serving an open LLM onto a Raspberry Pi with the goal of "how low can you go?" or on an iPhone using [MLC Chat](https://llm.mlc.ai/docs/get_started/introduction.html)

- **Weather forecaster app**: Use a weather API (ex: [api.weather.gov](https://api.weather.gov/points/38.8894,-77.0352)) to auto-generate daily weather reports, augmenting it with a knowledge base. Alternatively, you could do something similar with other APIs like [stocks](https://modal.com/docs/examples/fetch_stock_prices).

- **Retrieval Augmented Generation with custom "in-the-wild" dataset**: 

For example:
  - Modal data examples like [web scraping](https://modal.com/docs/examples/web-scraper)
  - [Podcast transcription](https://modal.com/docs/examples/whisper-transcriber)
  - [HackerNews SlackBot](https://modal.com/docs/examples/hackernews_alerts)
  - Local Government (e.g., [HDC agenda/guidelines](https://github.com/wesslen/hdc-agenda-retrieval/tree/main))
  - Software Docs (e.g., HF, Modal, etc.)