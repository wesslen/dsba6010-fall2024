---
sidebar_position: 1
title: Project Milestone 1
---

# Project Milestone 1

## Goal
Develop an initial prototype of an LLM inference + chat interface.

## Deliverables
1. A word, google doc, or pdf file write up (likely 1-2 pages) summarizing progress and questions
2. A GitHub repo with your project code

Only 1 member of the team needs to submit for the group.

## Requirements

### 1. Repository Setup
- Create a new repo in the course's [GitHub organization](https://github.com/dsba6010-llm-applications)
- One repo per group
- Use the course's [modal llama3 8B inference repo](https://github.com/dsba6010-llm-applications/modal-llama-3-8b-serving) as a starting point

### 2. For LLMOps/AI App Developers
- Explore the [api.py file](https://github.com/dsba6010-llm-applications/modal-llama-3-8b-serving/blob/main/src/api.py)
- Review Modal's documentation
- Understand basic Modal conventions and Python patterns

### 3. For Product Manager & Data/Prompt Engineer
- Examine the [client.py](https://github.com/dsba6010-llm-applications/modal-llama-3-8b-serving/blob/main/src/client.py) file
- Study the provided notebook for API usage
- Test different prompts and API interactions

### 4. Write-up Requirements (1-2 pages)
1. Document successful replication of Llama3 inference repo and/or Streamlit app
2. Provide examples of tested prompts:
   - At least 1 successful output
   - At least 1 case where the model underperformed
3. List open questions and challenges with the code/Modal
4. Outline 2-3 project ideas for next milestone

## Extra Credit
Integrate [LangFuse](https://langfuse.com/) into your endpoint for logging traces of all interactions.

## Submission
- Due: Sept 12
- Points: 2
- Submission Types: Website URL or file upload (docx/pdf)
