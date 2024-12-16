---
sidebar_position: 8
title: "Week 10: Fine Tuning"
---

# Week 10: Fine Tuning with axolotl and modal

## Required Reading
[Chapter 13 of Fine Tuning Modal Examples](https://wesslen.github.io/modal-examples/13_finetuning.html)

## Prerequisites
Before attending class, please complete the following setup steps to ensure you can participate in the fine-tuning exercises:

### 1. HuggingFace Setup
- Create a secret named `huggingface` in your Modal workspace
- Use the HuggingFace template in your Modal dashboard
- Get your API token from HuggingFace (settings → API tokens)
- Set `HF_TOKEN` with your key
- Rename from `my-huggingface-secret` to `huggingface`

### 2. Model Access
- For LLaMA models, visit the Hugging Face model page
- Accept Terms and Conditions for model access (instant approval)
- This is required for LLaMA 3 8B and similar models

### 3. Logging Setup (Optional but Recommended)
- Create a secret named `wandb` in your workspace for Weights & Biases logging
- Can be created from template
- Alternative: Consider using axolotl's MLFlow integration
- Proper logging is essential for tracking training progress

## Additional Resources

### Axolotl Resources
- [Axolotl Colab Notebook](https://colab.research.google.com/github/mlabonne/llm-course/blob/main/Fine_tune_LLMs_with_Axolotl.ipynb) - Interactive tutorial
- [Axolotl Documentation](https://axolotl-ai-cloud.github.io/axolotl/) - Official docs and guides
- [LLM Course Materials](https://github.com/mlabonne/llm-course) - Additional learning resources

## Note
The instructor will not be able to debug setup issues during class time. Please ensure you have completed all setup steps before the session begins.

