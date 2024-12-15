module.exports = {
  docs: [
    'syllabus',
    'office-hours',
    {
      type: 'category',
      label: 'Modules',
      items: ['modules/introduction'],
    },
    {
      type: 'category',
      label: 'Weekly Readings',
      items: [
        'readings/week1',
        'readings/week2',
      ],
    },
    {
      type: 'category',
      label: 'Case Studies',
      items: [
        'case-studies/overview',
        'case-studies/prompt-engineering',
        'case-studies/llm-technicals',
      ],
    },
    {
      type: 'category',
      label: 'Project',
      items: ['project/overview'],
    },
  ],
};
