module.exports = {
  docs: [
    'syllabus',
    'office-hours',
    {
      type: 'category',
      label: 'Classes',
      items: [
        'classes/index',
        'classes/week1',
        'classes/week2',
        'classes/week3',
        'classes/week5',
        'classes/week6',
        'classes/week7',
        'classes/week9',
        'classes/week11',
        'classes/week12',
      ],
    },
    {
      type: 'category',
      label: 'Case Studies',
      items: [
        'case-studies/overview',
        'case-studies/case1-product-management',
        'case-studies/case2-prompt-engineering',
        'case-studies/case3-llm-technicals',
        'case-studies/case4-rag',
        'case-studies/case5-industry-practices',
        'case-studies/case6-fine-tuning',
        'case-studies/case7-evals-data',
        'case-studies/case8-production',
      ],
    },
    {
      type: 'category',
      label: 'Project',
      items: [
        'project/overview',
        'project/roles'
      ],
    },
  ],
};
